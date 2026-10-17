import { Fragment, useRef, useState, type CSSProperties } from 'react'
import type { Gallery as GalleryData } from '../data/content'
import { isAvailable, videoUrl } from '../lib/media'
import type { MediaItem, VideoItem } from '../types'
import { ExpandIcon, PlayIcon } from './Icons'
import Img from './Img'
import Lightbox from './Lightbox'
import Placeholder from './Placeholder'

type Props = {
  gallery: GalleryData
  /** Names the group for screen readers. */
  label: string
  /** Caps the height (px) of every row, which narrows the gallery; use for single portrait images. */
  maxRowHeight?: number
  className?: string
}

/** Splits items into rows (per `rows`), dropping media that is not uploaded yet. */
function toRows(items: MediaItem[], rows?: number[]): MediaItem[][] {
  const out: MediaItem[][] = []
  let i = 0
  for (const n of rows ?? [items.length]) {
    out.push(items.slice(i, i + n))
    i += n
  }
  if (i < items.length) out.push(items.slice(i))
  return out.map((row) => row.filter(isAvailable)).filter((row) => row.length > 0)
}

function VideoThumb({ item }: { item: VideoItem }) {
  const url = videoUrl(item.name)
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  if (!url || failed) return <Placeholder kind="video" ratio={String(item.ratio)} label={item.alt} />

  // Mouse hover plays a silent preview; the full video with sound opens in the lightbox.
  const preview = (play: boolean) => {
    const v = ref.current
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (play) void v.play().catch(() => {})
    else v.pause()
  }

  return (
    <div
      className="media media--fixed media--video-thumb"
      style={{ aspectRatio: String(item.ratio) }}
      onMouseEnter={() => preview(true)}
      onMouseLeave={() => preview(false)}
    >
      {/* #t=0.1 makes browsers paint the first frame as a poster. */}
      <video
        ref={ref}
        src={`${url}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        aria-hidden="true"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

/**
 * Justified gallery: each row fills the full width and every item in a row shares one height, sized from
 * the files' real aspect ratios, so images are never cropped. Tiles open in a lightbox.
 * On narrow screens the rows re-flow automatically.
 */
export default function Gallery({ gallery, label, maxRowHeight, className = '' }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const rows = toRows(gallery.items, gallery.rows)
  const viewable = rows.flat()
  if (viewable.length === 0) return null

  const style: Record<string, string | number> = {}
  if (maxRowHeight) {
    const widths = rows.map((row) => {
      const sum = row.reduce((s, item) => s + item.ratio, 0)
      return `calc(${Math.round(maxRowHeight * sum)}px + ${row.length - 1} * var(--gap))`
    })
    style.maxWidth = widths.length > 1 ? `min(${widths.join(', ')})` : widths[0]
  }

  return (
    <>
      <ul className={`jg ${className}`} style={style as CSSProperties} aria-label={label} data-stagger="">
        {rows.map((row, r) => (
          <Fragment key={r}>
            {r > 0 && <li className="jg__break" aria-hidden="true" />}
            {row.map((item) => {
              const index = viewable.indexOf(item)
              const isVideo = item.kind === 'video'
              return (
                <li
                  key={item.kind + item.name}
                  className="jg__item"
                  style={{ '--r': item.ratio } as CSSProperties}
                  data-reveal="wipe"
                >
                  <button
                    type="button"
                    className="jg__btn"
                    aria-label={`${item.alt} (${isVideo ? 'play video' : 'enlarge'})`}
                    onClick={() => setOpen(index)}
                  >
                    {isVideo ? (
                      <VideoThumb item={item} />
                    ) : (
                      <Img name={item.name} alt={item.alt} ratio={String(item.ratio)} />
                    )}
                    <span className={`jg__badge ${isVideo ? 'jg__badge--play' : ''}`} aria-hidden="true">
                      {isVideo ? <PlayIcon size={22} /> : <ExpandIcon size={18} />}
                    </span>
                  </button>
                </li>
              )
            })}
          </Fragment>
        ))}
      </ul>
      {open !== null && <Lightbox items={viewable} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />}
    </>
  )
}
