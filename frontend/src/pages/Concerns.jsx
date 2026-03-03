import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { concerns } from '../data/siteData'

export default function Concerns() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container">
                    <RevealWrapper>
                        <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>What Bothers You?</p>
                        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Concerns</h1>
                        <p className="max-w-2xl text-lg mt-4" style={{ color: 'var(--color-text-muted)' }}>
                            Skin Treatment in Delhi — Advanced Dermatology & Aesthetic Care at AAYNA. We address every skin and hair concern with precision and care.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Concerns Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {concerns.map((concern, i) => (
                            <RevealWrapper key={concern.id} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.05}>
                                <Link
                                    to={`/concerns/${concern.slug}`}
                                    className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl transition-all duration-500 hover:shadow-xl"
                                    style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)' }}
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
                                    <div className="flex flex-col justify-between flex-1">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl">{concern.icon}</span>
                                                <h3 className="text-xl group-hover:text-[var(--color-gold)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {concern.name}
                                                </h3>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                                                {concern.shortDescription}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: 'var(--color-gold)' }}>
                                            Learn More <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
                                        </div>
                                    </div>
                                </Link>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
