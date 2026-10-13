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
| All visible text (verbatim from the client brief) | `src/data/content.ts` |
| Media file names, pending lists, external links, contact email | `src/config/media.ts` |
| Projects layout switch | `src/config/layout.ts` |
| Colours, fonts, spacing, responsive rules | `src/index.css` (tokens at the top) |
| Sections | `src/components/*.tsx` |

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

### After uploading a missing file

Keys listed in `PENDING_IMAGES`, `PENDING_VIDEOS` or `PENDING_DOCS` are never requested. They show an
"Image / Video / Certificate coming soon" placeholder that already has the right size, so the layout won't shift.

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

## Projects layout

`src/config/layout.ts`:

```ts
export const PROJECTS_LAYOUT: 'side-by-side' | 'stacked' = 'side-by-side'
```

- `"side-by-side"`: the two project cards sit next to each other on screens ≥ 1024 px and stack below that.
- `"stacked"`: one card per row at every width; on desktop each card shows its images beside its text.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repository.
3. Framework Preset: **Vite**.
4. Build command: `npm run build`. Output directory: `dist`.
5. Deploy. Later pushes to the main branch redeploy automatically.

## Still needed

These slots currently show placeholders:

- [ ] `proj2-1.jpg`, `proj2-2.jpg`, `proj2-3.jpg`: ESP32 Smart Home System photos
- [ ] `piano.jpg`: Piano photo
- [ ] `training-photo.jpg`: Saigon Hi-Tech Park Training Center photo
- [ ] `charity-1.jpg`, `charity-3.jpg`, `charity-4.jpg`: JPG versions are needed (only `.HEIC` exists now)
- [ ] `about-assembly.mp4`: video for the About section
- [ ] Contact email: set `CONTACT_EMAIL` in `src/config/media.ts` (the email line stays hidden while it is empty)
