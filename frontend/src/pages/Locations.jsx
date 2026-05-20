import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { locations } from '../data/siteData'

export default function Locations() {
    return (
        <>
            <style>{`
                .loc-hero {
                    position: relative;
                    min-height: clamp(340px, 60vw, 540px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                @media (max-width: 640px) {
                    .loc-hero {
                        min-height: clamp(280px, 65vw, 400px);
                        align-items: flex-end;
                        padding-bottom: 2rem;
                    }
                }
                @media (min-width: 768px) {
                    .loc-hero {
                        min-height: clamp(480px, 55vw, 600px);
                    }
                }
                .loc-hero-bg {
                    position: absolute; inset: 0; z-index: 0;
                }
                .loc-hero-bg img {
                    width: 100%; height: 100%; object-fit: cover; object-position: center;
                }
                .loc-hero-overlay {
                    position: absolute; inset: 0; background: rgba(0,0,0,0.48);
                }
                .loc-hero-content {
                    position: relative; z-index: 1; text-align: center; color: #fff;
                    width: 100%;
                    padding: calc(var(--header-total-height) + 1.5rem) 1rem 2rem;
                }
            `}</style>

            {/* Page Hero - Consistent */}
            <section className="loc-hero">
                <div className="loc-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
                        alt="Our Locations"
                    />
                    <div className="loc-hero-overlay" />
                </div>

                <div className="loc-hero-content container">
                    <RevealWrapper direction="up">
                        {/* Breadcrumb */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Link to="/" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.25)' }}>/</span>
                            <span style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-wine)' }}>Locations</span>
                        </div>

                        <span style={{ display: 'inline-block', fontSize: 'clamp(0.5rem, 1.3vw, 0.625rem)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-wine)', background: 'rgba(114,47,55,0.12)', border: '1px solid rgba(114,47,55,0.3)', borderRadius: '9999px', padding: '0.4rem 1.25rem', marginBottom: '1rem' }}>
                            Visit Us
                        </span>

                        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: 'clamp(2px, 1.5vw, 4px)', textTransform: 'uppercase', fontSize: 'clamp(1.85rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1rem' }}>
                            <span style={{ fontWeight: 300 }}>OUR </span>
                            <span style={{ fontWeight: 700, color: 'var(--color-wine)', fontStyle: 'italic' }}>LOCATIONS</span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.82rem, 2vw, 1.1rem)', fontWeight: 300, maxWidth: '38rem', margin: '0 auto', lineHeight: 1.75 }}>
                            D'CosMedis Clinic has state-of-the-art centers across Delhi NCR and Ludhiana. Find a clinic near you.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Locations - Improved Grid */}
            <section className="section bg-cream">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {locations.map((loc, i) => (
                            <RevealWrapper key={loc.id} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <div className="bg-white rounded-2xl overflow-hidden border hover:border-wine transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'var(--color-border)' }}>
                                    {/* Image */}
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={loc.image}
                                            alt={loc.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <Heading variant="card" className="mb-6">{loc.name}</Heading>

                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start gap-4">
                                                <MapPin size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-wine)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Address</Caption>
                                                    <Text size="sm" color="muted">{loc.address}</Text>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Phone size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-wine)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Phone</Caption>
                                                     <a
                                                        href={`tel:${loc.phone}`}
                                                        className="text-sm hover:text-wine transition-colors"
                                                        style={{ color: 'var(--color-text-muted)' }}
                                                    >
                                                        {loc.phone}
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Mail size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-wine)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Email</Caption>
                                                    <a
                                                        href={`mailto:${loc.email}`}
                                                        className="text-sm hover:text-wine transition-colors"
                                                        style={{ color: 'var(--color-text-muted)' }}
                                                    >
                                                        {loc.email}
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Clock size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-wine)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Hours</Caption>
                                                    <Text size="sm" color="muted">{loc.hours}</Text>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="flex items-center gap-4 flex-wrap">
                                            <Link to="/book" className="btn btn-primary">
                                                Book Here
                                            </Link>
                                            <a
                                                href={loc.mapUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline flex items-center gap-2"
                                            >
                                                Directions <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .text-wine {
                    color: var(--color-wine);
                }
                .hover\:text-wine:hover {
                    color: var(--color-wine);
                }
                .hover\:border-wine:hover {
                    border-color: var(--color-wine);
                }
            `}</style>
        </>
    )
}
