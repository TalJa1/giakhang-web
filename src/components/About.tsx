import { about } from '../data/content'
import Img from './Img'
import Section from './Section'
import Video from './Video'

export default function About() {
  const { philosophy } = about

  const band = (
    <div className="philosophy">
      <div className="container">
        <div className="philosophy__inner reveal">
          <h3 className="philosophy__heading">{philosophy.heading}</h3>
          <p className="philosophy__quote">{philosophy.quote}</p>
          <p className="philosophy__text">{philosophy.text}</p>
        </div>
      </div>
    </div>
  )

  return (
    <Section id="about" label={about.label} heading={about.heading} className="about" after={band}>
      <div className="about__intro reveal">
        <p className="lead">{about.intro}</p>
        <div className="school-panel">
          {about.schoolImages.map((img) => (
            <Img key={img.name} name={img.name} alt={img.alt} ratio={img.ratio} fit="contain" className="school-panel__img" />
          ))}
        </div>
      </div>

      <div className="about__body reveal">
        <div className="prose">
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Video name={about.video.name} label={about.video.alt} className="about__video" />
      </div>

      <p className="about__closing reveal">{about.closing}</p>
    </Section>
  )
}
