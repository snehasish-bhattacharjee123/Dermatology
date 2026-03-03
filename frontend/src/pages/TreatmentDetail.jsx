import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, MapPin, Phone, Calendar } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { treatments, locations } from '../data/siteData'

export default function TreatmentDetail() {
    const { slug } = useParams()
    const treatment = treatments.find((t) => t.slug === slug)

    if (!treatment) {
        return (
            <section className="section pt-40">
                <div className="container text-center">
                    <h2>Treatment Not Found</h2>
                    <p className="mt-4" style={{ color: 'var(--color-text-muted)' }}>
                        The treatment you're looking for doesn't exist.
                    </p>
                    <Link to="/treatments" className="btn btn-primary mt-6 inline-flex">
                        <ArrowLeft size={14} /> Back to Treatments
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
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '480px' }}>
                    {/* Left - Gold panel */}
                    <div
                        className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-14 lg:py-20"
                        style={{ background: '#f8b84e' }}
                    >
                        <RevealWrapper>
                            <p className="text-sm font-semibold mb-5" style={{ color: '#353535' }}>
                                <Link to="/" className="hover:underline">Home</Link>
                                {' '}&gt;{' '}
                                <Link to="/treatments" className="hover:underline">Treatments</Link>
                                {' '}&gt;{' '}
                                <span style={{ color: '#7a5500' }}>{treatment.title}</span>
                            </p>

                            <span
                                className="inline-block px-4 py-1 text-[10px] tracking-[2px] uppercase font-bold rounded-full mb-4"
                                style={{ background: '#353535', color: '#fff' }}
                            >
                                {treatment.category}
                            </span>

                            <h1
                                className="mb-5"
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 500,
                                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                                    color: '#353535',
                                    lineHeight: 1.15,
                                }}
                            >
                                {treatment.title}
                            </h1>

                            <p className="leading-relaxed mb-6" style={{ color: '#4a3800', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                                {treatment.shortDescription}
                            </p>

                            <div className="flex items-center gap-5 flex-wrap mb-7" style={{ color: '#353535', fontSize: '0.875rem' }}>
                                <span className="flex items-center gap-2 font-medium">
                                    <Clock size={15} /> {treatment.duration}
                                </span>
                                <span className="font-bold text-base">{treatment.price}</span>
                            </div>

                            <div className="flex items-center gap-3 flex-wrap">
                                <Link
                                    to="/book"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-[11px] tracking-[2px] uppercase font-bold rounded transition-all duration-300 hover:opacity-90"
                                    style={{ background: '#353535', color: '#fff' }}
                                >
                                    <Calendar size={13} /> BOOK NOW
                                </Link>
                                <a
                                    href="tel:+911123456789"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-[11px] tracking-[2px] uppercase font-bold border-2 rounded transition-all duration-300 hover:bg-[#353535] hover:text-white hover:border-[#353535]"
                                    style={{ borderColor: '#353535', color: '#353535' }}
                                >
                                    <Phone size={13} /> CALL US
                                </a>
                            </div>
                        </RevealWrapper>
                    </div>

                    {/* Right - Image */}
                    <div className="h-56 lg:h-auto overflow-hidden">
                        <img
                            src={treatment.image}
                            alt={treatment.title}
                            className="w-full h-full object-cover"
                            style={{ minHeight: '480px' }}
                        />
                    </div>
                </div>
            </section>

            {/* Description Content - Alternating sections like reference */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <RevealWrapper>
                                <div
                                    className="treatment-content"
                                    dangerouslySetInnerHTML={{ __html: treatment.description }}
                                />
                            </RevealWrapper>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <RevealWrapper delay={0.15}>
                                <div
                                    className="rounded-xl p-7 sticky top-24"
                                    style={{
                                        background: 'var(--color-bg-cream)',
                                        border: '1px solid var(--color-border)',
                                    }}
                                >
                                    <h3
                                        className="mb-5"
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontWeight: 500,
                                            fontSize: '1.3rem',
                                        }}
                                    >
                                        Book This Treatment
                                    </h3>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Clock size={15} style={{ color: '#d2880c' }} />
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--color-text-light)' }}>
                                                    Duration
                                                </p>
                                                <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{treatment.duration}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-base font-bold" style={{ color: '#d2880c' }}>₹</span>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--color-text-light)' }}>
                                                    Price
                                                </p>
                                                <p className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{treatment.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to="/book"
                                        className="w-full flex items-center justify-center gap-2 px-5 py-3 text-[11px] tracking-[2px] uppercase font-bold rounded transition-all duration-300 hover:opacity-90"
                                        style={{ background: '#f8b84e', color: '#353535' }}
                                    >
                                        <Calendar size={13} /> Book Appointment
                                    </Link>

                                    {/* Locations */}
                                    <div className="mt-7 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                                        <p className="text-[10px] uppercase tracking-[2px] mb-3 font-bold" style={{ color: '#d2880c' }}>
                                            Available At
                                        </p>
                                        {locations.slice(0, 3).map((loc) => (
                                            <div key={loc.id} className="flex items-start gap-2 mb-2.5">
                                                <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: '#d2880c' }} />
                                                <div>
                                                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{loc.name}</p>
                                                    <a href={`tel:${loc.phone}`} className="text-xs hover:underline" style={{ color: '#d2880c' }}>
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

            {/* Related Treatments */}
            {related.length > 0 && (
                <section className="section" style={{ background: 'var(--color-bg-cream)' }}>
                    <div className="container">
                        <RevealWrapper>
                            <div className="section-header">
                                <p className="text-sm tracking-[3px] uppercase mb-3 font-semibold" style={{ color: '#d2880c' }}>
                                    You May Also Like
                                </p>
                                <h2>Related Treatments</h2>
                                <div className="gold-line" />
                            </div>
                        </RevealWrapper>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {related.map((t, i) => (
                                <RevealWrapper key={t.id} direction="up" delay={i * 0.08}>
                                    <Link to={`/treatments/${t.slug}`} className="card group block h-full">
                                        <div className="overflow-hidden relative">
                                            <img src={t.image} alt={t.title} className="card-img" />
                                            <div
                                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{ background: 'rgba(248, 184, 78, 0.85)' }}
                                            >
                                                <span className="text-white text-xs tracking-[2px] uppercase flex items-center gap-2 font-semibold">
                                                    View Treatment <ArrowRight size={13} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="group-hover:text-[#d2880c] transition-colors">{t.title}</h3>
                                            <p className="mt-1.5">{t.shortDescription.slice(0, 80)}...</p>
                                        </div>
                                    </Link>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
