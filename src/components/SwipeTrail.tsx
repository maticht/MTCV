import React, { useRef, useCallback } from 'react'
import './swipe.css'

type Props = {
    children: React.ReactNode
}

export const SwipeTrail: React.FC<Props> = ({ children }) => {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const lastRef = useRef<{ x: number; y: number } | null>(null)
    const accDistRef = useRef<number>(0)
    const isDownRef = useRef<boolean>(false)

    const spawnParticle = useCallback((x: number, y: number, vx: number, vy: number) => {
        const container = rootRef.current
        if (!container) return

        const shapes = ['square', 'triangle', 'plus']
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        const el = document.createElement('span')
        el.className = `st-particle st-${shape}`

        const size = 8 + Math.random() * 18
        const spread = 30 + Math.random() * 80
        const angleJitter = (Math.random() - 0.5) * 0.6
        const tx = (vx * spread * (0.6 + Math.random() * 0.9)) + angleJitter * 20
        const ty = (vy * spread * (0.6 + Math.random() * 0.9)) + angleJitter * 20

        el.style.left = `${x - size / 2}px`
        el.style.top = `${y - size / 2}px`
        el.style.setProperty('--tx', `${tx}px`)
        el.style.setProperty('--ty', `${ty}px`)
        el.style.setProperty('--size', `${size}px`)
        el.style.setProperty('--rot', `${Math.floor(Math.random() * 360)}deg`)
        el.style.animationDuration = `${600 + Math.floor(Math.random() * 700)}ms`
        el.style.opacity = '1'

        el.addEventListener('animationend', () => el.remove(), { once: true })

        container.appendChild(el)
    }, [])

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
        lastRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
        accDistRef.current = 0
        isDownRef.current = true
        try { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId) } catch {}
    }

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const container = rootRef.current
        if (!container) return

        const isMouse = e.pointerType === 'mouse'
        if (!isMouse && !isDownRef.current) return // touch/pen require press

        const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top

        // initialize last position if missing (so mouse hover starts spawning)
        if (lastRef.current == null) {
            lastRef.current = { x, y }
            // if mouse, spawn an initial small burst so hover is visible immediately
            if (isMouse) {
                const angle = Math.random() * Math.PI * 2
                spawnParticle(x, y, Math.cos(angle) * 0.2, Math.sin(angle) * 0.2)
            }
            return
        }

        const lx = lastRef.current.x
        const ly = lastRef.current.y
        const dx = x - lx
        const dy = y - ly
        const dist = Math.hypot(dx, dy)
        accDistRef.current += dist

        if (accDistRef.current > 8 + Math.random() * 10) {
            accDistRef.current = 0
            const inv = 1 / (dist || 1)
            const vx = dx * inv
            const vy = dy * inv
            spawnParticle(x, y, vx, vy)
            if (Math.random() < 0.25) {
                spawnParticle(x + (Math.random() - 0.5) * 8, y + (Math.random() - 0.5) * 8, vx, vy)
            }
        }
        lastRef.current = { x, y }
    }

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        lastRef.current = null
        accDistRef.current = 0
        isDownRef.current = false
        try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId) } catch {}
    }

    return (
        <div
            className="st-root"
            ref={rootRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
        >
            {children}
            <div className="st-layer" aria-hidden />
        </div>
    )
}

export default SwipeTrail