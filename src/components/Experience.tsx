import { experience } from '../data/resume'

export const Experience = () => (
    <section id="experience" className="section">
        <div className="container">
            <h2 className="section__title">Experience</h2>
            <div className="timeline">
                {experience.map((exp, i) => (
                    <article key={i} className="timeline__item">
                        <div className="timeline__badge">{String(i+1).padStart(2,'0')}</div>
                        <div className="timeline__content">
                            <h3 className="timeline__title">{exp.role} · {exp.company}</h3>
                            <p className="timeline__period">{exp.period}</p>
                            <ul className="bullets">
                                {exp.bullets.map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
)
