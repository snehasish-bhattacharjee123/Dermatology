import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { RevealWrapper, ParallaxImage } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { concerns, treatments } from '../data/siteData'

export default function ConcernDetail() {
    const { slug } = useParams()
    const concern = concerns.find((c) => c.slug === slug)

    if (!concern) {
        return (
            <section className="section pt-40">
                <div className="container text-center">
                    <Heading variant="section">Concern Not Found</Heading>
                    <Text color="muted" className="mt-4">The concern you're looking for doesn't exist.</Text>
                    <Link to="/concerns" className="btn btn-primary mt-8">View All Concerns</Link>
                </div>
            </section>
        )
    }

    const relatedTreatments = treatments.filter((t) => concern.treatments.includes(t.slug))

    return (
        <>
            {/* Hero - Refined */}
            <section className="relative pt-0 pb-0 overflow-hidden">
                <div className="relative h-[50vh] min-h-[400px]">
                    <ParallaxImage
                        src={concern.image}
                        alt={concern.name}
                        className="h-full"
                        speed={-0.15}
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)' }}
                    />
                </div>

                <div className="container relative z-10 -mt-32 pb-16">
                    <RevealWrapper>
                        <Link
                            to="/concerns"
                            className="inline-flex items-center gap-2 text-white/80 text-sm mb-6 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} /> Back to Concerns
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl">{concern.icon}</span>
                            <Heading
                                variant="page-white"
                                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                            >
                                {concern.name}
                            </Heading>
                        </div>
                        <Text size="lg" color="white-muted" className="max-w-2xl">
                            {concern.shortDescription}
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Content - Refined */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <RevealWrapper>
                            <Text size="lg" color="muted" style={{ lineHeight: 1.9 }}>
                                {concern.description}
                            </Text>
                        </RevealWrapper>
                    </div>
                </div>
            </section>

            {/* Recommended Treatments - Refined */}
            {relatedTreatments.length > 0 && (
                <section className="section section-cream">
                    <div className="container">
                        <RevealWrapper>
                            <div className="section-header">
                                <Caption variant="overline">Recommended For You</Caption>
                                <Heading variant="section">Treatments for {concern.name}</Heading>
                                <div className="gold-line" />
                            </div>
                        </RevealWrapper>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedTreatments.map((t, i) => (
                                <RevealWrapper key={t.id} direction="up" delay={i * 0.1}>
                                    <Link to={`/treatments/${t.slug}`} className="card group block h-full">
                                        <div className="overflow-hidden">
                                            <img src={t.image} alt={t.title} className="card-img" />
                                        </div>
                                        <div className="card-body">
                                            <h3 className="group-hover:text-gold transition-colors">{t.title}</h3>
                                            <Text color="muted" size="sm" className="mt-2">
                                                {t.shortDescription.slice(0, 80)}...
                                            </Text>
                                            <div
                                                className="flex items-center gap-2 mt-4 text-sm font-semibold"
                                                style={{ color: 'var(--color-gold)' }}
                                            >
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

            {/* CTA - Refined */}
            <section className="py-20 lg:py-24" style={{ background: 'var(--color-gold)' }}>
                <div className="container text-center px-6">
                    <RevealWrapper>
                        <Heading variant="section-white" className="mb-4">
                            Ready to Treat {concern.name}?
                        </Heading>
                        <Text size="md" color="white" className="text-white/80 mb-8 max-w-lg mx-auto">
                            Book a consultation with our expert dermatologists for a personalized treatment plan.
                        </Text>
                        <Link to="/book" className="btn btn-dark">
                            Book Consultation <ArrowRight size={16} />
                        </Link>
                    </RevealWrapper>
                </div>
            </section>

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
