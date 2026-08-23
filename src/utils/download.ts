/**
 * Resolves the direct download URL for the latest Windows x64 installer.
 *
 * GitHub release assets are versioned (e.g. `Shotera-7.3.0-windows-x64-setup.exe`),
 * so the stable `/releases/latest/download/<name>` shortcut cannot be used. Instead
 * the asset list is fetched once at build time and cached for the whole build.
 *
 * Every failure path (network error, timeout, rate limit, missing asset) falls back
 * to the Releases page so the build never breaks and buttons always stay usable.
 */

/** Releases list page — also the fallback target when asset resolution fails. */
export const RELEASES_URL = 'https://github.com/mosuzo-studio/Shotera/releases';

const LATEST_RELEASE_API = 'https://api.github.com/repos/mosuzo-studio/Shotera/releases/latest';

/** Matches the Windows x64 installer, which is the default download format. */
const SETUP_ASSET_PATTERN = /windows-x64-setup\.exe$/i;

const FETCH_TIMEOUT_MS = 8000;

interface ReleaseAsset {
  name?: string;
  browser_download_url?: string;
}

interface LatestRelease {
  tag_name?: string;
  assets?: ReleaseAsset[];
}

/** Build-time cache: the API is queried once, not once per page. */
let cachedSetupUrl: Promise<string> | null = null;

const fetchLatestSetupUrl = async (): Promise<string> => {
  try {
    const response = await fetch(LATEST_RELEASE_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'shotera-site-build',
      },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.warn(
        `[download] GitHub API returned ${response.status}; falling back to the Releases page for download links.`
      );
      return RELEASES_URL;
    }

    const release = (await response.json()) as LatestRelease;
    const asset = release.assets?.find((item) => item.name && SETUP_ASSET_PATTERN.test(item.name));

    if (!asset?.browser_download_url) {
      console.warn(
        '[download] No `*-windows-x64-setup.exe` asset found in the latest release; falling back to the Releases page.'
      );
      return RELEASES_URL;
    }

    console.info(`[download] Resolved installer for ${release.tag_name ?? 'latest'}: ${asset.name}`);
    return asset.browser_download_url;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[download] Could not resolve the latest installer (${reason}); falling back to the Releases page.`);
    return RELEASES_URL;
  }
};

/**
 * Direct download URL for the latest Windows x64 `.exe` installer.
 * Resolves to {@link RELEASES_URL} when the asset cannot be determined.
 */
export const getSetupDownloadUrl = (): Promise<string> => {
  cachedSetupUrl ??= fetchLatestSetupUrl();
  return cachedSetupUrl;
};
