const fs = require('fs');
let code = fs.readFileSync('frontend/src/pages/Home.jsx', 'utf-8');

const regex = /\/\/ ===== REAL RESULTS SECTION =====[\s\S]*?(?=\/\/ ===== TREATMENTS AT A GLANCE - PREMIUM =====|\/\/ ===== TREATMENTS AT A GLANCE)/;

const newSection = `// ===== REAL RESULTS SECTION - PREMIUM =====
function RealResultsSection() {
    return (
        <section className="section bg-white py-24 md:py-32">
            <div className="container max-w-6xl">
                <RevealWrapper>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="inline-block text-[10px] tracking-[3px] uppercase font-bold mb-4 text-[#888]">
                            Real Skin, Real Results
                        </span>
                        <h2 
                            className="text-3xl md:text-5xl font-serif" 
                            style={{ color: 'var(--color-dark)' }}
                        >
                            <span className="italic text-gold">Transformations</span>
                        </h2>
                    </div>
                </RevealWrapper>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Before/After Slider */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <RevealWrapper direction="left" className="w-full max-w-[500px]">
                            <BeforeAfterSlider
                                beforeImage="https://skinlab.in/wp-content/uploads/2025/09/face-before.webp"
                                afterImage="https://skinlab.in/wp-content/uploads/2025/09/2-1.webp"
                            />
                        </RevealWrapper>
                    </div>

                    {/* Testimonial */}
                    <div className="w-full lg:w-1/2">
                        <RevealWrapper direction="right" delay={0.2} className="h-full">
                            <div className="bg-[#faf8f4] p-10 md:p-12 rounded-sm h-full flex flex-col justify-center border border-[#f0ede8]">
                                <Quote
                                    size={40}
                                    style={{ color: 'var(--color-gold)' }}
                                    className="mb-8 opacity-40 mx-auto"
                                />
                                <p className="text-lg md:text-xl text-center leading-relaxed italic mb-10 text-[#555] font-serif">
                                    "It was my first time at D'CosMedis and just based on the how precise and considerate the details of my consultation was and how the therapist has such good experience can be known by how she looked at my skin and gave me her feedback I didn't even need to explain much details and my treatment was done to perfection. I was literally glowing afterwards."
                                </p>
                                <div className="text-center">
                                    <p className="font-bold text-dark text-sm tracking-[2px] uppercase">
                                        Manal Mohammed
                                    </p>
                                </div>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Simple Before/After Slider Component
function BeforeAfterSlider({ beforeImage, afterImage }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();

        let clientX;
        if (event.touches && event.touches.length > 0) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        const offsetX = clientX - containerRect.left;
        const percent = Math.max(0, Math.min(100, (offsetX / containerRect.width) * 100));
        setSliderPosition(percent);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        handleMove(e);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        handleMove(e);
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (e) => {
        handleMove(e);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        handleMove(e);
    };

    const handleTouchEnd = () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-sm shadow-xl cursor-ew-resize max-w-full w-full select-none"
            style={{ aspectRatio: '1/1' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* After Image (Base) */}
            <img
                src={afterImage}
                alt="After treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-transform duration-[2s] hover:scale-[1.05]"
                draggable={false}
            />
            {/* Before Image (Cropped) */}
            <div className="absolute inset-0 pointer-events-none z-10 transition-transform duration-[2s] hover:scale-[1.05]">
                <img
                    src={beforeImage}
                    alt="Before treatment"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    style={{ clipPath: \`inset(0 \${100 - sliderPosition}% 0 0)\` }}
                    draggable={false}
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 flex items-center justify-center pointer-events-none z-20"
                style={{ left: \`\${sliderPosition}%\`, transform: 'translateX(-50%)' }}
            >
                <div className="w-0.5 md:w-[2px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
                <div className="absolute w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-[3px] border-gold">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 bg-black/60 text-white text-[10px] tracking-[2px] uppercase font-bold py-2 px-6 rounded-full pointer-events-none backdrop-blur-md z-30">
                Before
            </div>
            <div className="absolute bottom-6 right-6 bg-black/60 text-white text-[10px] tracking-[2px] uppercase font-bold py-2 px-6 rounded-full pointer-events-none backdrop-blur-md z-30">
                After
            </div>
        </div>
    );
}
`;

code = code.replace(regex, newSection);
fs.writeFileSync('frontend/src/pages/Home.jsx', code, 'utf-8');
console.log('Replaced successfully.');
