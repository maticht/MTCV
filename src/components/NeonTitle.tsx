import React from 'react'
import './neon-title.css'

type State = 'on' | 'flicker' | 'dead'

export const NeonTitle: React.FC<{ text: string }> = ({ text }) => {
    const letters = React.useMemo(() => text.split(''), [text])
    const [states, setStates] = React.useState<State[]>(() => letters.map(() => 'on'))
    const wrapperRef = React.useRef<HTMLDivElement | null>(null)
    const titleRef = React.useRef<HTMLHeadingElement | null>(null)
    const [scale, setScale] = React.useState<number>(1)

    React.useEffect(() => setStates(letters.map(() => 'on')), [text, letters.length])

    React.useEffect(() => {
        let mounted = true
        let timer: number | undefined

        const tick = () => {
            if (!mounted || letters.length === 0) return
            const idx = Math.floor(Math.random() * letters.length)
            const action: State = Math.random() < 0.08 ? 'dead' : 'flicker'
            setStates(s => {
                const next = s.slice()
                next[idx] = action
                return next
            })

            const recoverTime = action === 'dead' ? 2500 + Math.random() * 3000 : 200 + Math.random() * 600
            setTimeout(() => {
                if (!mounted) return
                setStates(s => {
                    const next = s.slice()
                    next[idx] = 'on'
                    return next
                })
            }, recoverTime)

            const delay = 400 + Math.random() * 1100
            timer = window.setTimeout(tick, delay)
        }

        timer = window.setTimeout(tick, 700)
        return () => {
            mounted = false
            if (timer) clearTimeout(timer)
        }
    }, [letters.length])

    React.useLayoutEffect(() => {
        if (!wrapperRef.current || !titleRef.current) return
        let ro: ResizeObserver | null = null
        let raf = 0

        const recompute = () => {
            const wrap = wrapperRef.current!
            const title = titleRef.current!
            const available = wrap.clientWidth
            const needed = title.scrollWidth
            const next = needed > 0 ? Math.min(1, available / needed) : 1
            setScale(prev => (Math.abs(prev - next) < 0.001 ? prev : next))
        }

        try {
            ro = new ResizeObserver(() => {
                cancelAnimationFrame(raf)
                raf = requestAnimationFrame(recompute)
            })
            ro.observe(wrapperRef.current)
            ro.observe(titleRef.current)
        } catch {
            const onResize = () => {
                cancelAnimationFrame(raf)
                raf = requestAnimationFrame(recompute)
            }
            window.addEventListener('resize', onResize)
            recompute()
            return () => window.removeEventListener('resize', onResize)
        }

        recompute()
        return () => {
            ro?.disconnect()
            cancelAnimationFrame(raf)
        }
    }, [text])

    return (
        <div ref={wrapperRef} className="neon-title-wrapper">
            <h1
                ref={titleRef}
                className="hero__title neon-title"
                aria-label={text}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'left center',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    transition: 'transform 160ms ease',
                }}
            >
                {letters.map((ch, i) => (
                    <span key={i} className={`neon-letter ${states[i]}`} aria-hidden="true">
            {ch === ' ' ? '\u00A0' : ch}
          </span>
                ))}
            </h1>
        </div>
    )
}
