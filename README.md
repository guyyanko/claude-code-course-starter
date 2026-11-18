# Linkshelf

A small reading list: save links, tag them, read them later. Built with Next.js, TypeScript and Vitest.

This is the starter project for the **Claude Code from the Inside Out** course. If you don't have a project of your own yet, use this one for the labs.

## Get your own copy

This repo is a template. Make your own copy under your GitHub account (don't clone this one directly, you can't push to it):

```bash
gh repo create linkshelf --template guyyanko/claude-code-course-starter --public --clone
cd linkshelf
npm install
```

## Run it

```bash
npm run dev     # open http://localhost:3000
npm test        # run the tests once
```

## What's inside

| Path | What it is |
|---|---|
| `app/` | The Next.js pages (one page for now) |
| `lib/links.ts` | The logic: clean up URLs, find duplicates, group by tag, build the reading queue |
| `lib/links.test.ts` | Tests for the logic |
| `data/links.json` | The links shown on the page |
| `data/bookmarks-export.json` | A sample browser bookmarks export, for the import feature on the roadmap |
| `docs/product-notes.md` | A long log of product decisions and ideas |

## Roadmap

- Import bookmarks from `data/bookmarks-export.json` (folders become tags, no duplicates)
- Add and remove links from the page
- Save links in a real database
