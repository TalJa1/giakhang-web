import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{site.footer}</p>
      </div>
    </footer>
  )
}
