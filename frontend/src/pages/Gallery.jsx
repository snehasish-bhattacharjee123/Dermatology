import { useState } from 'react'
import { X } from 'lucide-react'
import { RevealWrapper } from '../hooks/useAnimations'
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
            {/* Page Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: 'var(--color-bg-cream)' }}>
                <div className="container">
                    <RevealWrapper>
                        <p className="text-sm tracking-[3px] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>Visual Stories</p>
                        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Gallery</h1>
                        <p className="max-w-2xl text-lg mt-4" style={{ color: 'var(--color-text-muted)' }}>
                            Explore our clinic spaces, treatment sessions, and transformative results through our photo gallery.
                        </p>
                    </RevealWrapper>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div className="container">
                    <div className="flex items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="px-6 py-3 text-xs tracking-[2px] uppercase font-medium rounded-full transition-all duration-300 capitalize"
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

            {/* Gallery Grid */}
            <section className="section">
                <div className="container">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
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
                                        style={{ height: i % 3 === 0 ? '350px' : i % 3 === 1 ? '280px' : '320px', objectFit: 'cover' }}
                                    />
                                    <div
                                        className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}
                                    >
                                        <p className="text-white text-sm tracking-wide">{img.caption}</p>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.9)' }}
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setLightbox(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={lightbox.src}
                        alt={lightbox.caption}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-wide">
                        {lightbox.caption}
                    </p>
                </div>
            )}
        </>
    )
}
