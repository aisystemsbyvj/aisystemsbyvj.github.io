# VJ — link-in-bio site

My one-page "link in bio" site: **https://aisystemsbyvj.github.io**

Plain HTML + CSS + a little JavaScript. No frameworks, no build step, no tracking.

## What's in this folder

| File | What it is | Do I edit it? |
|---|---|---|
| `content.js` | **All the words and links on the page** (bio, buttons, cards, projects, email) | ✅ Yes — this is the main one |
| `index.html` | Page skeleton + link-preview tags for LinkedIn/WhatsApp | Only for the preview text (see below) |
| `styles.css` | Colours and layout | Only if you want to change the look |
| `script.js` | Builds the page from `content.js` | No |
| `photo-placeholder.svg` | The "VJ" circle shown until you add a photo | No |
| `og-image.png` | The picture shown when the link is shared (1200×630) | Optional — replace with your own |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser tab / home-screen icons | No |
| `.nojekyll` | Tells GitHub Pages to publish files as-is | No |

---

## 1. Edit links, bio and projects

Everything lives in **`content.js`**. Easiest way, straight on GitHub:

1. Open the repo on github.com and click **`content.js`**.
2. Click the **pencil icon** (✏️ "Edit this file").
3. Change the text between the `"double quotes"`.
4. Click **Commit changes…** → **Commit changes**.

**Common edits**

- **Add your YouTube / Instagram link** — find the line and paste the URL inside the quotes:
  ```js
  { label: "YouTube", icon: "youtube", url: "https://www.youtube.com/@yourhandle" },
  ```
  While `url: ""` is empty, the button shows **"Coming soon"** and isn't clickable.
- **Add your email** — in the `work` block: `email: "you@example.com",`
  The "Email me" button turns on automatically.
- **Fill in a project** — replace one of the three placeholder cards:
  ```js
  { title: "Expense tracker agent", text: "An AI agent that sorts my receipts.", status: "Live", url: "https://github.com/aisystemsbyvj/expense-agent" },
  ```
  Add or remove `{ ... },` lines to show more or fewer cards.
- **Change the bio** — edit the 3 lines in `bio: [ ... ]` (only the first 3 lines are shown).

**Don't break it — 3 rules**
1. Keep text inside `"double quotes"`. If your text has a `"` in it, use `'` instead.
2. Keep the commas between items.
3. Links must start with `https://`. Anything else is ignored on purpose (for safety).

If the page ever looks empty after an edit, a quote or comma is usually missing — open
`content.js` → **History** on GitHub to compare with the last version that worked.

## 2. Replace the photo

1. Pick a square-ish photo (at least 400×400 px; under ~300 KB keeps the page fast).
   Name it exactly **`photo.jpg`**.
2. On GitHub: **Add file → Upload files** → drag in `photo.jpg` → **Commit changes**.
3. Edit `content.js` and change:
   ```js
   photo: "photo-placeholder.svg",
   ```
   to
   ```js
   photo: "photo.jpg",
   ```
4. Commit. The photo is cropped into a circle automatically.

## 3. Change the link preview (LinkedIn / WhatsApp)

Preview bots don't run JavaScript, so the preview title/description live in **`index.html`**
(the `<title>` and `og:` lines near the top), not in `content.js`.

- To change the preview **text**: edit `og:title`, `og:description`, `<title>` and `description` in `index.html`.
- To change the preview **image**: upload a 1200×630 PNG named `og-image.png` (replace the existing one).
- LinkedIn caches previews. After changing them, paste your URL into
  LinkedIn's Post Inspector (search "LinkedIn Post Inspector") to refresh it.

## 4. How changes go live

- This is a GitHub Pages **user site**: whatever is on the **`main`** branch is published at
  https://aisystemsbyvj.github.io.
- After you commit to `main`, GitHub rebuilds the site. It's usually live in **1–2 minutes**
  (check the **Actions** tab: a green tick means it's published).
- If you don't see the change on your phone, refresh — or open the link in a private tab
  (browsers cache old versions for a few minutes).

**First-time setup (only once):** repo **Settings → Pages → Build and deployment →
Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.**

## 5. Preview on your computer (optional)

Double-click `index.html` to open it in your browser. That's it — no install needed.

## Colours

Navy `#0F1B2D` · off-white `#F4F1EA` · teal `#2BB3A3` · amber `#F2A65A` (change them at the top of `styles.css`).
