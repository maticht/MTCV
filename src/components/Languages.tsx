import { languages } from '../data/resume'

export const Languages = () => (
    <section id="languages" className="section">
        <div className="container">
            <h2 className="section__title">Languages</h2>
            <ul className="chips">
                {languages.map((l, i) => <li className="chip" key={i}>{l}</li>)}
            </ul>
        </div>
    </section>
)