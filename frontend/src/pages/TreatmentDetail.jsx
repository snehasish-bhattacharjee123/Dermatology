import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, MapPin, Phone, Calendar } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { treatments, locations } from '../data/siteData'

export default function TreatmentDetail() {
    const { slug } = useParams()
    const treatment = treatments.find((t) => t.slug === slug)

    if (!treatment) {
        return (
            <section className="section pt-40">
                <div className="container text-center">
                    <Heading variant="section">Treatment Not Found</Heading>
                    <Text color="muted" className="mt-4">
                        The treatment you're looking for doesn't exist.
                    </Text>
                    <Link to="/treatments" className="btn btn-primary mt-6 inline-flex">
                        <ArrowLeft size={16} /> Back to Treatments
                    </Link>
                </div>
            </section>
        )
    }

    const related = treatments
        .filter((t) => t.categorySlug === treatment.categorySlug && t.slug !== treatment.slug)
        .slice(0, 3)

    return (
        <>
            {/* Hero - Gold + Image split */}
            <section className="relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '500px' }}>
                    {/* Left - Gold panel */}
                    <div
                        className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-14 lg:py-20"
                        style={{ background: 'var(--color-gold)' }}
                    >
                        <RevealWrapper>
                            <nav className="text-sm font-medium mb-6" style={{ color: 'var(--color-dark)' }}>
                                <Link to="/" className="hover:underline">Home</Link>
                                {' > '}
                                <Link to="/treatments" className="hover:underline">Treatments</Link>
                                {' > '}
                                <span style={{ color: 'rgba(0,0,0,0.5)' }}>{treatment.title}</span>
                            </nav>

                            <span
                                className="inline-block px-4 py-1.5 text-[10px] tracking-[2px] uppercase font-bold rounded-full mb-4"
                                style={{ background: 'var(--color-dark)', color: '#fff' }}
                            >
                                {treatment.category}
                            </span>

                            <Heading
                                variant="section"
                                className="mb-5"
                                style={{ color: 'var(--color-dark)' }}
                            >
                                {treatment.title}
                            </Heading>

                            <Text size="md" style={{ color: 'rgba(0,0,0,0.7)', maxWidth: '480px' }} className="mb-6">
                                {treatment.shortDescription}
                            </Text>

                            <div className="flex items-center gap-6 flex-wrap mb-8" style={{ color: 'var(--color-dark)' }}>
                                <span className="flex items-center gap-2 font-medium">
                                    <Clock size={18} /> {treatment.duration}
                                </span>
                                <span className="font-bold text-lg">{treatment.price}</span>
                            </div>

                            <div className="flex items-center gap-3 flex-wrap">
                                <Link
                                    to="/book"
                                    className="btn btn-dark inline-flex"
                                >
                                    <Calendar size={16} /> Book Now
                                </Link>
                                <a
                                    href="tel:+911123456789"
                                    className="btn btn-outline"
                                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                                >
                                    <Phone size={16} /> Call Us
                                </a>
                            </div>
                        </RevealWrapper>
                    </div>

                    {/* Right - Image */}
                    <div className="h-72 lg:h-auto overflow-hidden">
                        <img
                            src={treatment.image}
                            alt={treatment.title}
                            className="w-full h-full object-cover"
                            style={{ minHeight: '500px' }}
                        />
                    </div>
                </div>
            </section>

            {/* Description Content - Refined */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <RevealWrapper>
                                <div
                                    className="treatment-content"
                                    dangerouslySetInnerHTML={{ __html: treatment.description }}
                                />
                            </RevealWrapper>
                        </div>

                        {/* Sidebar - Improved */}
                        <div>
                            <RevealWrapper delay={0.15}>
                                <div
                                    className="rounded-2xl p-8 sticky top-32"
                                    style={{
                                        background: 'var(--color-bg-cream)',
                                        border: '1px solid var(--color-border)',
                                    }}
                                >
                                    <Heading variant="card" className="mb-6">
                                        Book This Treatment
                                    </Heading>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-4">
                                            <Clock size={20} style={{ color: 'var(--color-gold)' }} />
                                            <div>
                                                <Caption variant="label">Duration</Caption>
                                                <Text size="sm" weight="semibold">{treatment.duration}</Text>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl font-bold" style={{ color: 'var(--color-gold)' }}>₹</span>
                                            <div>
                                                <Caption variant="label">Price</Caption>
                                                <Text size="sm" weight="semibold">{treatment.price}</Text>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to="/book"
                                        className="btn btn-primary w-full justify-center"
                                    >
                                        <Calendar size={16} /> Book Appointment
                                    </Link>

                                    {/* Locations */}
                                    <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                                        <Caption variant="overline" className="mb-4">
                                            Available At
                                        </Caption>
                                        {locations.slice(0, 3).map((loc) => (
                                            <div key={loc.id} className="flex items-start gap-3 mb-4">
                                                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
                                                <div>
                                                    <Text size="sm" weight="semibold">{loc.name}</Text>
                                                    <a
                                                        href={`tel:${loc.phone}`}
                                                        className="text-xs hover:underline"
                                                        style={{ color: 'var(--color-gold)' }}
                                                    >
                                                        {loc.phone}
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </RevealWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Treatments - Refined */}
            {related.length > 0 && (
                <section className="section section-cream">
                    <div className="container">
                        <RevealWrapper>
                            <div className="section-header">
                                <Caption variant="overline">You May Also Like</Caption>
                                <Heading variant="section">Related Treatments</Heading>
                                <div className="gold-line" />
                            </div>
                        </RevealWrapper>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {related.map((t, i) => (
                                <RevealWrapper key={t.id} direction="up" delay={i * 0.08}>
                                    <Link to={`/treatments/${t.slug}`} className="card group block h-full">
                                        <div className="overflow-hidden relative">
                                            <img src={t.image} alt={t.title} className="card-img" />
                                            <div
                                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{ background: 'rgba(248, 184, 78, 0.9)' }}
                                            >
                                                <span className="text-white text-xs tracking-[2px] uppercase flex items-center gap-2 font-semibold">
                                                    View Treatment <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="group-hover:text-gold transition-colors">{t.title}</h3>
                                            <Text color="muted" size="sm" className="mt-2">
                                                {t.shortDescription.slice(0, 80)}...
                                            </Text>
                                        </div>
                                    </Link>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <style>{`
                .text-gold {
                    color: var(--color-gold);
                }
                .group-hover\:text-gold:hover {
                    color: var(--color-gold);
                }
            `}</style>
        </>
    )
}
