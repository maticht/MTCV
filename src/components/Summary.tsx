import { summary } from '../data/resume'

export const Summary = () => (
    <section id="summary" className="section">
        <div className="container">
            <h2 className="section__title">Summary</h2>
            <p className="text--lg">{summary}</p>
        </div>
    </section>
)