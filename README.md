# Gia Khang — Portfolio

Single-page portfolio for Nguyen Gia Khang, built with React + TypeScript + Vite. No router: the page is one
scroll with anchor sections (`#home`, `#about`, `#projects`, `#achievements`, `#leadership`, `#beyond`, `#contact`).
Images, videos and the PDF certificate are served from Firebase Storage through public URLs (no Firebase SDK).

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run lint
```

## Where things live

| What | File |
| --- | --- |
| All visible text (verbatim from the client brief), gallery order and image ratios | `src/data/content.ts` |
| Media file names, pending lists, external links, contact email | `src/config/media.ts` |
| Colours, fonts, spacing, responsive rules, animations | `src/index.css` (tokens at the top, motion at the bottom) |
| Sections | `src/components/*.tsx` |
| Scroll reveal, scroll progress, hover tilt / magnetic buttons | `src/hooks/` |

## Media (Firebase Storage)

Every file is loaded from

```
https://firebasestorage.googleapis.com/v0/b/<BUCKET>/o/<encodeURIComponent(BASE_PATH + fileName)>?alt=media
```

### Change the folder or a file name

Open `src/config/media.ts`:

- `BASE_PATH` is the folder inside the bucket (currently `"GiaKhang/"`). It is **case-sensitive** and must keep
  the trailing slash.
- `IMAGES`, `VIDEOS` and `DOCS` map a key used by the site (left) to the file name in Storage (right). To point a
  slot at a different file, change only the right-hand value, e.g. `"piano": "piano-recital.jpg"`.
- If an image fails to load, the site automatically retries the same base name with `.jpg`, `.jpeg`, `.png`,
  `.webp`, `.JPG`, `.JPEG`, `.PNG` (see `FALLBACK_EXTENSIONS`) before showing the placeholder, so a wrong
  extension is not fatal.
- Browsers cannot display `.HEIC`. Convert HEIC photos to JPG before uploading.
- A value starting with `/` is served from this site's `public/` folder instead of Firebase. The training
  certificate image (`/media/training-certificate.jpg`) works this way: it was extracted from the PDF so the
  certificate shows directly on the page.

### Galleries show images uncropped

Galleries are "justified": every row fills the width and all items in a row share one height, computed from each
file's real aspect ratio. So each gallery item in `src/data/content.ts` has a `ratio` (width ÷ height), and a
gallery can set `rows`, e.g. `rows: [2, 3]` = two items in the first row, three in the second. **If you replace a
file with one of a different shape, update its `ratio`**, or the image will be cropped slightly to fit.

### After uploading a missing file

Keys listed in `PENDING_IMAGES`, `PENDING_VIDEOS` or `PENDING_DOCS` are never requested and their slot is simply
left out of the page (no "coming soon" boxes).

1. Upload the file to the `GiaKhang/` folder with exactly the name listed in `IMAGES` / `VIDEOS` / `DOCS`
   (or change the name there).
2. Delete its key from the matching `PENDING_*` list, e.g. remove `"piano"` from `PENDING_IMAGES`.
3. Commit and redeploy.

### Optimize images before uploading

Large phone photos slow the page down. Before uploading:

- Resize photos to about **1600 px on the long side**.
- Export as JPG (quality ~80) or WebP, aiming for **under ~500 KB** per photo.
- Logos and graphics (`yes-main`, `weread-club`, school logo) can stay PNG but should be under ~300 KB.
- Free tools: [Squoosh](https://squoosh.app), or `sharp`/ImageMagick for batches.
- Videos: keep them short, H.264 MP4, 720p is plenty.

## Motion

All animation respects the visitor's "reduce motion" setting: with it on, the page renders static and complete.

- Scroll reveals: add `data-reveal="up" | "left" | "right" | "scale" | "wipe" | "fade"` to an element; children of a
  `data-stagger` element enter one after another.
- `data-tilt` (3D tilt + glare) and `data-magnetic` (buttons lean toward the pointer) work with a mouse only.
- The achievements timeline line and the philosophy quote are scroll-linked (`useScrollProgress`).

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repository.
3. Framework Preset: **Vite**.
4. Build command: `npm run build`. Output directory: `dist`.
5. Deploy. Later pushes to the main branch redeploy automatically.

## Still needed

Optional. These slots are hidden until the file exists:

- [ ] `piano.jpg`: Piano photo (until then the piano card shows an animated keyboard)
- [ ] `training-photo.jpg`: Saigon Hi-Tech Park Training Center photo (would appear under the certificate)
- [ ] Contact email: set `CONTACT_EMAIL` in `src/config/media.ts` (the email line stays hidden while it is empty)
