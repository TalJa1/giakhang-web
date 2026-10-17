import type { ReactNode } from 'react'
import type { IconName } from '../types'

type IconProps = { size?: number; className?: string }

function Svg({ size = 20, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  )
}

export function MedalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.5 2h3l1.5 5.2L13.5 2h3l-2.6 7.6" />
      <path d="M10.1 9.6 7.5 2" />
      <circle cx="12" cy="15" r="6" />
      <path d="m12 12.2.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3z" />
    </Svg>
  )
}

export function TrophyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4" />
      <path d="M12 13v4M8.5 21h7M9.5 17h5l.5 4h-6z" />
    </Svg>
  )
}

export function MusicIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </Svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </Svg>
  )
}

export function AchievementIcon({ name, ...props }: IconProps & { name: IconName }) {
  if (name === 'trophy') return <TrophyIcon {...props} />
  if (name === 'globe') return <GlobeIcon {...props} />
  if (name === 'music') return <MusicIcon {...props} />
  return <MedalIcon {...props} />
}

export function PdfIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 17v-4h1.3a1.3 1.3 0 0 1 0 2.6H8M12.5 17v-4h1a2 2 0 0 1 0 4zM17.5 13H16v4M16 15h1.3" strokeWidth={1.3} />
    </Svg>
  )
}

export function ImageIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="m21 16-5-5-9 9" />
    </Svg>
  )
}

export function VideoIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="6" width="13.5" height="12" rx="2" />
      <path d="m16 10.5 5.5-3v9l-5.5-3" />
    </Svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
    </Svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m15 5-7 7 7 7" />
    </Svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 5 7 7-7 7" />
    </Svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </Svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  )
}

export function ExpandIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </Svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </Svg>
  )
}
