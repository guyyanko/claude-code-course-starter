# Linkshelf product notes

A running log of product decisions, open questions and ideas. Newest week at the bottom. Kept for history; the current plan is whatever the latest week says.

## Week 1: Tags

**Attendees:** product, design, two engineers.

### What we decided

- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.

### Open questions

- How should tags behave when a link has no tags?
- Do we need an undo for tags actions, or is a confirmation enough?
- What is the smallest version of tags we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Detect dead links once a month and mark them.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the tags screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 2: Reading queue

**Attendees:** product, design, two engineers.

### What we decided

- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- The import must be safe to run twice: a second run adds nothing that is already there.

### Open questions

- How should reading queue behave when a link has no tags?
- Do we need an undo for reading queue actions, or is a confirmation enough?
- What is the smallest version of reading queue we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the reading queue screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 3: Duplicates

**Attendees:** product, design, two engineers.

### What we decided

- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Archived links stay searchable but never show in the reading queue.

### Open questions

- How should duplicates behave when a link has no tags?
- Do we need an undo for duplicates actions, or is a confirmation enough?
- What is the smallest version of duplicates we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the duplicates screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 4: Search

**Attendees:** product, design, two engineers.

### What we decided

- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.

### Open questions

- How should search behave when a link has no tags?
- Do we need an undo for search actions, or is a confirmation enough?
- What is the smallest version of search we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the search screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 5: Sharing

**Attendees:** product, design, two engineers.

### What we decided

- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- Duplicates are detected on the normalized URL, never on the title, because titles change.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.

### Open questions

- How should sharing behave when a link has no tags?
- Do we need an undo for sharing actions, or is a confirmation enough?
- What is the smallest version of sharing we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sharing screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 6: Mobile

**Attendees:** product, design, two engineers.

### What we decided

- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.

### Open questions

- How should mobile behave when a link has no tags?
- Do we need an undo for mobile actions, or is a confirmation enough?
- What is the smallest version of mobile we can ship in two weeks?

### Ideas parked for later

- Let users pin a tag to the top of the page.
- Let users snooze a link for a week instead of marking it read.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the mobile screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 7: Onboarding

**Attendees:** product, design, two engineers.

### What we decided

- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.
- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.

### Open questions

- How should onboarding behave when a link has no tags?
- Do we need an undo for onboarding actions, or is a confirmation enough?
- What is the smallest version of onboarding we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Send a Friday email with three unread links.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the onboarding screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 8: Sync

**Attendees:** product, design, two engineers.

### What we decided

- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- The import must be safe to run twice: a second run adds nothing that is already there.

### Open questions

- How should sync behave when a link has no tags?
- Do we need an undo for sync actions, or is a confirmation enough?
- What is the smallest version of sync we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Let users pin a tag to the top of the page.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sync screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 9: Archive

**Attendees:** product, design, two engineers.

### What we decided

- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- Duplicates are detected on the normalized URL, never on the title, because titles change.
- The import must be safe to run twice: a second run adds nothing that is already there.

### Open questions

- How should archive behave when a link has no tags?
- Do we need an undo for archive actions, or is a confirmation enough?
- What is the smallest version of archive we can ship in two weeks?

### Ideas parked for later

- Let users pin a tag to the top of the page.
- Detect dead links once a month and mark them.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the archive screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 10: Import

**Attendees:** product, design, two engineers.

### What we decided

- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Duplicates are detected on the normalized URL, never on the title, because titles change.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.

### Open questions

- How should import behave when a link has no tags?
- Do we need an undo for import actions, or is a confirmation enough?
- What is the smallest version of import we can ship in two weeks?

### Ideas parked for later

- Detect dead links once a month and mark them.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the import screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 11: Tags

**Attendees:** product, design, two engineers.

### What we decided

- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.

### Open questions

- How should tags behave when a link has no tags?
- Do we need an undo for tags actions, or is a confirmation enough?
- What is the smallest version of tags we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Import from Pocket and Raindrop, not only browser bookmarks.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the tags screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 12: Reading queue

**Attendees:** product, design, two engineers.

### What we decided

- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- The import must be safe to run twice: a second run adds nothing that is already there.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.

### Open questions

- How should reading queue behave when a link has no tags?
- Do we need an undo for reading queue actions, or is a confirmation enough?
- What is the smallest version of reading queue we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Import from Pocket and Raindrop, not only browser bookmarks.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the reading queue screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 13: Duplicates

**Attendees:** product, design, two engineers.

### What we decided

- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- Duplicates are detected on the normalized URL, never on the title, because titles change.

### Open questions

- How should duplicates behave when a link has no tags?
- Do we need an undo for duplicates actions, or is a confirmation enough?
- What is the smallest version of duplicates we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Let users pin a tag to the top of the page.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the duplicates screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 14: Search

