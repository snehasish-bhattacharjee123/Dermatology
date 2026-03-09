const fs = require('fs');
const file = 'd:/Doctors Clinic Dermatology/frontend/src/pages/Treatments.jsx';
let text = fs.readFileSync(file, 'utf-8');

const hero_old = `            {/* Hero - Consistent */}
            <section className="relative pt-0 pb-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '450px' }}>
                    {/* Left - Gold panel */}
                    <div
                        className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20"
                        style={{ background: 'var(--color-gold)' }}
                    >
                        <RevealWrapper>
                            <nav className="text-sm font-medium mb-6" style={{ color: 'var(--color-dark)' }}>
                                <Link to="/" className="hover:underline">Home</Link>
                                {' > '}
                                <Link to="/treatments" className="hover:underline">Treatments</Link>
                                {activeCategory !== 'all' && (
                                    <>
                                        {' > '}
                                        <span style={{ color: 'rgba(0,0,0,0.5)' }}>
                                            {treatmentCategories.find((c) => c.slug === activeCategory)?.name}
                                        </span>
                                    </>
                                )}
                            </nav>

                            <Heading
                                variant="section"
                                className="mb-4"
                                style={{ color: 'var(--color-dark)' }}
                            >
                                {activeCategory === 'all'
                                    ? 'Our Treatments'
                                    : activeCategory === 'aayna-exclusive'
                                        ? 'Exclusive Treatments'
                                        : activeCategory === 'new-launches'
                                            ? 'New Launches'
                                            : treatmentCategories.find((c) => c.slug === activeCategory)?.name + ' Treatments'}
                            </Heading>

                            <Text size="md" style={{ color: 'rgba(0,0,0,0.7)', maxWidth: '500px' }}>
                                {activeCategory === 'aayna-exclusive'
                                    ? 'We bring some of the best and latest treatments from across the world exclusively for our clients in India.'
                                    : activeCategory === 'new-launches'
                                        ? 'Experience cutting-edge treatments and breakthrough technologies now available at D\\'CosMedis.'
                                        : 'Discover our comprehensive range of skin, hair, facial, and anti-aging treatments powered by cutting-edge technology.'}
                            </Text>
                        </RevealWrapper>
                    </div>

                    {/* Right - Hero image */}
                    <div className="h-64 lg:h-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
                            alt="D'CosMedis Treatments"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>`;

const hero_new = `            {/* Page Hero - Premium */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden" style={{ marginTop: 'var(--header-total-height)' }}>
                <div className="absolute inset-0 bg-[#faf8f4] z-0"></div>
                <div className="container relative z-10 text-center">
                    <RevealWrapper>
                        <span className="inline-block px-4 py-1.5 text-[10px] tracking-[4px] uppercase font-bold rounded-full mb-6 text-[#888]">
                            {activeCategory === 'all' 
                                ? 'Discover Excellence' 
                                : activeCategory === 'aayna-exclusive' 
                                    ? 'Global Standards' 
                                    : 'Advanced Solutions'}
                        </span>
                        <Heading variant="hero" className="tracking-[4px] text-dark uppercase mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            {activeCategory === 'all'
                                ? <><span className="block sm:inline text-5xl md:text-7xl font-light">OUR</span> <span className="block sm:inline text-5xl md:text-7xl font-bold">TREATMENTS</span></>
                                : activeCategory === 'aayna-exclusive'
                                    ? <><span className="block sm:inline text-4xl md:text-6xl font-light">EXCLUSIVE</span> <span className="block sm:inline text-4xl md:text-6xl font-bold">TREATMENTS</span></>
                                    : activeCategory === 'new-launches'
                                        ? <><span className="block sm:inline text-4xl md:text-6xl font-light">NEW</span> <span className="block sm:inline text-4xl md:text-6xl font-bold">LAUNCHES</span></>
                                        : <><span className="block sm:inline text-3xl md:text-5xl lg:text-6xl font-light">{treatmentCategories.find((c) => c.slug === activeCategory)?.name.toUpperCase()}</span> <span className="block sm:inline text-3xl md:text-5xl lg:text-6xl font-bold">TREATMENTS</span></>}
                        </Heading>
                        <Text className="max-w-2xl mx-auto text-sm md:text-base tracking-[1px] font-light text-[#555] leading-relaxed">
                            {activeCategory === 'aayna-exclusive'
                                    ? 'We bring some of the best and latest aesthetic treatments from across the world exclusively for our clients in India.'
                                    : activeCategory === 'new-launches'
                                        ? 'Experience cutting-edge aesthetic treatments and breakthrough technologies now available at D\\'CosMedis.'
                                        : 'Discover our comprehensive range of skin, hair, facial, and aesthetic treatments powered by cutting-edge technology.'}
                        </Text>
                    </RevealWrapper>
                </div>
            </section>`;

const filter_old = `            {/* Category Filter - Improved */}
            <section
                className="py-5 border-b sticky top-[var(--header-height-scrolled)] z-30"
                style={{
                    borderColor: 'var(--color-border)',
                    background: 'rgba(255,255,255,0.98)',
                    backdropFilter: 'blur(12px)'
                }}
            >
                <div className="container">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {treatmentCategories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className="px-5 py-2.5 text-[11px] tracking-[1.5px] uppercase font-semibold whitespace-nowrap rounded-full transition-all duration-300"
                                style={{
                                    background: activeCategory === cat.slug ? 'var(--color-gold)' : 'transparent',
                                    color: activeCategory === cat.slug ? 'var(--color-dark)' : 'var(--color-text-muted)',
                                    border: \`1.5px solid \${activeCategory === cat.slug ? 'var(--color-gold)' : 'var(--color-border)'}\`,
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>`;

const filter_new = `            {/* Category Filter - Improved */}
            <section
                className="py-10 bg-white sticky z-[90] border-b"
                style={{ borderColor: 'var(--color-border)', top: 'var(--header-total-height)' }}
            >
                <div className="container">
                    <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {treatmentCategories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className="px-5 py-2.5 text-[10px] md:text-[11px] shrink-0 tracking-[1.5px] uppercase font-semibold whitespace-nowrap rounded-full transition-all duration-500"
                                style={{
                                    background: activeCategory === cat.slug ? 'var(--color-gold)' : 'transparent',
                                    color: activeCategory === cat.slug ? '#fff' : 'var(--color-text-muted)',
                                    border: \`1px solid \${activeCategory === cat.slug ? 'transparent' : 'var(--color-border)'}\`,
                                    boxShadow: activeCategory === cat.slug ? '0 10px 20px rgba(212, 175, 55, 0.2)' : 'none'
                                }}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>`;

if (text.includes(hero_old)) {
    console.log("Replacing hero");
    text = text.replace(hero_old, hero_new);
} else {
    console.log("Hero old not found!");
}

if (text.includes(filter_old)) {
    console.log("Replacing filter");
    text = text.replace(filter_old, filter_new);
} else {
    console.log("Filter old not found!");
}

fs.writeFileSync(file, text);
console.log("Done");
