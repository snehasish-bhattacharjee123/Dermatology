import { useEffect, useRef, useCallback } from 'react'

/**
 * Simple reveal-on-scroll using IntersectionObserver.
 * No Lenis, no GSAP ScrollTrigger — just native scrolling + CSS transitions.
 */
export function useReveal(options = {}) {
    const ref = useRef(null)
    const {
        threshold = 0.15,
        delay = 0,
    } = options

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // Set initial hidden state
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                    observer.unobserve(el)
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay, threshold])

    return ref
}

export function RevealWrapper({ children, className = '', direction = 'up', delay = 0 }) {
    const ref = useRef(null)

    const getTransform = useCallback(() => {
        switch (direction) {
            case 'up': return 'translateY(30px)'
            case 'down': return 'translateY(-30px)'
            case 'left': return 'translateX(-30px)'
            case 'right': return 'translateX(30px)'
            default: return 'translateY(30px)'
        }
    }, [direction])

    useEffect(() => {
        const el = ref.current
        if (!el) return

        el.style.opacity = '0'
        el.style.transform = getTransform()
        el.style.transition = `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1'
                    el.style.transform = 'translate(0, 0)'
                    observer.unobserve(el)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay, getTransform])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}

export function ParallaxImage({ src, alt, className = '', speed = -0.1, srcSet, sizes, loading = 'lazy', decoding = 'async', style }) {
    return (
        <div className={`overflow-hidden ${className}`} style={style}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                srcSet={srcSet}
                sizes={sizes}
                loading={loading}
                decoding={decoding}
            />
        </div>
    )
}
