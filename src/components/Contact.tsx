import { contact } from '../data/content'
import { ArrowUpRightIcon, MailIcon, PinIcon } from './Icons'
import Section from './Section'
import SplitWords from './SplitWords'

export default function Contact() {
  return (
    <Section id="contact" num="07" label={contact.label} tone="dark" className="contact">
      <div className="contact__grid">
        <div>
          <p className="lead" data-reveal="up">
            {contact.paragraph}
          </p>
          <p className="contact__closing" data-reveal="fade">
            <SplitWords text={contact.closing} />
          </p>
        </div>
        <div className="contact__card" data-reveal="scale">
          <ul className="contact__list">
            {contact.email && (
              <li>
                <MailIcon size={20} />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            <li>
              <PinIcon size={20} />
              <span>{contact.location}</span>
            </li>
          </ul>
          <a
            className="btn btn--primary btn--lg"
            href={contact.button.href}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic=""
          >
            {contact.button.label}
            <ArrowUpRightIcon size={18} />
          </a>
        </div>
      </div>
    </Section>
  )
}
