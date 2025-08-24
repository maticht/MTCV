import { contact } from '../data/resume'
import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container header__inner">
                <div className="logo">MT</div>
                <nav className="nav">
                    <a href="#summary">Summary</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#education">Education</a>
                </nav>
                <a className="btn btn--outline--small" href={`mailto:${contact.email}`}>Contact</a>
            </div>
        </header>
    )
}