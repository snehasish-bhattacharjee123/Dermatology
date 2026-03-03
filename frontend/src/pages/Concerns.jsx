import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { concerns } from '../data/siteData'

export default function Concerns() {
    return (
        <>
            {/* Page Hero - Consistent */}
            <section className="page-hero">
                <div className="container">
                    <RevealWrapper>
                        <Caption variant="overline">What Bothers You?</Caption>
                        <Heading variant="page">Concerns</Heading>
                        <Text size="lg" color="muted" className="max-w-2xl mt-5">
                            Skin Treatment in Delhi — Advanced Dermatology & Aesthetic Care at AAYNA. We address every skin and hair concern with precision and care.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Concerns Grid - Improved */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {concerns.map((concern, i) => (
                            <RevealWrapper key={concern.id} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.05}>
                                <Link
                                    to={`/concerns/${concern.slug}`}
                                    className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl transition-all duration-500 hover:shadow-xl bg-white border"
                                    style={{ borderColor: 'var(--color-border)' }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                                >
                                    {/* Image */}
                                    <div className="w-full sm:w-48 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0">
                                        <img
                                            src={concern.image}
                                            alt={concern.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between flex-1 py-1">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl">{concern.icon}</span>
                                                <h3
                                                    className="text-xl group-hover:text-gold transition-colors"
                                                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-dark)' }}
                                                >
                                                    {concern.name}
                                                </h3>
                                            </div>
                                            <Text color="muted" size="sm" className="leading-relaxed">
                                                {concern.shortDescription}
                                            </Text>
                                        </div>
                                        <div
                                            className="flex items-center gap-2 mt-4 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                                            style={{ color: 'var(--color-gold)' }}
                                        >
                                            Learn More <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </RevealWrapper>
                        ))}
                    </div>
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
