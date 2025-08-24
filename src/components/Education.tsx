import { education } from '../data/resume'

export const Education = () => (
    <section id="education" className="section">
        <div className="container">
            <h2 className="section__title">Education</h2>
            <div className="card">
                <h4>{education.school}</h4>
                <p className="muted">{education.location} · {education.period}</p>
                <p>{education.program}</p>
                <p>{education.degree}</p>
            </div>
        </div>
    </section>
)