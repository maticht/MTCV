import { useEffect, useState } from 'react'
import { contact } from '../data/resume'
import './hero.css'

export const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="hero" className="hero" aria-label="Intro">
            <div className="hero__block">
                <div className="container hero__container">
                    <div className="hero__content">
                        <h1 className="hero__title">{contact.name}</h1>
                        <p className="hero__subtitle">Senior System Analyst - Solution & Requirements Design</p>
                        <div className="hero__actions">
                            <a className="hero__btn hero__btn--glow" href={`mailto:${contact.email}`}>Email</a>
                            <a className="hero__btn btn--outline" href={contact.cv} target="_blank" rel="noreferrer">CV</a>
                        </div>
                        <div className="hero__actions">
                            <a className="hero__btn btn--ghost" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                            <a className="hero__btn btn--ghost" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    <a
                        className={`hero__scrollCue${isScrolled ? ' hero__scrollCue--hidden' : ''}`}
                        href="#summary"
                        aria-label="Scroll to summary"
                    >
                        <span className="hero__scrollVariant hero__scrollVariant--desktop">
                            <span className="hero__scrollText">Scroll</span>
                            <span className="hero__scrollIndicator" aria-hidden="true">
                                <span className="hero__scrollDot" />
                            </span>
                        </span>
                        <span className="hero__scrollVariant hero__scrollVariant--mobile">
                            <span className="hero__scrollText">Swipe up</span>
                            <span className="hero__scrollIndicator hero__scrollIndicator--phone" aria-hidden="true">
                                <span className="hero__phoneFrame">
                                    <span className="hero__phoneNotch" />
                                    <span className="hero__swipeTrail" />
                                    <span className="hero__swipeFinger" />
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
