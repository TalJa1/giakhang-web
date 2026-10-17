import { leadership, ui } from '../data/content'
import { docUrl } from '../lib/media'
import StatRow from './CountUp'
import Gallery from './Gallery'
import { ArrowUpRightIcon, CalendarIcon, PdfIcon } from './Icons'
import Img from './Img'
import Marquee from './Marquee'
import Section, { SubHead } from './Section'

export default function Leadership() {
  const { yes, charity, technical } = leadership
  const [yesLead, ...yesRest] = yes.paragraphs
  const [charityLead, ...charityRest] = charity.paragraphs
  const pdf = docUrl(technical.certificate.doc)

  return (
    <Section id="leadership" num="05" label={leadership.label} tone="gray">
      <div className="stack">
        <article className="panel panel--yes" aria-labelledby="yes-title">
          <div className="logo-tile" data-reveal="scale">
            <div className="logo-tile__inner" data-tilt="">
              <Img name={yes.image.name} alt={yes.image.alt} ratio="1 / 1" fit="contain" />
              <span className="glare" aria-hidden="true" />
            </div>
          </div>
          <div className="panel__content">
            <div data-reveal="up">
              <h3 id="yes-title" className="panel__title">
                {yes.title}
              </h3>
              <p className="role-pill">{yes.role}</p>
              <h4 className="block-subheading">{yes.subheading}</h4>
            </div>
            <div className="prose" data-stagger="">
              <p className="lead" data-reveal="up">
                {yesLead}
              </p>
              {yesRest.map((p) => (
                <p key={p} data-reveal="up">
                  {p}
                </p>
              ))}
            </div>
            <StatRow stats={yes.stats} />
          </div>
        </article>

        <article className="panel panel--charity" aria-labelledby="charity-title">
          <div className="panel__head" data-reveal="up">
            <h3 id="charity-title" className="panel__title">
              {charity.title}
            </h3>
            <p className="panel__subtitle">{charity.subtitle}</p>
            <h4 className="block-subheading">{charity.subheading}</h4>
          </div>
          <div className="charity__grid">
            <div className="prose" data-stagger="">
              <p className="lead" data-reveal="up">
                {charityLead}
              </p>
              {charityRest.map((p) => (
                <p key={p} data-reveal="up">
                  {p}
                </p>
              ))}
            </div>
            <StatRow stats={charity.stats} className="stats--grid" />
          </div>
          <Gallery gallery={charity.gallery} label={`${charity.title}: photos and video`} className="charity__gallery" />
        </article>
      </div>

      <SubHead label={technical.label} />
      <article className="panel panel--technical" aria-labelledby="technical-title">
        <div className="panel__content">
          <div data-reveal="up">
            <h3 id="technical-title" className="panel__title">
              {technical.title}
            </h3>
            <p className="panel__subtitle">{technical.subtitle}</p>
            <p className="meta">
              <CalendarIcon size={16} />
              {technical.dates}
            </p>
            <h4 className="block-subheading">{technical.subheading}</h4>
          </div>
          <div className="prose" data-stagger="">
            {technical.paragraphs.map((p) => (
              <p key={p} data-reveal="up">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="certificate" data-reveal="right">
          <div className="certificate__frame">
            <Gallery
              gallery={{ items: [technical.certificate.image, technical.photo], rows: [1, 1] }}
              label={technical.certificate.image.alt}
            />
          </div>
          {pdf && (
            <a
              className="certificate__pdf"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ui.viewPdf}: ${technical.certificate.image.alt} (opens in a new tab)`}
            >
              <PdfIcon size={20} />
              {ui.viewPdf}
              <ArrowUpRightIcon size={14} />
            </a>
          )}
        </div>

        <div className="panel__tags">
          <p className="tags-label">{technical.tagsLabel}</p>
          <Marquee items={technical.tags} label={technical.tagsLabel} speed={40} repeat={2} className="marquee--tags" />
        </div>
      </article>
    </Section>
  )
}
