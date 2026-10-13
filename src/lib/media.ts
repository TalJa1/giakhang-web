import {
  BASE_PATH,
  BUCKET,
  DOCS,
  FALLBACK_EXTENSIONS,
  IMAGES,
  PENDING_DOCS,
  PENDING_IMAGES,
  PENDING_VIDEOS,
  VIDEOS,
} from '../config/media'

export type ImageKey = keyof typeof IMAGES
export type VideoKey = keyof typeof VIDEOS
export type DocKey = keyof typeof DOCS

const HEIC = /\.heic$/i

export function storageUrl(fileName: string): string {
  return `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(BASE_PATH + fileName)}?alt=media`
}

function lookup(map: Readonly<Record<string, string>>, key: string): string | undefined {
  return Object.hasOwn(map, key) ? map[key] : undefined
}

/** True when the image will render as a placeholder without any request (pending or not configured). */
export function isImageUnavailable(name: string): boolean {
  return imageCandidates(name).length === 0
}

/**
 * URLs to try for an image, in order: the configured file first, then the same base name with each
 * FALLBACK_EXTENSIONS entry. Empty when the key is pending or missing. HEIC files are never requested.
 */
export function imageCandidates(name: string): string[] {
  const file = lookup(IMAGES, name)
  if (!file || PENDING_IMAGES.includes(name)) return []
  const dot = file.lastIndexOf('.')
  const base = dot > 0 ? file.slice(0, dot) : file
  const files = new Set([file, ...FALLBACK_EXTENSIONS.map((ext) => base + ext)])
  return [...files].filter((f) => !HEIC.test(f)).map(storageUrl)
}

export function videoUrl(name: string): string | null {
  const file = lookup(VIDEOS, name)
  return file && !PENDING_VIDEOS.includes(name) ? storageUrl(file) : null
}

export function docUrl(name: string): string | null {
  const file = lookup(DOCS, name)
  return file && !PENDING_DOCS.includes(name) ? storageUrl(file) : null
}

/**
 * Remembers which candidate worked (or that all failed) so a second <Img> for the same key,
 * e.g. in the lightbox, starts from the right URL instead of repeating failed requests.
 */
export const resolvedImages = new Map<string, number>()
