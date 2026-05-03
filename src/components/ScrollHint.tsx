import React from 'react'
import './scroll-hint.css'

export const ScrollHint: React.FC = () => {
    const [visible, setVisible] = React.useState(true)
    const ticking = React.useRef(false)

    React.useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return
            ticking.current = true
            requestAnimationFrame(() => {
                setVisible(window.scrollY < 40)
                ticking.current = false
            })
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className={`scroll-hint ${visible ? 'visible' : 'hidden'}`} aria-hidden="true">
            <span className="arrow" />
            <span className="arrow" />
            <span className="arrow" />
        </div>
    )
}
