import { contact } from '../data/resume'

export const Footer = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <div>© {new Date().getFullYear()} {contact.name}</div>
            <div className="footer__links">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    </footer>
)