**Attendees:** product, design, two engineers.

### What we decided

- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.

### Open questions

- How should search behave when a link has no tags?
- Do we need an undo for search actions, or is a confirmation enough?
- What is the smallest version of search we can ship in two weeks?

### Ideas parked for later

- Let users pin a tag to the top of the page.
- Let users pin a tag to the top of the page.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the search screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 15: Sharing

**Attendees:** product, design, two engineers.

### What we decided

- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.

### Open questions

- How should sharing behave when a link has no tags?
- Do we need an undo for sharing actions, or is a confirmation enough?
- What is the smallest version of sharing we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Detect dead links once a month and mark them.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sharing screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 16: Mobile

**Attendees:** product, design, two engineers.

### What we decided

- The import must be safe to run twice: a second run adds nothing that is already there.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.

### Open questions

- How should mobile behave when a link has no tags?
- Do we need an undo for mobile actions, or is a confirmation enough?
- What is the smallest version of mobile we can ship in two weeks?

### Ideas parked for later

- Add a keyboard shortcut to mark the top link as read.
- Show how many links were saved this week next to the heading.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the mobile screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 17: Onboarding

**Attendees:** product, design, two engineers.

### What we decided

- Archived links stay searchable but never show in the reading queue.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.

### Open questions

- How should onboarding behave when a link has no tags?
- Do we need an undo for onboarding actions, or is a confirmation enough?
- What is the smallest version of onboarding we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the onboarding screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 18: Sync

**Attendees:** product, design, two engineers.

### What we decided

- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- Duplicates are detected on the normalized URL, never on the title, because titles change.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.

### Open questions

- How should sync behave when a link has no tags?
- Do we need an undo for sync actions, or is a confirmation enough?
- What is the smallest version of sync we can ship in two weeks?

### Ideas parked for later

- Show how many links were saved this week next to the heading.
- Send a Friday email with three unread links.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sync screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 19: Archive

**Attendees:** product, design, two engineers.

### What we decided

- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- The import must be safe to run twice: a second run adds nothing that is already there.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.

### Open questions

- How should archive behave when a link has no tags?
- Do we need an undo for archive actions, or is a confirmation enough?
- What is the smallest version of archive we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Show how many links were saved this week next to the heading.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the archive screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 20: Import

**Attendees:** product, design, two engineers.

### What we decided

- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Archived links stay searchable but never show in the reading queue.

### Open questions

- How should import behave when a link has no tags?
- Do we need an undo for import actions, or is a confirmation enough?
- What is the smallest version of import we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Let users snooze a link for a week instead of marking it read.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the import screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 21: Tags

**Attendees:** product, design, two engineers.

### What we decided

- The import must be safe to run twice: a second run adds nothing that is already there.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.

### Open questions

- How should tags behave when a link has no tags?
- Do we need an undo for tags actions, or is a confirmation enough?
- What is the smallest version of tags we can ship in two weeks?

### Ideas parked for later

- Detect dead links once a month and mark them.
- Show how many links were saved this week next to the heading.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the tags screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 22: Reading queue

**Attendees:** product, design, two engineers.

### What we decided

- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.

### Open questions

- How should reading queue behave when a link has no tags?
- Do we need an undo for reading queue actions, or is a confirmation enough?
- What is the smallest version of reading queue we can ship in two weeks?

### Ideas parked for later

- Add a keyboard shortcut to mark the top link as read.
- Detect dead links once a month and mark them.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the reading queue screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 23: Duplicates

**Attendees:** product, design, two engineers.

### What we decided

- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- Archived links stay searchable but never show in the reading queue.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.

### Open questions

- How should duplicates behave when a link has no tags?
- Do we need an undo for duplicates actions, or is a confirmation enough?
- What is the smallest version of duplicates we can ship in two weeks?

### Ideas parked for later

- Import from Pocket and Raindrop, not only browser bookmarks.
- Detect dead links once a month and mark them.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the duplicates screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 24: Search

**Attendees:** product, design, two engineers.

### What we decided

- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.

### Open questions

- How should search behave when a link has no tags?
- Do we need an undo for search actions, or is a confirmation enough?
- What is the smallest version of search we can ship in two weeks?

### Ideas parked for later

- Import from Pocket and Raindrop, not only browser bookmarks.
- Let users pin a tag to the top of the page.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the search screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 25: Sharing

**Attendees:** product, design, two engineers.

### What we decided

- Archived links stay searchable but never show in the reading queue.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.

### Open questions

- How should sharing behave when a link has no tags?
- Do we need an undo for sharing actions, or is a confirmation enough?
- What is the smallest version of sharing we can ship in two weeks?

### Ideas parked for later

