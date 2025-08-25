import {skills} from '../data/resume'

export const Skills = () => (
    <section id="skills" className="section radial-accent-bg">
        <div className="container">
            <h2 className="section__title">Skills</h2>
            <div className="grid skills">
                <div className="card"><h4>Requirements & Analysis</h4><p>{skills.requirements}</p></div>
                <div className="card"><h4>Tools</h4><p>{skills.tools}</p></div>
                <div className="card"><h4>Technical</h4><p>{skills.technical}</p></div>
                <div className="card"><h4>Programming</h4><p>{skills.programming}</p></div>
                <div className="card"><h4>Backend & DevOps</h4><p>{skills.backendDevOps}</p></div>
                <div className="card"><h4>Databases</h4><p>{skills.databases}</p></div>
                <div className="card"><h4>Other</h4><p>{skills.other}</p></div>
            </div>
        </div>
    </section>
)