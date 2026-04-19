import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Text } from '../ui/Typography'
import { treatments } from '../../data/siteData'

// ===== TREATMENTS SECTION - PREMIUM CARDS =====
export default function TreatmentsSection() {
    return (
        <section className="section bg-cream py-20 md:py-32 border-t border-[#f0ede8]">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block text-xs md:text-sm tracking-[4px] uppercase font-bold mb-4 opacity-90" style={{ color: 'var(--color-wine)' }}>
                            Our Expertise
                        </span>
                        <h2
                            className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
                            style={{ color: 'var(--color-dark)' }}
                        >
                            Premium <span className="italic text-wine">Treatments</span>
                        </h2>
                        <Text size="md" className="max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
                            Discover our comprehensive range of advanced dermatology and aesthetic treatments.
                        </Text>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {treatments.slice(0, 6).map((treatment, i) => (
                        <RevealWrapper key={treatment.id} direction="up" delay={i * 0.08}>
                            <Link to={`/treatments/${treatment.slug}`} className="treatment-card card group block hover-lift h-full border border-[#f0ede8] bg-white rounded-2xl shadow-sm transition-all duration-500 overflow-hidden hover:shadow-2xl hover:border-wine/30">
                                <div className="overflow-hidden relative h-60">
                                    <img
                                        src={treatment.image}
                                        alt={treatment.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        srcSet={`${treatment.image.replace(/w=\d+/, 'w=400')} 400w, ${treatment.image.replace(/w=\d+/, 'w=600')} 600w, ${treatment.image} 800w`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div
                                        className="absolute top-4 left-4 px-3.5 py-1.5 text-[9px] tracking-[2px] uppercase text-white rounded-full font-bold shadow-md backdrop-blur-md"
                                        style={{ background: 'var(--color-wine)' }}
                                    >
                                        {treatment.category}
                                    </div>
                                </div>
                                <div className="card-body p-7 flex flex-col h-[calc(100%-15rem)] flex-1">
                                    <h3 className="transition-colors duration-300 mb-2.5 font-serif group-hover:text-wine" style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-dark)', lineHeight: 1.3 }}>
                                        {treatment.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-[1.8] flex-1 text-[#6b4f5a] font-light">
                                        {treatment.shortDescription.slice(0, 110)}...
                                    </p>
                                    <div
                                        className="flex items-center justify-between mt-6 pt-5 border-t border-[#f0ede8]"
                                    >
                                        <span className="flex items-center gap-1.5 font-bold tracking-[2px] uppercase text-wine transition-colors text-[10px]">
                                            View Treatment <ArrowRight size={14} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <span
                                            className="text-[10px] tracking-[1px] uppercase font-bold text-[#8a7f76] bg-[#f8f6f3] px-2.5 py-1 rounded-sm"
                                        >
                                            {treatment.duration}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper className="text-center mt-16 md:mt-24">
                    <Link to="/treatments" className="inline-flex items-center justify-center border border-wine px-8 py-4 text-xs tracking-[2px] uppercase font-semibold text-white bg-wine hover:bg-wine-dark transition-all duration-300">
                        View All Treatments
                    </Link>
                </RevealWrapper>
            </div>
        </section>
    )
}
