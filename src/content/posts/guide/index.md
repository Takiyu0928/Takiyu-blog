---
title: Simple Guide to TakiyuUI
published: 2024-04-01
updated: 2026-09-03
description: "A practical introduction to writing, customizing, previewing, and publishing with TakiyuUI."
image: "./cover.webp"
tags: ["TakiyuUI", "Blogging", "Customization"]
category: Guides
draft: false
---

TakiyuUI is an Astro-powered personal blog built on the Mizuki theme. This guide covers the parts you will use most often: creating posts, managing images, changing the interface, previewing the site locally, and publishing updates.

For framework-level topics that are not covered here, refer to the [Astro documentation](https://docs.astro.build/).

## Create a Post

Posts are stored in `src/content/posts/`. A post can be a single Markdown file or a folder containing an `index.md` file and its related images.

The quickest way to create one is:

```bash
pnpm new-post
```

You can also create the files manually:

```text
src/content/posts/
├── first-post.md
└── travel-notes/
    ├── cover.webp
    ├── photo-01.webp
    └── index.md
```

Using a folder is recommended when an article has its own cover or inline images, because all related files stay together.

## Post Front Matter

Every post starts with YAML front matter. It controls how the article appears in the post list, archive, search results, and metadata.

```yaml
---
title: My First TakiyuUI Post
published: 2026-09-03
description: A short introduction displayed on the home page.
image: ./cover.webp
tags: [Writing, Notes]
category: Journal
draft: false
---
```

| Attribute | Description |
| --- | --- |
| `title` | The article title. |
| `published` | The original publication date in `YYYY-MM-DD` format. |
| `updated` | Optional date of the latest major revision. |
| `description` | A short summary used on cards and in metadata. |
| `image` | The cover image URL or file path. |
| `tags` | A list of searchable topic labels. |
| `category` | The main section the article belongs to. |
| `draft` | Set to `true` to hide the article from the published site. |
| `pinned` | Set to `true` to pin the article near the top of the list. |
| `priority` | Controls the order of pinned posts; smaller numbers appear first. |
| `author` | Optional author name displayed in article information. |
| `sourceLink` | Optional link to the original or referenced source. |
| `licenseName` | Optional license name for this article. |
| `permalink` | Optional custom URL path. |

## Add Images

TakiyuUI supports three common image path styles:

1. `./cover.webp` — an image stored beside the Markdown file.
2. `/assets/example.webp` — an image stored under `public/assets/`.
3. `https://example.com/image.webp` — an externally hosted image.

For article-specific images, prefer the first option. For shared assets such as logos, backgrounds, avatars, and banners, use `public/assets/`.

WebP is recommended for most photographs and illustrations because it usually provides a smaller file size without a noticeable loss of quality.

## Customize TakiyuUI

The main configuration files are located in `src/config/`.

| What you want to change | File |
| --- | --- |
| Site title, URL, language, theme, and banner | `src/config/siteConfig.ts` |
| Navigation and dropdown menus | `src/config/navBarConfig.ts` |
| Profile, avatar, biography, and social links | `src/config/profileConfig.ts` |
| Sidebar widgets | `src/config/sidebarConfig.ts` |
| Background and wallpaper sources | `src/config/backgroundWallpaper.ts` |
| Music player mode and playlist source | `src/config/musicConfig.ts` |
| Home-page announcement | `src/config/announcementConfig.ts` |
| Footer text and links | `src/config/footerConfig.ts` |
| Devices page entries | `src/data/devices.ts` |

> [!TIP]
> Change one section at a time and preview it locally before pushing to GitHub. This makes syntax errors much easier to find.

## Edit the About Page

The About page is stored at:

```text
src/content/spec/about.md
```

It uses ordinary Markdown and does not need post front matter. Do not delete the file itself: the `/about/` route expects it to exist during the Astro build.

## Preview Locally

Install the project dependencies once:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:4321/
```

Before publishing, run a production build:

```bash
pnpm build
```

A successful build confirms that Astro can parse the configuration, render the pages, process images, and generate the search index.

## Publish Changes

Commit the modified files and push them to the `main` branch:

```bash
git add .
git commit -m "Update blog content"
git push origin main
```

When the GitHub repository is connected to Vercel, a successful push starts a new deployment automatically. The existing site remains online while Vercel builds the new version.

## Common Problems

### The Build Reports an Unexpected Token

Check the file and line shown in the build log. TypeScript configuration files require English punctuation, including commas, quotation marks, and colons.

### An Image Cannot Be Processed

Confirm that the path matches the real filename exactly and that the file contains valid image data. Renaming a damaged or unsupported file to `.jpg` or `.webp` does not convert it.

### A New Post Does Not Appear

Make sure `draft` is set to `false`, the publication date is valid, and the file is located inside `src/content/posts/`.

### Vercel Still Shows the Previous Version

Check that the latest deployment uses the expected Git commit. If needed, redeploy it with the existing build cache disabled.

---

TakiyuUI is meant to evolve gradually. Keep the content personal, make small changes, and let the interface grow with the site.
