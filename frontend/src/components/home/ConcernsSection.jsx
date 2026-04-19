import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { RevealWrapper } from '../../hooks/useAnimations'
import { Text } from '../ui/Typography'
import { concerns } from '../../data/siteData'

// ===== CONCERNS SECTION - PREMIUM =====
export default function ConcernsSection() {
    return (
        <section className="section bg-cream py-20 md:py-32">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block text-xs md:text-sm tracking-[4px] uppercase font-bold mb-4 opacity-90" style={{ color: 'var(--color-wine)' }}>
                            What Bothers You?
                        </span>
                        <h2
                            className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
                            style={{ color: 'var(--color-dark)' }}
                        >
                            Your <span className="italic text-wine">Concerns</span>
                        </h2>
                        <Text size="md" className="max-w-2xl mx-auto" style={{ color: 'var(--color-text)' }}>
                            We offer expert solutions for a wide range of skin, hair, and aesthetic concerns tailored to your unique needs.
                        </Text>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
                    {concerns.slice(0, 8).map((concern, i) => (
                        <RevealWrapper key={concern.id} direction="up" delay={i * 0.06} className="h-full">
                            <Link
                                to={`/concerns/${concern.slug}`}
                                className="group flex flex-col text-center p-8 md:p-10 bg-white hover-lift border border-[#f0ede8] h-full rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl hover:border-wine/20"
                            >
                                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 bg-[#f8f6f3] text-wine group-hover:bg-wine group-hover:text-white shadow-inner flex-shrink-0">
                                    <span className="text-2xl opacity-90">{concern.icon}</span>
                                </div>
                                <h4
                                    className="text-base md:text-lg font-serif transition-colors duration-300 mb-3 group-hover:text-wine"
                                    style={{ color: 'var(--color-dark)', fontWeight: 600 }}
                                >
                                    {concern.name}
                                </h4>
                                <p className="text-sm leading-relaxed hidden md:block font-light flex-1" style={{ color: 'var(--color-text-muted)' }}>
                                    {concern.shortDescription.slice(0, 65)}...
                                </p>
                                <span className="inline-flex items-center justify-center text-[10px] tracking-[2px] uppercase font-bold text-wine opacity-90 group-hover:opacity-100 transition-all duration-300 mt-6 pt-4 border-t border-[#f0ede8] w-full">
                                    Learn More <ArrowRight size={13} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>

                <div className="text-center mt-16 md:mt-24">
                    <RevealWrapper>
                        <Link
                            to="/concerns"
                            className="inline-flex items-center justify-center gap-2 border border-wine px-12 py-5 text-xs tracking-[3px] uppercase font-bold text-wine hover:bg-wine hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-wine/20"
                        >
                            View All Concerns <ArrowRight size={14} />
                        </Link>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    )
}
