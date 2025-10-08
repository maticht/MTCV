import { contact } from '../data/resume'
import './hero.css'
import {ScrollHint} from "./ScrollHint";
import {NeonTitle} from "./NeonTitle";

export const Hero = () => (
    <section className="hero" aria-label="Intro">
        <div className="hero__block">
            <div className="container" style={{ padding: ' 0 0 20px' }}>
                <NeonTitle text={contact.name} />
                <p className="hero__subtitle">System & Business Analyst · Full-Stack Developer</p>
                <div className="hero__actions">
                    <a className="hero__btn" href={`mailto:${contact.email}`}>Email</a>
                    <a className="hero__btn btn--outline" href={contact.cv} target="_blank" rel="noreferrer">CV</a>
                </div>
                <div className="hero__actions">
                    <a className="hero__btn btn--ghost" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="hero__btn btn--ghost" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
        <ScrollHint/>
    </section>
)
