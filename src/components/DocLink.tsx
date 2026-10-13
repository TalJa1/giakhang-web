import { ui } from '../data/content'
import { docUrl } from '../lib/media'
import { ArrowUpRightIcon, PdfIcon } from './Icons'

type Props = {
  name: string
  /** Names the document for screen readers. */
  label: string
}

/** Card for a PDF in Firebase Storage: opens it in a new tab, or says it is coming soon. */
export default function DocLink({ name, label }: Props) {
  const url = docUrl(name)
  return (
    <div className="doc-card">
      <span className="doc-card__icon">
        <PdfIcon size={40} />
      </span>
      {url ? (
        <a
          className="btn btn--outline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ui.viewCertificate}: ${label} (PDF, opens in a new tab)`}
        >
          {ui.viewCertificate}
          <ArrowUpRightIcon size={16} />
        </a>
      ) : (
        <p className="doc-card__soon">{ui.certificateSoon}</p>
      )}
    </div>
  )
}
