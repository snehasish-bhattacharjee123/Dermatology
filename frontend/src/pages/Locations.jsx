import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { locations } from '../data/siteData'

export default function Locations() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container">
                    <RevealWrapper>
                        <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Visit Us</p>
                        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Our Locations</h1>
                        <p className="max-w-2xl text-lg mt-4" style={{ color: 'var(--color-text-muted)' }}>
                            AAYNA Clinic has state-of-the-art centers across Delhi NCR and Ludhiana. Find a clinic near you.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Locations */}
            <section className="section">
                <div className="container">
                    <div className="space-y-16">
                        {locations.map((loc, i) => (
                            <RevealWrapper key={loc.id} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'direction-rtl' : ''}`}>
                                    <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                        <div className="overflow-hidden rounded-2xl h-[400px]">
                                            <img
                                                src={loc.image}
                                                alt={loc.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                        <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{loc.name}</h2>
                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start gap-4">
                                                <MapPin size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-dark)' }}>Address</p>
                                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{loc.address}</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Phone size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-dark)' }}>Phone</p>
                                                    <a href={`tel:${loc.phone}`} className="text-sm hover:text-[var(--color-gold)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                                                        {loc.phone}
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Mail size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-dark)' }}>Email</p>
                                                    <a href={`mailto:${loc.email}`} className="text-sm hover:text-[var(--color-gold)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                                                        {loc.email}
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Clock size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-dark)' }}>Hours</p>
                                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{loc.hours}</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="flex items-center gap-4">
                                            <Link to="/book" className="btn btn-primary">
                                                Book Here
                                            </Link>
                                            <a
                                                href={loc.mapUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline flex items-center gap-2"
                                            >
                                                Directions <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
