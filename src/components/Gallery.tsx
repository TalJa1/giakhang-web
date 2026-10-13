import { useState, type CSSProperties } from 'react'
import { isImageUnavailable, videoUrl } from '../lib/media'
import type { MediaItem, VideoItem } from '../types'
import { PlayIcon } from './Icons'
import Img from './Img'
import Lightbox from './Lightbox'
import Placeholder from './Placeholder'

type Props = {
  items: MediaItem[]
  /** "feature": first item spans the full width, the rest share one row. "grid": equal tiles. */
  variant?: 'feature' | 'grid'
  /** Tiles per row (for "feature", the row under the large image). */
  columns?: number
  ratio?: string
  featureRatio?: string
  /** Names the group for screen readers. */
  label: string
  className?: string
}

function isAvailable(item: MediaItem) {
  return item.kind === 'image' ? !isImageUnavailable(item.name) : videoUrl(item.name) !== null
}

function VideoThumb({ item, ratio }: { item: VideoItem; ratio: string }) {
  const url = videoUrl(item.name)
  const [failed, setFailed] = useState(false)
  if (!url || failed) return <Placeholder kind="video" ratio={ratio} label={item.alt} />
  return (
    <div className="media media--fixed media--video-thumb" style={{ aspectRatio: ratio }}>
      {/* #t=0.1 makes browsers paint the first frame as a poster. */}
      <video src={`${url}#t=0.1`} muted playsInline preload="metadata" tabIndex={-1} aria-hidden="true" onError={() => setFailed(true)} />
      <span className="play-badge" aria-hidden="true">
        <PlayIcon size={22} />
      </span>
    </div>
  )
}

/** Clickable media tiles that open in a lightbox. Pending items stay as (non-clickable) placeholders. */
export default function Gallery({
  items,
  variant = 'grid',
  columns,
  ratio = '4 / 3',
  featureRatio = '16 / 10',
  label,
  className = '',
}: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const viewable = items.filter(isAvailable)
  const cols = columns ?? Math.max(1, variant === 'feature' ? items.length - 1 : items.length)

  return (
    <>
      <ul
        className={`gallery gallery--${variant} ${className}`}
        style={{ '--cols': cols } as CSSProperties}
        aria-label={label}
      >
        {items.map((item, i) => {
          const tileRatio = variant === 'feature' && i === 0 ? featureRatio : ratio
          const media =
            item.kind === 'image' ? (
              <Img name={item.name} alt={item.alt} ratio={tileRatio} fit={item.fit} position={item.position} />
            ) : (
              <VideoThumb item={item} ratio={tileRatio} />
            )
          const lightboxIndex = viewable.indexOf(item)
          return (
            <li key={item.name + item.kind} className="gallery__item">
              {lightboxIndex >= 0 ? (
                <button
                  type="button"
                  className="gallery__button"
                  aria-label={`${item.alt} (${item.kind === 'video' ? 'play video' : 'enlarge'})`}
                  onClick={() => setOpen(lightboxIndex)}
                >
                  {media}
                </button>
              ) : (
                media
              )}
            </li>
          )
        })}
      </ul>
      {open !== null && (
        <Lightbox items={viewable} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
      )}
    </>
  )
}
