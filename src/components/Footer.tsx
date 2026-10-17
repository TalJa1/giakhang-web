import { site } from '../data/content'
import { ArrowUpIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__brand">
          <span className="brand__mark" aria-hidden="true" />
          {site.footer}
        </p>
        <a className="to-top" href="#home">
          {site.backToTop}
          <span className="to-top__icon">
            <ArrowUpIcon size={16} />
          </span>
        </a>
      </div>
    </footer>
  )
}
