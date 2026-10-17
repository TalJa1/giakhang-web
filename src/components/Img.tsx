import { useState } from 'react'
import { imageCandidates, resolvedImages } from '../lib/media'
import Placeholder from './Placeholder'

type Props = {
  name: string
  alt: string
  /** CSS aspect-ratio, e.g. "4 / 3". Omit to show the image at its natural size (lightbox). */
  ratio?: string
  fit?: 'cover' | 'contain'
  position?: string
  /** Load immediately instead of lazily (hero, lightbox). */
  eager?: boolean
  className?: string
}

/**
 * Image from Firebase Storage (or the site's public folder). Pending or unknown keys render the
 * placeholder without a request; a failed load retries the same base name with each fallback
 * extension, then gives up to the placeholder. Fades in once decoded.
 */
export default function Img({ name, alt, ratio, fit = 'cover', position = 'center', eager = false, className = '' }: Props) {
  const candidates = imageCandidates(name)
  const [index, setIndex] = useState(() => resolvedImages.get(name) ?? 0)
  const [loaded, setLoaded] = useState(false)
  const src = candidates[index]

  if (!src) return <Placeholder kind="image" ratio={ratio} label={alt} className={className} />

  function handleError() {
    const next = index + 1
    if (next >= candidates.length) resolvedImages.set(name, next)
    setIndex(next)
  }

  return (
    <div
      className={`media ${ratio ? 'media--fixed' : ''} ${loaded ? 'is-loaded' : ''} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        style={{ objectFit: fit, objectPosition: position }}
        onLoad={() => {
          resolvedImages.set(name, index)
          setLoaded(true)
        }}
        onError={handleError}
      />
    </div>
  )
}
