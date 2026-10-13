import { contact } from '../data/content'
import { ArrowUpRightIcon, MailIcon, PinIcon } from './Icons'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" label={contact.label} tone="gray" className="contact">
      <div className="contact__grid reveal">
        <div>
          <p className="lead">{contact.paragraph}</p>
          <p className="contact__closing">{contact.closing}</p>
        </div>
        <div className="contact__card">
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
          <a className="btn btn--primary" href={contact.button.href} target="_blank" rel="noopener noreferrer">
            {contact.button.label}
            <ArrowUpRightIcon size={16} />
          </a>
        </div>
      </div>
    </Section>
  )
}
