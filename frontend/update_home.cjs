const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const regex = /<HeroSection \/>[\s\S]*?<Suspense fallback=\{null\}>\s*<LazyFloatingCTA \/>\s*<\/Suspense>\s*<\/>\s*\)/m;

const replacement = `<HeroSection />
            <StatsBar />
            <Suspense fallback={<SectionFallback />}>
                <LazyConcernsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyExclusiveSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyTreatmentsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyTestimonialsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyContactSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyConnectWithUs />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyAwardsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyAboutPreview />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
                <LazyRealResultsSection />
            </Suspense>
            <Suspense fallback={null}>
                <LazyFloatingCTA />
            </Suspense>
        </>
    )`;

if (!regex.test(content)) {
    console.log('NO MATCH FOUND');
    process.exit(1);
}

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/Home.jsx', content);
console.log('SUCCESS');
