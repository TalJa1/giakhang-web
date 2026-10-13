import { leadership } from '../data/content'
import DocLink from './DocLink'
import Gallery from './Gallery'
import { CalendarIcon } from './Icons'
import Img from './Img'
import Section, { SubHead } from './Section'
import Video from './Video'

export default function Leadership() {
  const { yes, charity, technical } = leadership
  const [yesLead, ...yesRest] = yes.paragraphs
  const [charityLead, ...charityRest] = charity.paragraphs

  return (
    <Section id="leadership" label={leadership.label} tone="gray">
      <div className="stack">
        <article className="panel panel--split reveal" aria-labelledby="yes-title">
          <div className="logo-tile">
            <Img name={yes.image.name} alt={yes.image.alt} ratio="1 / 1" fit="contain" />
          </div>
          <div>
            <h3 id="yes-title" className="panel__title">
              {yes.title}
            </h3>
            <p className="role-pill">{yes.role}</p>
            <h4 className="block-subheading">{yes.subheading}</h4>
            <div className="prose">
              <p className="lead">{yesLead}</p>
              {yesRest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </article>

        <article className="panel panel--split panel--media-right reveal" aria-labelledby="charity-title">
          <div>
            <h3 id="charity-title" className="panel__title">
              {charity.title}
            </h3>
            <p className="panel__subtitle">{charity.subtitle}</p>
            <h4 className="block-subheading">{charity.subheading}</h4>
            <div className="prose">
              <p className="lead">{charityLead}</p>
              {charityRest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="panel__media">
            <Gallery items={charity.gallery} columns={2} label={`${charity.title}: photos`} />
            <Video name={charity.video.name} label={charity.video.alt} />
          </div>
        </article>
      </div>

      <SubHead label={technical.label} />
      <article className="panel panel--split panel--media-right reveal" aria-labelledby="technical-title">
        <div>
          <h3 id="technical-title" className="panel__title">
            {technical.title}
          </h3>
          <p className="panel__subtitle">{technical.subtitle}</p>
          <p className="meta">
            <CalendarIcon size={16} />
            {technical.dates}
          </p>
          <h4 className="block-subheading">{technical.subheading}</h4>
          <div className="prose">
            {technical.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="tags-label">{technical.tagsLabel}</p>
          <ul className="tags">
            {technical.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="panel__media">
          <Img name={technical.photo.name} alt={technical.photo.alt} ratio="4 / 3" />
          <DocLink name={technical.certificate.name} label={technical.certificate.alt} />
        </div>
      </article>
    </Section>
  )
}
