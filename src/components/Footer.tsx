import { contact } from '../data/resume'

export const Footer = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <div>(c) {new Date().getFullYear()} {contact.name}</div>
            <div className="footer__links">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.telegram} target="_blank" rel="noreferrer">Telegram</a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    </footer>
)
