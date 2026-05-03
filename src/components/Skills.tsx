import { skills } from '../data/resume'

export const Skills = () => (
    <section id="skills" className="section radial-accent-bg">
        <div className="container">
            <h2 className="section__title">Core Competencies</h2>
            <div className="grid skills">
                <div className="card"><h4>Analysis & Requirements</h4><p>{skills.requirements}</p></div>
                <div className="card"><h4>Tools & Platforms</h4><p>{skills.tools}</p></div>
                <div className="card"><h4>System & Integration Design</h4><p>{skills.technical}</p></div>
                <div className="card"><h4>Development</h4><p>{skills.programming}</p></div>
                <div className="card"><h4>Backend & DevOps</h4><p>{skills.backendDevOps}</p></div>
                <div className="card"><h4>Databases & Data Modeling</h4><p>{skills.databases}</p></div>
                <div className="card"><h4>Methodologies & Communication</h4><p>{skills.other}</p></div>
            </div>
        </div>
    </section>
)
