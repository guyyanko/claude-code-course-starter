export type Link = {
  id: string;
  url: string;
  title: string;
  tags: string[];
  addedAt: string; // ISO date, e.g. "2026-11-02"
  read: boolean;
};

// Query parameters that only track where a click came from. Two links that differ only in
// these point to the same page.
const TRACKING_PARAMS = ["fbclid", "gclid", "ref"];

// Turns a URL into one canonical form, so the same page saved twice is seen as a duplicate:
// lowercase host, no "www.", no tracking parameters, no "#fragment", no trailing slash.
export function normalizeUrl(input: string): string {
  const url = new URL(input.trim());
  url.hostname = url.hostname.toLowerCase().replace(/^www\./, "");
  url.hash = "";

  for (const key of [...url.searchParams.keys()]) {
    if (key === "utm_source" || TRACKING_PARAMS.includes(key)) {
      url.searchParams.delete(key);
    }
  }

  let result = url.toString();
  if (result.endsWith("/") && url.pathname !== "/") result = result.slice(0, -1);
  if (url.pathname === "/" && !url.search) result = result.slice(0, -1);
  return result;
}

// True when a link to the same page is already on the shelf.
export function isDuplicate(links: Link[], url: string): boolean {
  const wanted = normalizeUrl(url);
  return links.some((link) => normalizeUrl(link.url) === wanted);
}

// Groups links by tag, tags sorted A to Z. A link with several tags appears under each one.
// Links without tags go under "untagged".
export function groupByTag(links: Link[]): Map<string, Link[]> {
  const groups = new Map<string, Link[]>();
  for (const link of links) {
    const tags = link.tags.length ? link.tags : ["untagged"];
    for (const tag of tags) {
      const list = groups.get(tag) ?? [];
      list.push(link);
      groups.set(tag, list);
    }
  }
  return new Map([...groups.entries()].sort(([a], [b]) => a.localeCompare(b)));
}

// Links not read yet, newest first.
export function readingQueue(links: Link[]): Link[] {
  return links.filter((link) => !link.read).sort((a, b) => b.addedAt.localeCompare(a.addedAt));
}
