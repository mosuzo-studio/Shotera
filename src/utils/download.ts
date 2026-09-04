/**
 * Resolves direct download URLs for the latest release assets.
 *
 * Deliberately avoids `api.github.com`: that endpoint is rate limited to 60
 * requests/hour per IP for unauthenticated callers, which is easy to exhaust on
 * shared or CI egress addresses. Instead this follows the `/releases/latest`
 * redirect, which is plain github.com and not rate limited, to learn the current
 * tag, then derives each asset URL from the project's stable naming scheme.
 *
 * Release assets follow `Shotera-<version>-windows-x64<suffix>`, e.g. for v7.3.0:
 *   Shotera-7.3.0-windows-x64-setup.exe
 *   Shotera-7.3.0-windows-x64.msi
 *   Shotera-7.3.0-windows-x64-portable.7z
 *
 * This runs at build time only (the site is `output: 'static'`), so visitors
 * never touch GitHub metadata — their button href is a baked-in literal that
 * points straight at the asset. Every failure path falls back to the Releases
 * page, so the build never breaks and the buttons always stay usable.
 */

/** Releases list page — also the fallback target when resolution fails. */
export const RELEASES_URL = 'https://github.com/mosuzo-studio/Shotera/releases';

const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;

const DOWNLOAD_BASE = `${RELEASES_URL}/download`;

const FETCH_TIMEOUT_MS = 8000;

/** Shown in copy when the release lookup fails; bump alongside real releases. */
const FALLBACK_DISPLAY_VERSION = '7.4.1';

/** Asset kinds exposed on the site, in the order they should be offered. */
const ASSET_SUFFIXES = {
  setup: '-windows-x64-setup.exe',
  msi: '-windows-x64.msi',
  portable: '-windows-x64-portable.7z',
} as const;

export type AssetKind = keyof typeof ASSET_SUFFIXES;

export interface ReleaseDownloads {
  /** Release tag, e.g. `v7.3.0`; null when it could not be resolved. */
  tag: string | null;
  /** Version without the leading `v`, e.g. `7.3.0`; null when unresolved. */
  version: string | null;
  /** Direct asset URLs, falling back to the Releases page when unresolved. */
  urls: Record<AssetKind, string>;
  /** True when `urls` are real asset links rather than the fallback page. */
  resolved: boolean;
}

const FALLBACK: ReleaseDownloads = {
  tag: null,
  version: null,
  urls: { setup: RELEASES_URL, msi: RELEASES_URL, portable: RELEASES_URL },
  resolved: false,
};

/** Extracts `v7.3.0` from `.../releases/tag/v7.3.0`. */
const tagFromLocation = (location: string): string | null => {
  const match = /\/releases\/tag\/([^/?#]+)/.exec(location);
  return match ? decodeURIComponent(match[1]) : null;
};

const buildUrls = (tag: string, version: string): Record<AssetKind, string> =>
  Object.fromEntries(
    Object.entries(ASSET_SUFFIXES).map(([kind, suffix]) => [
      kind,
      `${DOWNLOAD_BASE}/${encodeURIComponent(tag)}/Shotera-${version}${suffix}`,
    ])
  ) as Record<AssetKind, string>;

const fetchLatestRelease = async (): Promise<ReleaseDownloads> => {
  try {
    // `manual` keeps the 302 so the tag can be read from Location without
    // downloading the release page itself.
    const response = await fetch(LATEST_RELEASE_URL, {
      redirect: 'manual',
      headers: { 'User-Agent': 'shotera-site-build' },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });

    const location = response.headers.get('location');

    if (!location) {
      console.warn(
        `[download] /releases/latest did not redirect (status ${response.status}); linking to the Releases page instead.`
      );
      return FALLBACK;
    }

    const tag = tagFromLocation(location);

    if (!tag) {
      console.warn(`[download] Could not read a release tag from "${location}"; linking to the Releases page instead.`);
      return FALLBACK;
    }

    const version = tag.replace(/^v/i, '');
    console.info(`[download] Resolved release ${tag}; linking assets for ${version}.`);

    return { tag, version, urls: buildUrls(tag, version), resolved: true };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[download] Could not resolve the latest release (${reason}); linking to the Releases page instead.`);
    return FALLBACK;
  }
};

/** Build-time cache: resolved once, not once per page. */
let cached: Promise<ReleaseDownloads> | null = null;

/** Latest release metadata and asset URLs, resolved once per build. */
export const getReleaseDownloads = (): Promise<ReleaseDownloads> => {
  cached ??= fetchLatestRelease();
  return cached;
};

/**
 * Direct download URL for the latest Windows x64 `.exe` installer.
 * Resolves to {@link RELEASES_URL} when the asset cannot be determined.
 */
export const getSetupDownloadUrl = async (): Promise<string> => (await getReleaseDownloads()).urls.setup;

/**
 * Latest release version for display, e.g. `7.3.1`.
 *
 * Callers interpolate this into copy that already supplies the surrounding
 * `v` and `+`, so this returns the bare number. Falls back to the last known
 * release when the lookup fails, keeping the announcement readable offline.
 */
export const getLatestVersion = async (): Promise<string> => {
  const { version } = await getReleaseDownloads();
  return version ?? FALLBACK_DISPLAY_VERSION;
};
