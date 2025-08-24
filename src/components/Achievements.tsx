import { achievements } from '../data/resume'

export const Achievements = () => (
    <section id="achievements" className="section">
        <div className="container">
            <h2 className="section__title">Achievements</h2>
            <ul className="list">
                {achievements.map((a, i) => (
                    <li key={i} className="list__item">{a}</li>
                ))}
            </ul>
        </div>
    </section>
)