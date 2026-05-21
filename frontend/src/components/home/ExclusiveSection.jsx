import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'

// ===== EXCLUSIVE - CONTROLLED 3-UP CAROUSEL =====
export default function ExclusiveSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const treatmentCategories = [
        { name: "D'COSMEDIS WATERLESS", subname: 'MEDICAL PEDICURE', path: '/treatments/aayna-waterless-pedicure', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
        { name: 'CLEARLIFT® &', subname: 'CLEARSKIN™', path: '/treatments/clearlift-clearskin', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
        { name: 'EMSCULPT®', subname: '', path: '/treatments/emsculpt', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80' },
        { name: 'FRAXEL', subname: '', path: '/treatments/fraxel', image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
        { name: 'HYDRAFACIAL', subname: '', path: '/treatments/hydrafacial', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
        { name: 'SENSIBLE FILLERS,', subname: "THE D'COSMEDIS WAY", path: '/treatments/sensible-fillers', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
        { name: 'THERMAGE', subname: '', path: '/treatments/thermage', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80' },
        { name: 'LASER HAIR', subname: 'REMOVAL', path: '/treatments/laser-hair-removal', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80' },
    ]

    const total = treatmentCategories.length

    // visible count: 2 on mobile, 2 on tablet, 3 on desktop
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            const count = w < 1024 ? 2 : 3
            setVisibleCount(count)
            setCurrentIndex(prev => Math.min(prev, total - count))
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [total])

    const maxIndex = total - visibleCount
    const canPrev = currentIndex > 0
    const canNext = currentIndex < maxIndex

    const go = (dir) => {
        if (isTransitioning) return
        if (dir === 'prev' && !canPrev) return
        if (dir === 'next' && !canNext) return
        setIsTransitioning(true)
        setCurrentIndex(prev => prev + (dir === 'next' ? 1 : -1))
        setTimeout(() => setIsTransitioning(false), 420)
    }

    const GAP = 16 // px gap between cards

    return (
        <section style={{ background: '#EDE8D0', padding: 'clamp(2.5rem, 8vw, 6rem) 0', overflow: 'hidden' }}>

            {/* ── Heading ── */}
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-8 md:mb-14">
                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.625rem',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            color: '#999',
                            marginBottom: '0.75rem',
                        }}>
                            Global Standards
                        </span>
                        <h2 style={{
                            color: 'var(--color-dark)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                            fontWeight: 400,
                            lineHeight: 1.2,
                            margin: 0,
                        }}>
                            D'CosMedis Exclusive <br /> Treatment At a Glance
                        </h2>
                    </div>
                </RevealWrapper>
            </div>

            {/* ── Carousel + side arrows ── */}
            <div className="container max-w-6xl" style={{ position: 'relative' }}>

                {/* LEFT arrow — sits outside the track on the left */}
                <button
                    onClick={() => go('prev')}
                    disabled={!canPrev}
                    aria-label="Previous treatment"
                    style={{
                        position: 'absolute',
                        left: '0px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '1.5px solid',
                        borderColor: canPrev ? 'var(--color-wine)' : 'rgba(149,71,149,0.25)',
                        background: canPrev ? 'var(--color-wine)' : 'rgba(237,232,208,0.85)',
                        color: canPrev ? '#fff' : 'rgba(149,71,149,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: canPrev ? 'pointer' : 'not-allowed',
                        opacity: canPrev ? 1 : 0.45,
                        transition: 'all 0.25s ease',
                        boxShadow: canPrev ? '0 4px 14px rgba(149,71,149,0.28)' : 'none',
                        backdropFilter: 'blur(4px)',
                    }}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Track viewport — clips the sliding strip */}
                <div style={{ overflow: 'hidden', borderRadius: '3px' }}>
                    <div
                        style={{
                            display: 'flex',
                            gap: `${GAP}px`,
                            transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount} + ${GAP / visibleCount}px)))`,
                            transition: isTransitioning
                                ? 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)'
                                : 'none',
                            willChange: 'transform',
                        }}
                    >
                        {treatmentCategories.map((cat) => (
                            <Link
                                key={cat.name}
                                to={cat.path}
                                style={{
                                    flex: `0 0 calc(${100 / visibleCount}% - ${GAP * (visibleCount - 1) / visibleCount}px)`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '3px',
                                    aspectRatio: '3 / 4',
                                    display: 'block',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 18px rgba(0,0,0,0.13)',
                                }}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    loading="lazy"
                                    style={{
                                        position: 'absolute', inset: 0,
                                        width: '100%', height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                                {/* Gradient overlay */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.04) 100%)',
                                }} />
                                {/* Hover shine */}
                                <div className="exc-shine" style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 55%)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    pointerEvents: 'none',
                                }} />

                                {/* Card text */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    padding: 'clamp(0.9rem, 2.5vw, 1.6rem)',
                                    zIndex: 10,
                                }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: 'clamp(0.82rem, 2.2vw, 1.2rem)',
                                        fontWeight: 500,
                                        letterSpacing: '0.1em',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        marginBottom: cat.subname ? '0.18rem' : 0,
                                        lineHeight: 1.2,
                                    }}>
                                        {cat.name}
                                    </h3>
                                    {cat.subname && (
                                        <p style={{
                                            fontSize: 'clamp(0.48rem, 1.2vw, 0.62rem)',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            letterSpacing: '0.22em',
                                            color: 'rgba(255,255,255,0.72)',
                                            margin: 0,
                                        }}>
                                            {cat.subname}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* RIGHT arrow — sits outside the track on the right */}
                <button
                    onClick={() => go('next')}
                    disabled={!canNext}
                    aria-label="Next treatment"
                    style={{
                        position: 'absolute',
                        right: '0px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 20,
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '1.5px solid',
                        borderColor: canNext ? 'var(--color-wine)' : 'rgba(149,71,149,0.25)',
                        background: canNext ? 'var(--color-wine)' : 'rgba(237,232,208,0.85)',
                        color: canNext ? '#fff' : 'rgba(149,71,149,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: canNext ? 'pointer' : 'not-allowed',
                        opacity: canNext ? 1 : 0.45,
                        transition: 'all 0.25s ease',
                        boxShadow: canNext ? '0 4px 14px rgba(149,71,149,0.28)' : 'none',
                        backdropFilter: 'blur(4px)',
                    }}
                >
                    <ChevronRight size={20} />
                </button>

                {/* Dot indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '1.5rem',
                }}>
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { if (!isTransitioning) setCurrentIndex(i) }}
                            aria-label={`Go to slide ${i + 1}`}
                            style={{
                                width: i === currentIndex ? '26px' : '8px',
                                height: '8px',
                                borderRadius: '99px',
                                background: i === currentIndex ? 'var(--color-wine)' : 'rgba(149,71,149,0.28)',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                transition: 'all 0.35s ease',
                            }}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                a:hover .exc-shine { opacity: 1 !important; }
            `}</style>
        </section>
    )
}
