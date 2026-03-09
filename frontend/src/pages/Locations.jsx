import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { locations } from '../data/siteData'

export default function Locations() {
    return (
        <>
            {/* Page Hero - Consistent */}
            <section className="page-hero">
                <div className="container">
                    <RevealWrapper>
                        <Caption variant="overline">Visit Us</Caption>
                        <Heading variant="page">Our Locations</Heading>
                        <Text size="lg" color="muted" className="max-w-2xl mt-5">
                            D'CosMedis Clinic has state-of-the-art centers across Delhi NCR and Ludhiana. Find a clinic near you.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Locations - Improved Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {locations.map((loc, i) => (
                            <RevealWrapper key={loc.id} direction={i % 2 === 0 ? 'left' : 'right'}>
                                <div className="bg-white rounded-2xl overflow-hidden border hover:border-gold transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'var(--color-border)' }}>
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
                                                <MapPin size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Address</Caption>
                                                    <Text size="sm" color="muted">{loc.address}</Text>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Phone size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Phone</Caption>
                                                    <a
                                                        href={`tel:${loc.phone}`}
                                                        className="text-sm hover:text-gold transition-colors"
                                                        style={{ color: 'var(--color-text-muted)' }}
                                                    >
                                                        {loc.phone}
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Mail size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <Caption variant="label" className="mb-1">Email</Caption>
                                                    <a
                                                        href={`mailto:${loc.email}`}
                                                        className="text-sm hover:text-gold transition-colors"
                                                        style={{ color: 'var(--color-text-muted)' }}
                                                    >
                                                        {loc.email}
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <Clock size={20} className="mt-1 shrink-0" style={{ color: 'var(--color-gold)' }} />
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
                .text-gold {
                    color: var(--color-gold);
                }
                .hover\:text-gold:hover {
                    color: var(--color-gold);
                }
                .hover\:border-gold:hover {
                    border-color: var(--color-gold);
                }
            `}</style>
        </>
    )
}
