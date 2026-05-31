import { Link } from 'react-router-dom'
import { RevealWrapper } from '../../hooks/useAnimations'

const featuredTreatments = [
    {
        title: 'Scar Reduction Treatments',
        slug: 'scar-reduction-treatments',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Scar-Reduction-Treatments.png',
        alt: 'Scar Reduction Treatments'
    },
    {
        title: 'Phototherapy',
        slug: 'phototherapy',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/phototherapy.png',
        alt: 'Phototherapy'
    },
    {
        title: 'Laser Hair Reduction',
        slug: 'laser-hair-reduction',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Laser-Hair-Reduction.png',
        alt: 'Laser Hair Reduction'
    },
    {
        title: 'Carbon Peels',
        slug: 'carbon-peels',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Carbon-Peels.png',
        alt: 'Carbon Peels'
    },
    {
        title: 'Exosome Therapy',
        slug: 'exosome-therapy-for-skin',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Exosome-for-Skin.png',
        alt: 'Exosome for Skin'
    },
    {
        title: 'Dermal Fillers',
        slug: 'dermal-fillers',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Dermal-Fillers.png',
        alt: 'Dermal Fillers'
    },
    {
        title: 'Chemical Peels',
        slug: 'chemical-peels',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Chemical-Peels.png',
        alt: 'Chemical Peels'
    },
    {
        title: 'Acne Treatments',
        slug: 'acne-treatments',
        image: 'https://wizderm.in/wp-content/uploads/2025/03/Acne-Treatments.png',
        alt: 'Acne Treatments'
    }
]

export default function TreatmentsSection() {
    return (
        <section className="overflow-hidden" style={{ background: 'var(--color-bg-secondary)', padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealWrapper>
                    <div className="text-center mb-12 md:mb-16">
                        <span
                            className="inline-block tracking-[4px] uppercase font-bold mb-3 md:mb-4 opacity-90"
                            style={{ color: 'var(--color-wine)', fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}
                        >
                            Our Expertise
                        </span>
                        <h2
                            className="font-serif mb-2"
                            style={{
                                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                                fontWeight: 400,
                                color: 'var(--color-dark)',
                                lineHeight: 1.15
                            }}
                        >
                            Explore Our <span className="italic text-wine">Treatments</span>
                        </h2>
                        <div className="w-[60px] h-[2px] bg-wine/80 mx-auto mb-6 md:mb-8"></div>
                        <p
                            className="max-w-3xl mx-auto"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                                lineHeight: 1.7
                            }}
                        >
                            Discover a range of advanced treatments designed to address all your skin & hair concerns, backed by Expert Dermatologists, World Class Technology and Skilled Professionals.
                        </p>
                    </div>
                </RevealWrapper>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-12">
                    {featuredTreatments.map((treatment, i) => (
                        <RevealWrapper key={treatment.slug} direction="up" delay={i * 0.1}>
                            <Link to={`/treatments/${treatment.slug}`} className="flex flex-col items-center text-center group h-full cursor-pointer">
                                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full mb-6 p-2 bg-white shadow-sm border border-[#e8dfc3] transition-all duration-500 group-hover:shadow-[0_15px_35px_rgba(149,71,149,0.15)] group-hover:-translate-y-2 group-hover:border-wine/30">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src={treatment.image}
                                            alt={treatment.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <h5
                                    className="font-serif transition-colors duration-300 group-hover:text-wine px-2"
                                    style={{
                                        fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                                        fontWeight: 500,
                                        color: 'var(--color-dark)',
                                        lineHeight: 1.3,
                                        marginBottom: '1rem'
                                    }}
                                >
                                    {treatment.title}
                                </h5>
                                {/* <span 
                                    className="mt-auto inline-flex items-center justify-center border border-wine/30 text-wine group-hover:bg-wine group-hover:text-white transition-all duration-300 rounded-full px-6 py-2 text-[0.75rem] uppercase tracking-[1.5px] font-semibold"
                                >
                                    Know More
                                </span> */}
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}
