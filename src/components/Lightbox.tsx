import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { MediaItem } from '../types'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons'
import Img from './Img'
import Video from './Video'

type Props = {
  items: MediaItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = items.length
  const item = items[index]

  // Focus the dialog on open, lock page scroll, and return focus to the opener on close.
  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      opener?.focus()
    }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && count > 1) onNavigate((index + 1) % count)
      else if (e.key === 'ArrowLeft' && count > 1) onNavigate((index - 1 + count) % count)
      else if (e.key === 'Tab' && dialogRef.current) {
        // Keep keyboard focus inside the dialog.
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, video[controls]')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [count, index, onClose, onNavigate])

  if (!item) return null

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" aria-label="Close" onClick={onClose}>
        <CloseIcon size={22} />
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            aria-label="Previous"
            onClick={() => onNavigate((index - 1 + count) % count)}
          >
            <ChevronLeftIcon size={26} />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            aria-label="Next"
            onClick={() => onNavigate((index + 1) % count)}
          >
            <ChevronRightIcon size={26} />
          </button>
        </>
      )}
      <div
        className="lightbox__stage"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        {item.kind === 'image' ? (
          <Img key={item.name} name={item.name} alt={item.alt} fit="contain" eager />
        ) : (
          <Video key={item.name} name={item.name} label={item.alt} ratio={null} autoPlay />
        )}
      </div>
    </div>,
    document.body,
  )
}
