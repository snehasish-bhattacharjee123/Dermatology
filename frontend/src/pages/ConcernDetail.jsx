import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { concerns, treatments } from '../data/siteData'

export default function ConcernDetail() {
    const { slug } = useParams()
    const concern = concerns.find((c) => c.slug === slug)

    if (!concern) {
        return (
            <section className="section pt-40">
                <div className="container text-center">
                    <h2>Concern Not Found</h2>
                    <p className="mt-4" style={{ color: 'var(--color-text-muted)' }}>The concern you're looking for doesn't exist.</p>
                    <Link to="/concerns" className="btn btn-primary mt-8">View All Concerns</Link>
                </div>
            </section>
        )
    }

    const relatedTreatments = treatments.filter((t) => concern.treatments.includes(t.slug))

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-0 overflow-hidden">
                <div className="absolute inset-0 h-[50vh]">
                    <ParallaxImage src={concern.image} alt={concern.name} className="h-full" speed={-0.15} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)' }} />
                </div>

                <div className="container relative z-10 pt-20 pb-24">
                    <RevealWrapper>
                        <Link to="/concerns" className="inline-flex items-center gap-2 text-white/70 text-sm mb-6 hover:text-white transition-colors">
                            <ArrowLeft size={16} /> Back to Concerns
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl">{concern.icon}</span>
                            <h1 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                {concern.name}
                            </h1>
                        </div>
                        <p className="text-white/70 text-lg max-w-2xl">{concern.shortDescription}</p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <RevealWrapper>
                            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                                {concern.description}
                            </p>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* Recommended Treatments */}
            {relatedTreatments.length > 0 && (
                <section className="section section-cream">
                    <div className="container">
                        <RevealWrapper>
                            <div className="section-header">
                                <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Recommended For You</p>
                                <h2>Treatments for {concern.name}</h2>
                                <div className="gold-line" />
                            </div>
                        </RevealWrapper>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedTreatments.map((t, i) => (
                                <RevealWrapper key={t.id} direction="up" delay={i * 0.1}>
                                    <Link to={`/treatments/${t.slug}`} className="card group block">
                                        <div className="overflow-hidden">
                                            <img src={t.image} alt={t.title} className="card-img" />
                                        </div>
                                        <div className="card-body">
                                            <h3 className="group-hover:text-[var(--color-gold)] transition-colors">{t.title}</h3>
                                            <p className="mt-2 text-sm">{t.shortDescription.slice(0, 80)}...</p>
                                            <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>
                                                View Treatment <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20" style={{ background: 'var(--color-gold)' }}>
                <div className="container text-center">
                    <RevealWrapper>
                        <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            Ready to Treat {concern.name}?
                        </h2>
                        <p className="text-white/80 mb-8 max-w-lg mx-auto">
                            Book a consultation with our expert dermatologists for a personalized treatment plan.
                        </p>
                        <Link to="/book" className="btn btn-white">
                            Book Consultation <ArrowRight size={14} />
                        </Link>
                    </RevealWrapper>
                </div>
            </section>
        </>
    )
}
