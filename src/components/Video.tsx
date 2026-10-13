import { useState } from 'react'
import { videoUrl } from '../lib/media'
import Placeholder from './Placeholder'

type Props = {
  name: string
  label: string
  /** CSS aspect-ratio of the frame; null = natural size (lightbox). */
  ratio?: string | null
  autoPlay?: boolean
  className?: string
}

export default function Video({ name, label, ratio = '16 / 9', autoPlay = false, className = '' }: Props) {
  const url = videoUrl(name)
  const [failed, setFailed] = useState(false)

  if (!url || failed) return <Placeholder kind="video" ratio={ratio} label={label} className={className} />

  return (
    <div
      className={`media media--video ${ratio ? 'media--fixed' : ''} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <video
        src={url}
        controls
        preload="metadata"
        playsInline
        autoPlay={autoPlay}
        aria-label={label}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
