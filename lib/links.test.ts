import { describe, expect, it } from "vitest";
import { groupByTag, isDuplicate, normalizeUrl, readingQueue, type Link } from "./links";

const link = (over: Partial<Link>): Link => ({
  id: "1",
  url: "https://example.com/a",
  title: "A",
  tags: [],
  addedAt: "2026-11-01",
  read: false,
  ...over,
});

describe("normalizeUrl", () => {
  it("lowercases the host and drops www", () => {
    expect(normalizeUrl("https://WWW.Example.com/Post")).toBe("https://example.com/Post");
  });

  it("drops the fragment and the trailing slash", () => {
    expect(normalizeUrl("https://example.com/post/#comments")).toBe("https://example.com/post");
  });

  it("removes every utm_ tracking parameter and keeps the others", () => {
    expect(
      normalizeUrl("https://example.com/post?id=7&utm_source=news&utm_medium=email&utm_campaign=nov"),
    ).toBe("https://example.com/post?id=7");
  });

  it("removes click ids", () => {
    expect(normalizeUrl("https://example.com/?fbclid=abc")).toBe("https://example.com");
  });
});

describe("isDuplicate", () => {
  it("finds the same page saved with a different tracking link", () => {
    const shelf = [link({ url: "https://example.com/post?id=7" })];
    expect(isDuplicate(shelf, "https://www.example.com/post?id=7&utm_source=x")).toBe(true);
  });
});

describe("groupByTag", () => {
  it("puts a link under each of its tags, tags sorted", () => {
    const groups = groupByTag([link({ id: "1", tags: ["react", "css"] }), link({ id: "2", tags: [] })]);
    expect([...groups.keys()]).toEqual(["css", "react", "untagged"]);
  });
});

describe("readingQueue", () => {
  it("keeps unread links, newest first", () => {
    const queue = readingQueue([
      link({ id: "old", addedAt: "2026-10-01" }),
      link({ id: "read", read: true }),
      link({ id: "new", addedAt: "2026-11-10" }),
    ]);
    expect(queue.map((l) => l.id)).toEqual(["new", "old"]);
  });
});
