// Shared between build-time page generation and the client-side table so the
// two release-date labels cannot drift.
export const releaseDateFormat: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
};

export const releaseDateFormatter = new Intl.DateTimeFormat('en-US', releaseDateFormat);
