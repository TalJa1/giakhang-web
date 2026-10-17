import { Fragment, type CSSProperties } from 'react'

type Props = {
  text: string
  /** Index of the first word, to continue a stagger across several lines. */
  offset?: number
}

/**
 * Wraps each word in a mask so it can slide up into view (word by word). The animation runs when an
 * ancestor gets `is-in` (scroll reveal) or `.hero` loads. The text stays one readable string for
 * assistive technology.
 */
export default function SplitWords({ text, offset = 0 }: Props) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="sw">
            <span className="sw__in" style={{ '--w': i + offset } as CSSProperties}>
              {word}
            </span>
          </span>
          {/* The space sits outside the inline-block mask, where it would otherwise collapse. */}
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
}
