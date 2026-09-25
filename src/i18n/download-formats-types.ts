/** Copy for the download-format table on the localized versions pages. */
export interface DownloadFormatsRow {
  format: string;
  install: string;
  bestFor: string;
}

export interface DownloadFormatsContent {
  tagline: string;
  title: string;
  subtitle: string;
  headers: [string, string, string];
  recommendLabel: string;
  /** Exactly four rows, in the order .exe, .7z, .msi, Microsoft Store. */
  rows: [DownloadFormatsRow, DownloadFormatsRow, DownloadFormatsRow, DownloadFormatsRow];
}
