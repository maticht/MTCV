import { contact } from '../data/resume'
import './hero.css'

export const Hero = () => (
    <section className="hero" aria-label="Intro">
        <div className="container">
            <h1 className="hero__title">{contact.name}</h1>
            <p className="hero__subtitle">System & Business Analyst · Full-Stack Developer</p>
            <div className="hero__actions">
                <a className="btn" href={`mailto:${contact.email}`}>Email</a>
                <a className="btn btn--outline" href={`tel:${contact.phone.replace(/\s/g,'')}`}>Call</a>
                <a className="btn btn--ghost" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn btn--ghost" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="hero__meta">
                <span>{contact.location}</span>
                <span>·</span>
                <span>{contact.email}</span>
                <span>·</span>
                <span>{contact.phone}</span>
            </div>
        </div>
    </section>
)