- Add a keyboard shortcut to mark the top link as read.
- Let users pin a tag to the top of the page.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sharing screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 26: Mobile

**Attendees:** product, design, two engineers.

### What we decided

- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.

### Open questions

- How should mobile behave when a link has no tags?
- Do we need an undo for mobile actions, or is a confirmation enough?
- What is the smallest version of mobile we can ship in two weeks?

### Ideas parked for later

- Import from Pocket and Raindrop, not only browser bookmarks.
- Send a Friday email with three unread links.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the mobile screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 27: Onboarding

**Attendees:** product, design, two engineers.

### What we decided

- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.
- The import must be safe to run twice: a second run adds nothing that is already there.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.

### Open questions

- How should onboarding behave when a link has no tags?
- Do we need an undo for onboarding actions, or is a confirmation enough?
- What is the smallest version of onboarding we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Send a Friday email with three unread links.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the onboarding screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 28: Sync

**Attendees:** product, design, two engineers.

### What we decided

- Archived links stay searchable but never show in the reading queue.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- Duplicates are detected on the normalized URL, never on the title, because titles change.

### Open questions

- How should sync behave when a link has no tags?
- Do we need an undo for sync actions, or is a confirmation enough?
- What is the smallest version of sync we can ship in two weeks?

### Ideas parked for later

- Add a keyboard shortcut to mark the top link as read.
- Let users pin a tag to the top of the page.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sync screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 29: Archive

**Attendees:** product, design, two engineers.

### What we decided

- Duplicates are detected on the normalized URL, never on the title, because titles change.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.

### Open questions

- How should archive behave when a link has no tags?
- Do we need an undo for archive actions, or is a confirmation enough?
- What is the smallest version of archive we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Show how many links were saved this week next to the heading.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the archive screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 30: Import

**Attendees:** product, design, two engineers.

### What we decided

- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.

### Open questions

- How should import behave when a link has no tags?
- Do we need an undo for import actions, or is a confirmation enough?
- What is the smallest version of import we can ship in two weeks?

### Ideas parked for later

- Show how many links were saved this week next to the heading.
- Let users pin a tag to the top of the page.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the import screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 31: Tags

**Attendees:** product, design, two engineers.

### What we decided

- Archived links stay searchable but never show in the reading queue.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Archived links stay searchable but never show in the reading queue.

### Open questions

- How should tags behave when a link has no tags?
- Do we need an undo for tags actions, or is a confirmation enough?
- What is the smallest version of tags we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Show how many links were saved this week next to the heading.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the tags screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 32: Reading queue

**Attendees:** product, design, two engineers.

### What we decided

- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- Archived links stay searchable but never show in the reading queue.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.

### Open questions

- How should reading queue behave when a link has no tags?
- Do we need an undo for reading queue actions, or is a confirmation enough?
- What is the smallest version of reading queue we can ship in two weeks?

### Ideas parked for later

- Import from Pocket and Raindrop, not only browser bookmarks.
- Add a keyboard shortcut to mark the top link as read.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the reading queue screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 33: Duplicates

**Attendees:** product, design, two engineers.

### What we decided

- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- Archived links stay searchable but never show in the reading queue.
- The import must be safe to run twice: a second run adds nothing that is already there.

### Open questions

- How should duplicates behave when a link has no tags?
- Do we need an undo for duplicates actions, or is a confirmation enough?
- What is the smallest version of duplicates we can ship in two weeks?

### Ideas parked for later

- Show how many links were saved this week next to the heading.
- Detect dead links once a month and mark them.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the duplicates screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 34: Search

**Attendees:** product, design, two engineers.

### What we decided

- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- The import must be safe to run twice: a second run adds nothing that is already there.
- Duplicates are detected on the normalized URL, never on the title, because titles change.

### Open questions

- How should search behave when a link has no tags?
- Do we need an undo for search actions, or is a confirmation enough?
- What is the smallest version of search we can ship in two weeks?

### Ideas parked for later

- Suggest tags from the site name when a link is saved.
- Let users pin a tag to the top of the page.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the search screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 35: Sharing

**Attendees:** product, design, two engineers.

### What we decided

- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- The import must be safe to run twice: a second run adds nothing that is already there.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.

### Open questions

- How should sharing behave when a link has no tags?
- Do we need an undo for sharing actions, or is a confirmation enough?
- What is the smallest version of sharing we can ship in two weeks?

### Ideas parked for later

- Add a keyboard shortcut to mark the top link as read.
- Let users snooze a link for a week instead of marking it read.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sharing screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 36: Mobile

**Attendees:** product, design, two engineers.

### What we decided

- Archived links stay searchable but never show in the reading queue.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.

### Open questions

