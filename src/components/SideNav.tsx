import { useEffect, useState } from 'react'
import { contact } from '../data/resume'
import './sideNav.css'

const navItems = [
    { id: 'hero', label: 'Intro' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
] as const

type NavSectionId = (typeof navItems)[number]['id']

export const SideNav = () => {
    const [activeId, setActiveId] = useState<NavSectionId>('hero')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const resolveActiveSection = () => {
            const pivot = window.innerHeight * 0.38
            const scrollBottom = window.scrollY + window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            if (documentHeight - scrollBottom < 48) {
                setActiveId(navItems[navItems.length - 1].id)
                return
            }

            let nextActive: NavSectionId = navItems[0].id
            let sectionContainingPivot: NavSectionId | null = null

            navItems.forEach(({ id }) => {
                const element = document.getElementById(id)
                if (!element) return

                const rect = element.getBoundingClientRect()
                if (rect.top <= pivot) {
                    nextActive = id
                }

                if (rect.top <= pivot && rect.bottom >= pivot) {
                    sectionContainingPivot = id
                }
            })

            setActiveId(sectionContainingPivot ?? nextActive)
        }

        resolveActiveSection()
        window.addEventListener('scroll', resolveActiveSection, { passive: true })
        window.addEventListener('resize', resolveActiveSection)

        return () => {
            window.removeEventListener('scroll', resolveActiveSection)
            window.removeEventListener('resize', resolveActiveSection)
        }
    }, [])

    useEffect(() => {
        document.body.classList.toggle('body--modalOpen', isOpen)

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            document.body.classList.remove('body--modalOpen')
            window.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen])

    const handleNavigate = () => {
        setIsOpen(false)
    }

    return (
        <>
            <aside className="sideNav" aria-label="Section navigation">
                <button
                    className="sideNav__rail"
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-expanded={isOpen}
                    aria-controls="side-nav-modal"
                    aria-label="Open navigation"
                >
                    {navItems.map((item) => (
                        <span
                            key={item.id}
                            className={`sideNav__dot${activeId === item.id ? ' sideNav__dot--active' : ''}`}
                            aria-hidden="true"
                        />
                    ))}
                </button>
            </aside>

            <div
                className={`sideNavModal${isOpen ? ' sideNavModal--open' : ''}`}
                aria-hidden={!isOpen}
            >
                <button
                    className="sideNavModal__backdrop"
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation"
                />
                <section id="side-nav-modal" className="sideNavModal__panel" aria-label="Navigation menu">
                    <nav className="sideNavModal__list">
                        {navItems.map((item, index) => (
                            <a
                                key={item.id}
                                className={`sideNavModal__item${activeId === item.id ? ' sideNavModal__item--active' : ''}`}
                                href={`#${item.id}`}
                                onClick={handleNavigate}
                            >
                                <span className="sideNavModal__index">{String(index + 1).padStart(2, '0')}</span>
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    <a
                        className="sideNavModal__contact btn btn--outline"
                        href={`mailto:${contact.email}`}
                        onClick={handleNavigate}
                    >
                        Contact
                    </a>
                </section>
            </div>
        </>
    )
}
