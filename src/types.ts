import type { ImageKey, VideoKey } from './lib/media'

export type ImageItem = {
  kind: 'image'
  name: ImageKey
  alt: string
  fit?: 'cover' | 'contain'
  position?: string
}

export type VideoItem = {
  kind: 'video'
  name: VideoKey
  alt: string
}

export type MediaItem = ImageItem | VideoItem

export type IconName = 'medal' | 'trophy' | 'music'

export type LinkButton = {
  label: string
  href: string
}
