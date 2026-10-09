# AI Systems by VJ — link-in-bio site

The one link for my LinkedIn, YouTube and Instagram bios.
Live at **https://aisystemsbyvj.github.io**

Plain HTML, CSS and a little JavaScript. No frameworks, no build step, no tracking.

## What's in this folder

| File | What it is | Do I edit it? |
|---|---|---|
| `content.json` | **All the words and links on the page** | **Yes. This is the only file you normally edit.** |
| `photo.jpg` | Profile photo (right now it's a "VJ" placeholder) | Replace it with your photo |
| `index.html` | Page skeleton, link-preview tags, no-JavaScript fallback links | Rarely |
| `styles.css` | Colours, fonts, layout | Rarely |
| `script.js` | Reads `content.json` and builds the page | No |
| `favicon.svg` | Browser-tab icon ("AI·VJ") | No |
| `og-image.png` | Image shown when the link is shared (1200×630) | Optional |
| `.nojekyll` | Tells GitHub Pages to serve files as they are | No |

---

## How to edit `content.json` (on github.com, no tools needed)

1. Open https://github.com/aisystemsbyvj/aisystemsbyvj.github.io
2. Click `content.json`, then the **pencil icon** (Edit this file).
3. Change the text **between the quotes**.
4. Click **Commit changes…** → **Commit changes**.

**JSON rules that trip people up:**

- Text always goes inside double quotes: `"like this"`.
- Items in a list are separated by commas. **No comma after the last item.**
- `true` and `false` have no quotes.
- If the page shows "Sorry, this page didn't load properly", you probably broke one of these rules. Paste your file into https://jsonlint.com to find the mistake.

### Example: change the bio

```json
"bio": "7+ years in data and analytics. Now learning and building AI systems ..."
```

Change the text inside the quotes and commit. Keep it to about 3 lines on a phone (around 220 characters).

---

## Hide or show a platform

Each follow button in `"links"` has an `"active"` flag.

```json
{
  "platform": "instagram",
  "label": "Instagram",
  "handle": "@aisystemsbyvj",
  "url": "https://www.instagram.com/aisystemsbyvj",
  "active": false
}
```

- `"active": false` hides the button.
- `"active": true` shows it.
- To change the order of buttons, move the whole `{ ... }` block up or down (and check the commas).

`"platform"` picks the icon. Supported values: `youtube`, `linkedin`, `instagram`, `github`. Any other value still works, just without an icon.

> The `<noscript>` block in `index.html` has a copy of the main links for the rare visitor with JavaScript turned off. If you change a URL, update it there too (search for `noscript`).

---

## Add your photo

1. Get a square photo (at least 400×400 pixels). Crop it so your face is in the centre; it's shown as a circle.
2. Rename it to exactly **`photo.jpg`** (lowercase).
3. Rename the file on your computer **before** uploading, so the uploaded file is already called `photo.jpg`.
4. On GitHub: **Add file → Upload files**, drag `photo.jpg` in, then **Commit changes**. It replaces the placeholder.

Tip: keep it under about 200 KB so the page stays fast. https://squoosh.app is a free tool that does this in the browser.

---

## Add, edit or remove a project

Projects live in `"projects"`. To add one, copy a block, paste it after the last one, and **add a comma between the blocks**:

```json
"projects": [
  {
    "name": "Time-tracker bot",
    "description": "Voice notes → AI → automatic time log.",
    "status": "In progress",
    "link": "https://github.com/aisystemsbyvj/time-tracker-bot",
    "linkLabel": "View on GitHub"
  },
  {
    "name": "My new project",
    "description": "One short line about what it does.",
    "status": "Coming soon",
    "link": "",
    "linkLabel": "View project"
  }
]
```

- `"link": ""` (empty) → no button is shown.
- `"link": "https://..."` → a button appears with the text from `"linkLabel"`.
- `"status"`: any short text. Statuses containing "progress", "live" or "beta" are shown in amber; anything else is grey.
- To hide a project without deleting it, add `"active": false` to its block.

The "What I share" cards (`"topics"`) work the same way: each has a `"title"` and a `"text"`.

---

## How long until changes go live?

Usually **1–2 minutes** after you commit. You can watch progress in the repo's **Actions** tab (a green tick means it's published). If you still see the old version, refresh the page; on a phone, close the tab and reopen it.

Link previews on LinkedIn/WhatsApp are cached by those apps and can take days to update. For LinkedIn you can force a refresh at https://www.linkedin.com/post-inspector/

---

## Change the link preview image or text

- Image: replace `og-image.png` with your own **1200×630** PNG (same file name).
- Title/description: edit the `og:` and `twitter:` lines near the top of `index.html`.

---

## Preview on your own computer (optional)

Double-clicking `index.html` **won't** load the content, because browsers block reading `content.json` from a local file. If you have Python installed, run this in the folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000

---

## Publishing settings (one-time)

GitHub → this repo → **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)** → Save.

## Credits

Brand icons from [Simple Icons](https://simpleicons.org) (CC0). Font: [Inter](https://rsms.me/inter/) via Google Fonts.
