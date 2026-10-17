import type { ImageKey, VideoKey } from './lib/media'

/** `ratio` is the file's real width / height, so galleries can show it uncropped. */
export type ImageItem = {
  kind: 'image'
  name: ImageKey
  alt: string
  ratio: number
}

export type VideoItem = {
  kind: 'video'
  name: VideoKey
  alt: string
  ratio: number
}

export type MediaItem = ImageItem | VideoItem

export type IconName = 'medal' | 'trophy' | 'globe' | 'music'

export type LinkButton = {
  label: string
  href: string
}

export type Stat = {
  value: number
  suffix?: string
  label: string
}
