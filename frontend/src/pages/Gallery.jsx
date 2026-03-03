import { useState } from 'react'
import { X } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
import { Heading, Text, Caption } from '../components/ui/Typography'
import { galleryImages } from '../data/siteData'

const categories = ['all', 'clinic', 'treatments', 'results']

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [lightbox, setLightbox] = useState(null)

    const filtered = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory)

    return (
        <>
            {/* Page Hero - Consistent */}
            <section className="page-hero">
                <div className="container">
                    <RevealWrapper>
                        <Caption variant="overline">Visual Stories</Caption>
                        <Heading variant="page">Gallery</Heading>
                        <Text size="lg" color="muted" className="max-w-2xl mt-5">
                            Explore our clinic spaces, treatment sessions, and transformative results through our photo gallery.
                        </Text>
                    </RevealWrapper>
                </div>
            </section>

            {/* Category Filter - Improved */}
            <section
                className="py-6 border-b"
                style={{ borderColor: 'var(--color-border)' }}
            >
                <div className="container">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="px-6 py-3 text-xs tracking-[2px] uppercase font-semibold rounded-full transition-all duration-300 capitalize"
                                style={{
                                    background: activeCategory === cat ? 'var(--color-gold)' : 'transparent',
                                    color: activeCategory === cat ? '#fff' : 'var(--color-text-muted)',
                                    border: `1.5px solid ${activeCategory === cat ? 'var(--color-gold)' : 'var(--color-border)'}`,
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Improved Masonry */}
            <section className="section">
                <div className="container">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filtered.map((img, i) => (
                            <RevealWrapper key={img.id} direction="up" delay={i * 0.05}>
                                <div
                                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                                    onClick={() => setLightbox(img)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full transition-transform duration-700 group-hover:scale-105"
                                        style={{
                                            height: i % 3 === 0 ? '380px' : i % 3 === 1 ? '300px' : '340px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
                                    >
                                        <Caption variant="caption-white" className="text-white">
                                            {img.caption}
                                        </Caption>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox - Refined */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.95)' }}
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                        onClick={() => setLightbox(null)}
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={lightbox.src}
                        alt={lightbox.caption}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <Caption
                        variant="caption-white"
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
                    >
                        {lightbox.caption}
                    </Caption>
                </div>
            )}
        </>
    )
}
