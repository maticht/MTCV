import React from 'react'
import { contact } from '../data/resume'
import './header.css'

export const Header = () => {
    const headerRef = React.useRef<HTMLElement | null>(null)

    React.useEffect(() => {
        const setHeaderHeight = () => {
            const h = headerRef.current?.offsetHeight ?? 0
            document.documentElement.style.setProperty('--header-height', `${h}px`)
        }
        setHeaderHeight()
        window.addEventListener('resize', setHeaderHeight)
        return () => window.removeEventListener('resize', setHeaderHeight)
    }, [])

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header className="header">
            <div className="container header__inner">
                <a href="#" className="logo" onClick={handleLogoClick} aria-label="up">MT</a>
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