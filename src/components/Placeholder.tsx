import { ui } from '../data/content'
import { ImageIcon, VideoIcon } from './Icons'

type Props = {
  kind: 'image' | 'video'
  /** CSS aspect-ratio of the real media, so nothing shifts. */
  ratio?: string | null
  /** Describes the missing media for screen readers. */
  label: string
  className?: string
}

/** Shown only when a file fails to load at runtime (pending files are left out of the page). */
export default function Placeholder({ kind, ratio, label, className = '' }: Props) {
  const text = kind === 'video' ? ui.videoSoon : ui.imageSoon
  const Icon = kind === 'video' ? VideoIcon : ImageIcon
  return (
    <div
      className={`media media--fixed placeholder ${className}`}
      style={{ aspectRatio: ratio ?? (kind === 'video' ? '16 / 9' : '4 / 3') }}
      role="img"
      aria-label={`${label} (${text})`}
    >
      <span className="placeholder__inner">
        <Icon size={26} />
        <span className="placeholder__text">{text}</span>
      </span>
    </div>
  )
}
