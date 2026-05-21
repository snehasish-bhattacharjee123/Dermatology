import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'

/**
 * CtaBanner — full-width image-background CTA section
 *
 * Props:
 *   eyebrow       {string}  — small label above the heading (default: "Begin Your Transformation")
 *   heading       {string}  — main heading plain text (default: "Ready to Begin Your")
 *   headingAccent {string}  — italic accent text at end of heading (default: "Skin Journey?")
 *   body          {string}  — paragraph below the heading
 *   primaryLabel  {string}  — primary button label (default: "Book Consultation")
 *   primaryTo     {string}  — react-router path for primary button (default: "/book")
 *   secondaryLabel{string}  — secondary button label (default: "Browse Concerns")
 *   secondaryTo   {string}  — react-router path for secondary button (default: "/concerns")
 *   image         {string}  — Unsplash / any URL for BG image
 *   overlayColor  {string}  — overlay rgba (default: "rgba(13,19,25,0.65)")
 */
export default function CtaBanner({
    eyebrow        = 'Begin Your Transformation',
    heading        = 'Ready to Begin Your',
    headingAccent  = 'Skin Journey?',
    body           = 'Book a consultation with our expert dermatologists and discover treatments tailored to your unique needs.',
    primaryLabel   = 'Book Consultation',
    primaryTo      = '/book',
    secondaryLabel = 'Browse Concerns',
    secondaryTo    = '/concerns',
    image          = 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1920&q=80',
    overlayColor   = 'rgba(13,19,25,0.65)',
}) {
    return (
        <section style={{ position: 'relative', padding: 'clamp(5rem, 10vw, 8rem) 0', overflow: 'hidden' }}>
            <img
                src={image}
                alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: overlayColor }} />
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '680px' }}>
                <RevealWrapper direction="up">
                    <span style={{
                        fontSize: '0.65rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.5)',
                        display: 'block',
                        marginBottom: '1.25rem',
                    }}>
                        {eyebrow}
                    </span>

                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        color: '#fff',
                        fontWeight: 300,
                        lineHeight: 1.15,
                        marginBottom: '1.25rem',
                        letterSpacing: '1px',
                    }}>
                        {heading}{' '}
                        <span style={{ fontStyle: 'italic', color: 'var(--color-wine-light)' }}>
                            {headingAccent}
                        </span>
                    </h2>

                    <p style={{
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: 'clamp(0.875rem, 2vw, 1.05rem)',
                        lineHeight: 1.8,
                        fontWeight: 300,
                        marginBottom: '2.5rem',
                    }}>
                        {body}
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to={primaryTo}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'var(--color-wine)',
                                color: '#fff',
                                padding: '0.9rem 2.25rem',
                                fontSize: '0.7rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'opacity 0.2s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                            {primaryLabel} <ArrowRight size={13} />
                        </Link>

                        <Link
                            to={secondaryTo}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#fff',
                                padding: '0.9rem 2.25rem',
                                fontSize: '0.7rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                border: '1px solid rgba(255,255,255,0.25)',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                backdropFilter: 'blur(4px)',
                                transition: 'border-color 0.2s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
                        >
                            {secondaryLabel}
                        </Link>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    )
}
