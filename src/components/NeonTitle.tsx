import React from 'react'
import './neon-title.css'

type State = 'on' | 'flicker' | 'dead'

export const NeonTitle: React.FC<{ text: string }> = ({ text }) => {
    const letters = React.useMemo(() => text.split(''), [text])
    const [states, setStates] = React.useState<State[]>(() => letters.map(() => 'on'))

    React.useEffect(() => {
        setStates(letters.map(() => 'on'))
    }, [text, letters.length])

    React.useEffect(() => {
        let mounted = true
        let timer: number | undefined

        const tick = () => {
            if (!mounted || letters.length === 0) return

            const idx = Math.floor(Math.random() * letters.length)
            const action: State = Math.random() < 0.08 ? 'dead' : 'flicker' // small chance to go dead
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

    return (
        <h1 className="hero__title neon-title" aria-label={text}>
            {letters.map((ch, i) => (
                <span
                    key={i}
                    className={`neon-letter ${states[i]}`}
                    aria-hidden="true"
                >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
            ))}
        </h1>
    )
}