- How should mobile behave when a link has no tags?
- Do we need an undo for mobile actions, or is a confirmation enough?
- What is the smallest version of mobile we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Show how many links were saved this week next to the heading.

### Risks

- Users may expect folders to stay folders after import.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the mobile screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 37: Onboarding

**Attendees:** product, design, two engineers.

### What we decided

- Duplicates are detected on the normalized URL, never on the title, because titles change.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.

### Open questions

- How should onboarding behave when a link has no tags?
- Do we need an undo for onboarding actions, or is a confirmation enough?
- What is the smallest version of onboarding we can ship in two weeks?

### Ideas parked for later

- Send a Friday email with three unread links.
- Let users pin a tag to the top of the page.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the onboarding screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 38: Sync

**Attendees:** product, design, two engineers.

### What we decided

- Archived links stay searchable but never show in the reading queue.
- We keep the data model flat: one link, many tags, no folders. Folders from imports become tags.
- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.

### Open questions

- How should sync behave when a link has no tags?
- Do we need an undo for sync actions, or is a confirmation enough?
- What is the smallest version of sync we can ship in two weeks?

### Ideas parked for later

- Import from Pocket and Raindrop, not only browser bookmarks.
- Show how many links were saved this week next to the heading.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the sync screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 39: Archive

**Attendees:** product, design, two engineers.

### What we decided

- The import must be safe to run twice: a second run adds nothing that is already there.
- Sharing a shelf is read only. Editing someone else's shelf is out of scope for this year.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.

### Open questions

- How should archive behave when a link has no tags?
- Do we need an undo for archive actions, or is a confirmation enough?
- What is the smallest version of archive we can ship in two weeks?

### Ideas parked for later

- Show how many links were saved this week next to the heading.
- Let users snooze a link for a week instead of marking it read.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the archive screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 40: Import

**Attendees:** product, design, two engineers.

### What we decided

- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.
- Tags are lowercase and use dashes. The importer converts spaces and capitals.

### Open questions

- How should import behave when a link has no tags?
- Do we need an undo for import actions, or is a confirmation enough?
- What is the smallest version of import we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Let users pin a tag to the top of the page.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the import screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 41: Tags

**Attendees:** product, design, two engineers.

### What we decided

- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- We do not fetch page titles on save in v1. The title comes from the user or the import file.
- Duplicates are detected on the normalized URL, never on the title, because titles change.

### Open questions

- How should tags behave when a link has no tags?
- Do we need an undo for tags actions, or is a confirmation enough?
- What is the smallest version of tags we can ship in two weeks?

### Ideas parked for later

- Detect dead links once a month and mark them.
- Show how many links were saved this week next to the heading.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the tags screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 42: Reading queue

**Attendees:** product, design, two engineers.

### What we decided

- The import must be safe to run twice: a second run adds nothing that is already there.
- Duplicates are detected on the normalized URL, never on the title, because titles change.
- Search covers title, URL and tags. Full text of the page is a paid feature later, if ever.

### Open questions

- How should reading queue behave when a link has no tags?
- Do we need an undo for reading queue actions, or is a confirmation enough?
- What is the smallest version of reading queue we can ship in two weeks?

### Ideas parked for later

- Detect dead links once a month and mark them.
- Detect dead links once a month and mark them.

### Risks

- A shared shelf may expose links people thought were private.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the reading queue screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 43: Duplicates

**Attendees:** product, design, two engineers.

### What we decided

- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.
- The reading queue shows the newest unread links first. Users asked for oldest first; we will test both.

### Open questions

- How should duplicates behave when a link has no tags?
- Do we need an undo for duplicates actions, or is a confirmation enough?
- What is the smallest version of duplicates we can ship in two weeks?

### Ideas parked for later

- Let users pin a tag to the top of the page.
- Let users pin a tag to the top of the page.

### Risks

- Large imports (5,000+ bookmarks) may be slow if we normalize every URL twice.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the duplicates screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

## Week 44: Search

**Attendees:** product, design, two engineers.

### What we decided

- Mobile is a responsive web page first. A native app waits until we see weekly use above 40 percent.
- The import must be safe to run twice: a second run adds nothing that is already there.
- Archived links stay searchable but never show in the reading queue.

### Open questions

- How should search behave when a link has no tags?
- Do we need an undo for search actions, or is a confirmation enough?
- What is the smallest version of search we can ship in two weeks?

### Ideas parked for later

- Let users snooze a link for a week instead of marking it read.
- Send a Friday email with three unread links.

### Risks

- Tracking parameters vary by site; a fixed list will miss some.

### Notes from the user interviews

Three users this week. One saves links from the phone and reads on the laptop, so the queue must look the same on both. Another said the search screen is where they lose track: "I save twenty links on Monday and by Friday I don't know which ones matter." The third wants fewer features, not more: save, tag, read, done.

