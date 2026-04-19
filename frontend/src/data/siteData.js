// ===== SITE DATA =====
// All content data for D'CosMedis Clinic

export { heroSlides } from './homeData';

export const concerns = [
    {
        id: 1,
        name: 'Acne',
        slug: 'acne',
        icon: '🔴',
        shortDescription: 'Advanced treatments for acne breakouts, scarring, and post-acne pigmentation.',
        description: 'Acne is a common skin condition caused by clogged pores—due to oil, dead skin, or bacteria. It can appear as pimples, blackheads, or deeper, inflamed bumps. Left untreated, acne may lead to pigmentation and scarring. At D\'CosMedis, we\'ve successfully treated acne and acne scarring for over 30 years. We help identify your triggers and treat them at the source using a personalised combination of medical-grade peels, advanced lasers, and targeted skincare.',
        image: 'https://images.unsplash.com/photo-1560564560-a55c22b2e9a5?w=800&q=80',
        treatments: ['intense-acne-peel', 'sublative-rejuvenation', 'morpheus8', 'chemical-peels'],
    },
    {
        id: 2,
        name: 'Pigmentation',
        slug: 'pigmentation',
        icon: '🟤',
        shortDescription: 'Reduce dark spots, melasma, and uneven skin tone with advanced laser and peel treatments.',
        description: 'Pigmentation is uneven skin tone caused by excess melanin production. It appears as dark spots, age spots, or tanning, and can be triggered by sun exposure, hormonal shifts, or post-inflammatory changes. At D\'CosMedis, we combine deep chemical peels with advanced QSWITCH laser technology and targeted homecare to deliver visible, lasting results.',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
        treatments: ['qswitch-laser', 'advanced-skin-brightening', 'chemical-peels'],
    },
    {
        id: 3,
        name: 'Anti-Aging',
        slug: 'anti-aging',
        icon: '✨',
        shortDescription: 'Turn back time with Botox, dermal fillers, thread lifts & regenerative therapies.',
        description: 'The ageing process begins in your mid-20s. Early signs include fine lines, volume loss, and reduced elasticity. Sun exposure, stress, and lifestyle choices can accelerate these changes. At D\'CosMedis, we offer over 30 years of expertise with a personalised blend of Botox®, Dermal Fillers, Exosome Therapy, GFC (Advanced PRP), Thread Lifts, and Collagen-Boosting Therapies for natural-looking rejuvenation.',
        image: 'https://images.unsplash.com/photo-1588776814546-ec7e0bf1f1b7?w=800&q=80',
        treatments: ['botox', 'dermal-fillers', 'thread-lifts', 'exosome-therapy', 'gfc-therapy'],
    },
    {
        id: 4,
        name: 'Hair Loss',
        slug: 'hair-loss',
        icon: '💇',
        shortDescription: 'Regrow and restore with Dermaneedling, Exosomes, GFC & hair transplant solutions.',
        description: 'Hair thinning, breakage, and loss can result from stress, hormonal changes, genetics, or nutritional deficiencies. Early intervention is key. D\'CosMedis offers advanced, clinically proven solutions including Dermaneedling, Exosomes Therapy, GFC (Advanced PRP) Therapy, and Hair Transplant. Most clients notice visible improvement after a few sessions, with full results over several months.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        treatments: ['dermaneedling', 'exosome-therapy', 'gfc-therapy', 'hair-transplant'],
    },
    {
        id: 5,
        name: 'Instant Glow & Hydration',
        slug: 'instant-glow',
        icon: '🌟',
        shortDescription: 'Restore radiance with signature medifacials, hitech facials, and medical-grade treatments.',
        description: 'Environmental factors, stress, and aging can rob your skin of its natural radiance. Our glow-boosting treatments include Signature Medifacials, Hitech Facials (Neocollagen, Ultrasonic HIFU, LaserBrite, Carbon Glow), and Medical Grade Facials designed to deliver instant luminosity and deep hydration.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        treatments: ['signature-medifacials', 'neocollagen-facial', 'carbon-glow', 'oxyblast'],
    },
    {
        id: 6,
        name: 'Lifting & Contouring',
        slug: 'lifting-contouring',
        icon: '🔷',
        shortDescription: 'Non-surgical skin lifting and body sculpting with FDA-approved technologies.',
        description: 'Skin can lose its natural firmness and definition with age or weight changes—leading to sagging. D\'CosMedis was among the first in India to introduce Ultherapy, Thermage, CoolSculpting, and EMSCULPT. Our non-surgical options restore structure and definition without surgery using only FDA-approved technologies.',
        image: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?w=800&q=80',
        treatments: ['ultherapy', 'thermage', 'emsculpt', 'coolsculpting', 'sublime-dermalift'],
    },
    {
        id: 7,
        name: 'IV Drip Therapy',
        slug: 'iv-drip-therapy',
        icon: '💉',
        shortDescription: 'Doctor-supervised IV infusions for immunity, energy, hair health and skin glow.',
        description: 'IV drips deliver essential vitamins, antioxidants, and nutrients directly into the bloodstream for faster absorption. Popular for reducing fatigue, boosting immunity, and enhancing skin radiance. Our medically supervised drips include Immunity Boost, Energy Boost, Hair Restore, Metaboost, and Radiant Antioxidant infusions.',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
        treatments: ['immunity-boost-drip', 'energy-boost-drip', 'hair-restore-drip', 'radiant-antioxidant-drip'],
    },
    {
        id: 8,
        name: 'Laser Hair Reduction',
        slug: 'laser-hair-reduction',
        icon: '⚡',
        shortDescription: 'USFDA-approved laser hair reduction safe for all skin tones, including brown skin.',
        description: 'Laser hair reduction is a safe, long-term solution for unwanted hair. Works by targeting hair follicles with light energy, reducing regrowth over 6-8 sessions. Smoother skin with fewer ingrown hairs. Our protocols are specifically developed for brown skin with advanced cooling systems for virtually painless treatment.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        treatments: ['laser-hair-removal'],
    },
]

export const treatments = [
    // ===== ACNE TREATMENTS =====
    {
        id: 1,
        title: 'Intense Acne Peel',
        slug: 'intense-acne-peel',
        category: 'Acne',
        categorySlug: 'acne',
        shortDescription: 'A 4-step corrective action peel designed to target acne at every stage — from early breakouts to stubborn flare-ups. Deep pore cleansing, sebum regulation, bacteria elimination, and texture refinement.',
        description: `<p>At D'CosMedis, our Intense Acne Peel is designed to target acne at every stage — from early breakouts (Grade 0) to more stubborn flare-ups (Grade 3). This advanced, doctor-led treatment works through a four-step corrective action.</p>
    <h3>The 4-Step Process</h3>
    <ul>
      <li><strong>Step 1:</strong> Deep pore cleansing to clear blockages and prevent new eruptions</li>
      <li><strong>Step 2:</strong> Regulation of excess sebum production</li>
      <li><strong>Step 3:</strong> Elimination of acne-causing bacteria and surface impurities</li>
      <li><strong>Step 4:</strong> Refinement of skin texture and reduction of post-acne marks or discolouration</li>
    </ul>
    <h3>Ideal For</h3>
    <ul>
      <li>Active acne breakouts (Grade 0 to Grade 3)</li>
      <li>Clogged pores and blackheads</li>
      <li>Post-acne pigmentation</li>
      <li>Oily, congested skin</li>
    </ul>`,
        duration: '30–45 minutes',
        price: '₹2,500 onwards',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        gallery: [],
    },
    {
        id: 2,
        title: 'Sublative Rejuvenation (eMatrix®)',
        slug: 'ematrix',
        category: 'Acne',
        categorySlug: 'acne',
        shortDescription: 'Fractional radio-frequency (RF) energy skin resurfacing — safe for a wider range of skin tones. Targets acne scars, refines texture, and smooths fine lines.',
        description: `<p>A new generation of skin resurfacing, Sublative Rejuvenation uses fractional radio-frequency (RF) energy to gently heat the deeper layers of the skin while keeping the surface intact.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Safe and effective for a wider range of skin tones</li>
      <li>Reduces acne scars and post-acne marks</li>
      <li>Refines skin texture and tone</li>
      <li>Smooths fine lines and wrinkles</li>
      <li>Stimulates collagen production</li>
    </ul>
    <h3>Recovery & Results</h3>
    <p>Minimal downtime. Noticeable improvement after 2-3 sessions with optimal results after a full course of treatment.</p>`,
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
        gallery: [],
    },
    {
        id: 3,
        title: 'Morpheus8',
        slug: 'morpheus8',
        category: 'Acne',
        categorySlug: 'acne',
        shortDescription: 'Fractional RF microneedling combining microneedling with radiofrequency energy. Reduces active acne, scarring, minimises pores, and smooths fine lines.',
        description: `<p>Morpheus8 combines fractional microneedling with radiofrequency energy to deliver remarkable skin transformation at a deeper level.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Reduces active acne and scarring</li>
      <li>Minimises enlarged pores</li>
      <li>Improves skin laxity</li>
      <li>Smooths fine lines</li>
      <li>Evens skin texture and tone</li>
      <li>Stimulates collagen production at deeper layers</li>
    </ul>
    <h3>Ideal For</h3>
    <ul>
      <li>Stubborn acne scars</li>
      <li>Enlarged pores</li>
      <li>Skin tightening</li>
      <li>Fine lines and wrinkles</li>
    </ul>`,
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=800&q=80',
        gallery: [],
    },

    // ===== ANTI-AGING TREATMENTS =====
    {
        id: 4,
        title: 'Botox® Treatment',
        slug: 'botox',
        category: 'Anti-Aging',
        categorySlug: 'anti-aging',
        shortDescription: 'Pioneer Botox® treatment in India since 2000. Softens expression lines, enhances lips, contours jawline, treats hyperhidrosis and chronic migraines.',
        description: `<p>D'CosMedis pioneered Botox® in India in 2000 with thousands of successful treatments. This purified protein injection is one of the most trusted anti-aging solutions worldwide.</p>
    <h3>Treatment Areas</h3>
    <ul>
      <li>Softens expression lines and wrinkles</li>
      <li>Lip enhancement for fuller, natural look</li>
      <li>Jawline contouring and slimming</li>
      <li>Gummy smile correction</li>
      <li>Neck band reduction</li>
      <li>Nose and chin shape enhancement</li>
      <li>Hyperhidrosis (excessive sweating)</li>
      <li>Chronic migraine relief</li>
    </ul>
    <h3>Why D'CosMedis</h3>
    <p>We were pioneers in bringing Botox to India. Our approach ensures natural-looking results — your goal is to look refreshed and rejuvenated, never "frozen."</p>`,
        duration: '15–30 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1588776814546-ec7e0bf1f1b7?w=800&q=80',
        gallery: [],
    },
    {
        id: 5,
        title: 'Dermal Fillers',
        slug: 'dermal-fillers',
        category: 'Anti-Aging',
        categorySlug: 'anti-aging',
        shortDescription: 'USFDA-approved hyaluronic acid fillers to plump lips, restore facial volume, smooth wrinkles, and define jawline and contours.',
        description: `<p>USFDA-approved hyaluronic acid (HA) fillers at D'CosMedis provide natural-looking volume restoration and facial enhancement.</p>
    <h3>Treatment Areas</h3>
    <ul>
      <li><strong>Lips:</strong> Plump & define lips for a natural, hydrated look</li>
      <li><strong>Face:</strong> Restore facial volume — liquid facelift</li>
      <li><strong>Wrinkles:</strong> Smooth folds, lines & wrinkles</li>
      <li><strong>Nose:</strong> Non-surgical nose reshaping</li>
      <li><strong>Chin:</strong> Chin augmentation and definition</li>
      <li><strong>Jawline:</strong> Jawline contouring and definition</li>
      <li><strong>Asymmetry:</strong> Correct facial asymmetry</li>
    </ul>`,
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
        gallery: [],
    },
    {
        id: 6,
        title: 'Thread Lift',
        slug: 'threadlift',
        category: 'Anti-Aging',
        categorySlug: 'anti-aging',
        shortDescription: 'PDO thread lift for instant skin lifting on face and neck. Stimulates natural collagen production with minimal downtime.',
        description: `<p>PDO (Polydioxanone) Thread Lift at D'CosMedis provides an instant lift for sagging skin on the face and neck while stimulating long-term collagen production.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Instantly lifts sagging skin on face and neck</li>
      <li>Restores youthful definition</li>
      <li>Stimulates natural collagen production</li>
      <li>Minimal downtime — performed under local anaesthesia</li>
    </ul>
    <h3>Ideal For</h3>
    <ul>
      <li>Forehead wrinkles and drooping brows</li>
      <li>Sagging mid and lower face</li>
      <li>Jowls and nasolabial folds</li>
      <li>Marionette lines</li>
      <li>Jawline definition</li>
    </ul>`,
        duration: '45–90 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80',
        gallery: [],
    },

    // ===== HAIR TREATMENTS =====
    {
        id: 7,
        title: 'Exosomes Therapy',
        slug: 'exosome-therapy',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'Stem cell-derived exosomes that stimulate dormant hair follicles, improve scalp health, and promote thicker, healthier growth. Visible results in 4-6 weeks.',
        description: `<p>Exosomes are tiny, powerful particles derived from stem cells carrying growth factors, peptides, and proteins. At D'CosMedis, we use Exosomes Therapy for both hair restoration and skin rejuvenation.</p>
    <h3>For Hair</h3>
    <ul>
      <li>Stimulates dormant hair follicles</li>
      <li>Improves scalp health</li>
      <li>Promotes thicker, healthier growth</li>
      <li>Visible results in 4-6 weeks</li>
    </ul>
    <h3>For Skin</h3>
    <ul>
      <li>Boosts collagen production</li>
      <li>Reduces inflammation</li>
      <li>Accelerates healing after laser, microneedling, or peels</li>
      <li>Improves skin tone, texture, firmness, and elasticity</li>
    </ul>
    <p>Delivered via micro-injections or microneedling. Safe for all skin types year-round.</p>`,
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&q=80',
        gallery: [],
    },
    {
        id: 8,
        title: 'GFC Therapy (Advanced PRP)',
        slug: 'gfc',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'Growth Factor Concentrate — superior to traditional PRP. Blood collection, centrifugation, and precision microinjections for hair regrowth and skin rejuvenation.',
        description: `<p>GFC (Growth Factor Concentrate) Therapy at D'CosMedis is an advanced form of PRP treatment that delivers superior results for both hair restoration and skin rejuvenation.</p>
    <h3>The Process</h3>
    <ul>
      <li><strong>Step 1:</strong> Blood collection</li>
      <li><strong>Step 2:</strong> Centrifugation using advanced techniques for maximum growth factor concentration</li>
      <li><strong>Step 3:</strong> Precision microinjections into the treatment area</li>
    </ul>
    <h3>Benefits</h3>
    <ul>
      <li>Superior to traditional PRP</li>
      <li>Smooths fine lines & wrinkles</li>
      <li>Boosts collagen production</li>
      <li>Improves tone, texture, and elasticity</li>
      <li>Restores radiant, youthful glow</li>
      <li>Strengthens hair follicles and reduces hair fall</li>
    </ul>`,
        duration: '45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
        gallery: [],
    },
    {
        id: 9,
        title: 'Dermaneedling',
        slug: 'dermaneedling',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'Collagen-boosting treatment using fine, medical-grade needles. Reduces scars, minimises pores, improves pigmentation, and enhances serum absorption.',
        description: `<p>Dermaneedling is a collagen-boosting treatment using fine, medical-grade needles that create micro-channels in the skin to stimulate natural healing and regeneration.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Reduces acne scars & mark visibility</li>
      <li>Minimises enlarged pores</li>
      <li>Boosts collagen & elastin production</li>
      <li>Smoothens fine lines & wrinkles</li>
      <li>Improves pigmentation & uneven tone</li>
      <li>Enhances absorption of serums and topical treatments</li>
    </ul>
    <h3>Recovery</h3>
    <p>Minimal downtime. Slight redness may occur for 24-48 hours. Results improve progressively over several sessions.</p>`,
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
    },

    // ===== LIFTING & CONTOURING =====
    {
        id: 10,
        title: 'Ultherapy®',
        slug: 'ultherapy',
        category: 'Lifting & Contouring',
        categorySlug: 'lifting-contouring',
        shortDescription: 'The only FDA-cleared, non-invasive skin lifting treatment using focused ultrasound. Lifts neck, chin, and brow with real-time imaging precision.',
        description: `<p>Ultherapy® is the only FDA-cleared, non-invasive skin lifting treatment. D'CosMedis was among the first clinics in India to offer this revolutionary technology.</p>
    <h3>How It Works</h3>
    <p>Focused ultrasound technology stimulates collagen production deep within the skin while real-time ultrasound imaging ensures precision — treating exactly the right areas at the optimal depth.</p>
    <h3>Treatment Areas</h3>
    <ul>
      <li>Neck lifting and tightening</li>
      <li>Under-chin definition</li>
      <li>Brow lifting</li>
      <li>Smooths fine lines on décolletage</li>
    </ul>
    <h3>Results</h3>
    <p>500,000+ successful treatments worldwide. Results develop over 2-3 months as collagen rebuilds, lasting up to 1-2 years.</p>`,
        duration: '60–90 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?w=800&q=80',
        gallery: [],
    },
    {
        id: 11,
        title: 'Thermage®',
        slug: 'thermage',
        category: 'Lifting & Contouring',
        categorySlug: 'lifting-contouring',
        shortDescription: 'USFDA-approved, non-surgical RF skin tightening. Single session treatment with deep heating that stimulates collagen remodeling.',
        description: `<p>Thermage® at D'CosMedis uses USFDA-approved radio-frequency (RF) technology for non-surgical skin tightening.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Single session treatment</li>
      <li>Deep heating stimulates collagen remodeling</li>
      <li>No downtime required</li>
      <li>Works on face, neck, and body</li>
      <li>Skin continues to tighten over 2-6 months post-treatment</li>
    </ul>`,
        duration: '45–90 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80',
        gallery: [],
    },
    {
        id: 12,
        title: 'EMSCULPT®',
        slug: 'emsculpt',
        category: 'Lifting & Contouring',
        categorySlug: 'lifting-contouring',
        shortDescription: 'World\'s only non-invasive body contouring that builds muscle AND eliminates fat. 20,000 ab crunches in 30 minutes using HIFEM technology.',
        description: `<p>EMSCULPT® is the world's only non-invasive body contouring procedure that simultaneously builds muscle AND eliminates fat. D'CosMedis offers this breakthrough treatment.</p>
    <h3>How It Works</h3>
    <p>HIFEM (High-Intensity Focused Electromagnetic) technology induces powerful muscle contractions — equivalent to 20,000 ab crunches in just 30 minutes.</p>
    <h3>Results</h3>
    <ul>
      <li>Increases muscle mass by up to 16%</li>
      <li>Reduces fat by approximately 19%</li>
    </ul>
    <h3>Treatment Areas</h3>
    <ul>
      <li>Abdomen</li>
      <li>Buttocks</li>
      <li>Arms</li>
      <li>Lower legs</li>
    </ul>`,
        duration: '30 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
        gallery: [],
    },

    // ===== SKIN TREATMENTS =====
    {
        id: 13,
        title: 'Chemical Peels',
        slug: 'chemical-peels',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'Medical-grade exfoliation to accelerate cell turnover. Reduce fine lines, sun damage, age spots, acne, and pigmentation. Only the highest quality peels.',
        description: `<p>D'CosMedis only uses the highest quality, medical-grade peels to speed up skin cell turnover and reveal fresh, glowing skin underneath.</p>
    <h3>Types Available</h3>
    <ul>
      <li><strong>Glycolic Peel:</strong> Mild exfoliation for brightening and glow</li>
      <li><strong>Salicylic Peel:</strong> Deep pore cleansing for acne-prone skin</li>
      <li><strong>TCA Peel:</strong> Medium-depth for pigmentation and fine lines</li>
      <li><strong>Lactic Peel:</strong> Gentle hydrating peel for sensitive skin</li>
      <li><strong>VitaGlow™ Peel:</strong> Multivitamin peeling with Retinol, Vitamin C and B3 for hyperpigmentation</li>
    </ul>
    <h3>Benefits</h3>
    <ul>
      <li>Improves fine lines and sun-damaged skin</li>
      <li>Lightens age spots and uneven pigmentation</li>
      <li>Clears acne and clogged pores</li>
      <li>Reduces shallow acne scars and freckling</li>
    </ul>`,
        duration: '30–45 minutes',
        price: '₹2,500 onwards',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
    },
    {
        id: 14,
        title: 'QSWITCH Laser',
        slug: 'qswitch-laser',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'Ultra-short energy pulses to break down excess melanin. Lightens freckles, age spots, sun spots, melasma and evens overall skin tone.',
        description: `<p>QSWITCH Laser at D'CosMedis delivers ultra-short pulses of energy to precisely break down excess melanin into fine particles that are naturally eliminated by the body.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Lightens freckles, age spots, and sun spots</li>
      <li>Effective treatment for melasma</li>
      <li>Evens overall skin tone</li>
      <li>Improves clarity and radiance</li>
      <li>Minimal downtime</li>
    </ul>
    <h3>Ideal For</h3>
    <ul>
      <li>Stubborn pigmentation</li>
      <li>Uneven skin tone</li>
      <li>Sun-damaged skin</li>
      <li>Melasma and hyperpigmentation</li>
    </ul>`,
        duration: '20–30 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        gallery: [],
    },
    {
        id: 15,
        title: 'Carbon Glow Facial',
        slug: 'carbon-glow',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Carbon Laser Facial — medical-grade carbon absorbs excess oil and impurities. Quick 20-25 minute procedure, painless, no downtime.',
        description: `<p>The Carbon Glow Facial (also known as Carbon Laser Peel) at D'CosMedis is a cutting-edge treatment that deep cleanses and revitalises your skin.</p>
    <h3>How It Works</h3>
    <p>Medical-grade carbon is applied to the skin, where it absorbs excess oil, dirt, and dead skin cells. A laser then breaks down the carbon along with all the impurities.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Deep cleansing and pore unclogging</li>
      <li>Stimulates collagen production</li>
      <li>Reduces excess oil and shine</li>
      <li>Quick 20-25 minute procedure</li>
      <li>Completely painless</li>
      <li>No downtime — return to activities immediately</li>
    </ul>`,
        duration: '20–25 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
        gallery: [],
    },

    // ===== LASER =====
    {
        id: 16,
        title: 'Laser Hair Reduction',
        slug: 'laser-hair-reduction',
        category: 'Laser',
        categorySlug: 'laser',
        shortDescription: 'USFDA-approved laser hair reduction safe for all skin tones. Dr. Dolly Gupta pioneered protocols specifically for brown skin.',
        description: `<p>D'CosMedis offers USFDA-approved laser hair reduction that is safe and effective for all skin tones, including brown skin.</p>
    <h3>Our Advantage</h3>
    <p>Dr. Dolly Gupta pioneered laser hair reduction protocols specifically developed for Indian/brown skin — ensuring safety and efficacy for our patients.</p>
    <h3>Treatment Areas</h3>
    <ul>
      <li>Full face and neck</li>
      <li>Underarms</li>
      <li>Bikini line</li>
      <li>Full body</li>
      <li>Arms and legs</li>
    </ul>
    <h3>What to Expect</h3>
    <ul>
      <li>6-8 sessions for optimal results</li>
      <li>Virtually painless with advanced cooling systems</li>
      <li>Significant reduction in hair growth</li>
      <li>Smoother skin with fewer ingrown hairs</li>
    </ul>`,
        duration: '30–90 minutes',
        price: '₹3,000 onwards',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
        gallery: [],
    },

    // ===== IV DRIPS =====
    {
        id: 17,
        title: 'IV Drip Therapy',
        slug: 'iv-drip-therapy',
        category: 'IV Drips',
        categorySlug: 'iv-drips',
        shortDescription: 'Doctor-supervised IV infusions delivering vitamins, antioxidants, and nutrients directly into the bloodstream for faster absorption and visible results.',
        description: `<p>IV Drip Therapy at D'CosMedis delivers essential vitamins, antioxidants, and nutrients directly into your bloodstream under medical supervision.</p>
    <h3>Available Drips</h3>
    <ul>
      <li><strong>Immunity Boost:</strong> Strengthens immune function, fights fatigue, vibrant health year-round</li>
      <li><strong>Energy Boost:</strong> Quick energy lift and cellular renewal, fights fatigue, beats jet lag</li>
      <li><strong>Hair Restore:</strong> Strengthens hair follicles, reduces hair fall, promotes thicker growth</li>
      <li><strong>Metaboost:</strong> Supports fat metabolism, enhances energy production, overall wellness</li>
      <li><strong>Radiant Antioxidant:</strong> Combats oxidative stress, boosts natural glow, evens complexion</li>
    </ul>
    <h3>What to Expect</h3>
    <p>Sessions last about 30-45 minutes in a relaxed clinical setting. Some feel refreshed right away; others notice benefits within a few days.</p>`,
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
        gallery: [],
    },

    // ===== COOLSCULPTING =====
    {
        id: 18,
        title: 'CoolSculpting®',
        slug: 'coolsculpting',
        category: 'Lifting & Contouring',
        categorySlug: 'lifting-contouring',
        shortDescription: 'FDA-approved non-invasive fat reduction. Controlled cooling freezes and permanently eliminates fat cells in targeted areas.',
        description: `<p>CoolSculpting® at D'CosMedis is an FDA-approved, non-invasive fat reduction technology that uses controlled cooling to permanently eliminate stubborn fat cells.</p>
    <h3>Target Areas</h3>
    <ul>
      <li>Double chin</li>
      <li>Thighs</li>
      <li>Abdomen and flanks</li>
      <li>Bra and back fat</li>
      <li>Banana roll (under buttocks)</li>
      <li>Upper arms</li>
    </ul>
    <h3>Results</h3>
    <p>Fat cells are permanently eliminated. Results visible within weeks and continue to improve over 2-3 months. Thousands of successful treatments at D'CosMedis.</p>`,
        duration: '35–60 minutes per area',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?w=800&q=80',
        gallery: [],
    },
    // ===== NEW MEGAMENU TREATMENTS =====
    {
        id: 19,
        title: 'Signature Medifacials',
        slug: 'signature-medifacials',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Customised signature medifacials for deep cleansing, hydration, and an instant, radiant glow.',
        description: '<p>Our Signature Medifacials are customized to target your unique skin concerns. Combining medical-grade products with advanced techniques, these facials promote deep cleansing, intense hydration, and a noticeable, long-lasting glow.</p><h3>Benefits</h3><ul><li>Deeply cleanses and minimizes pores</li><li>Restores hydration and radiance</li><li>Rejuvenates tired, dull skin</li></ul>',
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
    },
    {
        id: 20,
        title: 'Hitech Facials',
        slug: 'hitech-facials',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Advanced hitech facials combining cutting-edge technology and medical-grade ingredients for visible skin transformation.',
        description: '<p>Hitech Facials incorporate the latest technologies like dermal infusion, microcurrents, and LED light therapies to fundamentally transform skin health and appearance.</p><h3>Benefits</h3><ul><li>Stimulates deep collagen production</li><li>Lifts and tones facial contours</li><li>Enhances product absorption and efficacy</li></ul>',
        duration: '60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        gallery: [],
    },
    {
        id: 21,
        title: 'Medical Grade Facials',
        slug: 'medical-grade-facials',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Clinically formulated medical grade facials to address stubborn pigmentation, acne, and aging concerns safely.',
        description: '<p>Administered under clinical supervision, our Medical Grade Facials use potent active ingredients that penetrate deeper than standard spa facials, effectively treating acne, melasma, and fine lines.</p><h3>Benefits</h3><ul><li>Targets deeper skin layers</li><li>Treats complex skin conditions</li><li>Medical-grade safety and precision</li></ul>',
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
        gallery: [],
    },
    {
        id: 22,
        title: 'Neocollagen Facial',
        slug: 'neocollagen-facial',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Innovative facial therapy focused on stimulating new collagen production for firmer, younger-looking skin.',
        description: '<p>The Neocollagen Facial is specifically designed to ignite your skins natural collagen and elastin production processes. It restores volume, firmness, and significantly reduces the appearance of aging.</p><h3>Benefits</h3><ul><li>Firms and plumps the skin</li><li>Reduces the appearance of fine lines</li><li>Restores youthful elasticity</li></ul>',
        duration: '60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
        gallery: [],
    },
    {
        id: 23,
        title: 'Ultrasonic Facial (HIFU)',
        slug: 'ultrasonic-facial',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Non-invasive ultrasonic completely lifts and tightens the skin without surgery or downtime.',
        description: '<p>Utilizing High-Intensity Focused Ultrasound (HIFU), this facial gently heats the deep muscular layers of the face, promoting an immediate tightening effect and long-term lifting over several months.</p><h3>Benefits</h3><ul><li>Non-surgical skin lifting</li><li>Defines jawline and cheekbones</li><li>Long-lasting firming results</li></ul>',
        duration: '60–90 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?w=800&q=80',
        gallery: [],
    },
    {
        id: 24,
        title: 'LaserBrite (QSWITCH)',
        slug: 'laserbrite',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'Advanced QSWITCH laser treatment specifically tailored for dramatic skin brightening and pigmentation reduction.',
        description: '<p>LaserBrite utilizes state-of-the-art QSWITCH laser technology to shatter deep-seated pigment particles while leaving surrounding tissue unharmed. It is the ultimate solution for stubborn dark spots and overall skin brightening.</p><h3>Benefits</h3><ul><li>Dramatically reduces pigmentation and age spots</li><li>Safe for all skin types</li><li>Evens out skin tone for a brighter complexion</li></ul>',
        duration: '30 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        gallery: [],
    },
    {
        id: 25,
        title: 'Professional Peels',
        slug: 'professional-peels',
        category: 'Acne',
        categorySlug: 'acne',
        shortDescription: 'Expertly formulated professional peels to resurface the skin, unclog pores, and fade acne scars effectively.',
        description: '<p>Our Professional Peels are tailored to your specific acne grade and skin type. They deeply exfoliate the skin to remove dead cells, unclog pores, and significantly reduce post-acne scarring and hyperpigmentation.</p><h3>Benefits</h3><ul><li>Reduces active acne breakouts</li><li>Fades post-inflammatory hyperpigmentation</li><li>Smoothes skin texture</li></ul>',
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
    },
    {
        id: 26,
        title: 'Advanced GFC',
        slug: 'advanced-gfc',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'An upgraded Growth Factor Concentrate therapy harnessing higher concentrations of growth factors for superior hair restoration.',
        description: '<p>Advanced GFC takes the power of traditional GFC further by utilizing enhanced extraction techniques, resulting in a more potent serum. It is highly effective in treating moderate to severe hair thinning and stimulating dormant follicles.</p><h3>Benefits</h3><ul><li>Superior hair regrowth capabilities</li><li>Strengthens hair shafts</li><li>Reduces scalp inflammation</li></ul>',
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&q=80',
        gallery: [],
    },
    {
        id: 27,
        title: 'Hair Transplant',
        slug: 'hair-transplant',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'State-of-the-art, minimally invasive hair transplant procedures for permanent, natural-looking hair restoration.',
        description: '<p>Performed by leading experts, our Hair Transplant procedures (FUE/FUT) transfer healthy hair follicles to thinning areas, ensuring dense, permanent, and completely natural-looking results.</p><h3>Benefits</h3><ul><li>Permanent solution to hair loss</li><li>Natural-looking hairline design</li><li>Minimally invasive with fast recovery</li></ul>',
        duration: 'Half to Full Day',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
        gallery: [],
    },
    {
        id: 28,
        title: 'Skin Brightening Peel',
        slug: 'skin-brightening-peel',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'A specialized peel designed to instantly illuminate dull skin, reduce tanning, and improve overall clarity.',
        description: '<p>The Skin Brightening Peel blends unique brightening acids and antioxidants to gently slough away the dull surface layer, revealing an instantly brighter, more luminous complexion beneath.</p><h3>Benefits</h3><ul><li>Reduces sun damage and tanning</li><li>Instantly boosts skin radiance</li><li>Improves overall skin clarity</li></ul>',
        duration: '30 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
    },
    {
        id: 29,
        title: 'Bridal Skincare',
        slug: 'bridal-skincare',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'Comprehensive, customized skincare programs designed to give brides a flawless, radiant glow for their special day.',
        description: '<p>Our Bridal Skincare packages are carefully curated timelines of facials, peels, and laser treatments customized to your skin type. We ensure your skin is flawless, clear, and glowing perfectly in time for your wedding day.</p><h3>Benefits</h3><ul><li>Customized timeline for optimal results</li><li>Addresses multiple skin concerns simultaneously</li><li>Guarantees a radiant bridal glow</li></ul>',
        duration: 'Variable (Programmatic)',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        gallery: [],
    },
]

export const treatmentCategories = [
    { name: 'All', slug: 'all' },
    { name: 'Acne', slug: 'acne' },
    { name: 'Anti-Aging', slug: 'anti-aging' },
    { name: 'Hair', slug: 'hair' },
    { name: 'Skin', slug: 'skin' },
    { name: 'Facials', slug: 'facials' },
    { name: 'Laser', slug: 'laser' },
    { name: 'Lifting & Contouring', slug: 'lifting-contouring' },
    { name: 'IV Drips', slug: 'iv-drips' },
]

export const testimonials = [
    // Celebrity Testimonials
    {
        id: 1,
        name: 'Nikita Shah',
        role: 'Patient — 26 Years',
        content: '"I have been visiting D\'CosMedis for the last 26 years for my skin treatment. Doctors and Technicians are the best and very friendly. I\'ve noticed a significant improvement in my skin\'s texture and glow. Thank you so much for the care and great experience always."',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 2,
        name: 'Meenal Sinha',
        role: 'Patient — Since 1996',
        content: '"Amazing always. Have been coming to them since 1996, changed the clinic I go to, changed therapists but the treatment quality and level of service has always been absolutely wonderful. The entire staff here make you feel so special. Would recommend to all."',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 3,
        name: 'S Mehta',
        role: 'Patient',
        content: '"I had a wonderful experience with D\'CosMedis. The doctor is incredibly knowledgeable, patient, and truly cares about her patients. She has the greatest aesthetic sense when it comes to looking all natural. Thank you for your excellent care!"',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 4,
        name: 'Matteo Cruciani',
        role: 'International Patient',
        content: '"While in India for my vacation I was recommended to go to this clinic for an aesthetic treatment and definitely the best choice I made! The staff is so welcoming and professional. The treatment itself absolutely outstanding."',
        image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 5,
        name: 'Alison Caddy',
        role: 'International Patient',
        content: '"I received a signature facial and all I can say is WOW! What a special experience. The doctor and therapist were so professional and thorough when analysing my skin. I left with my face glowing and feeling completely pampered."',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 6,
        name: 'Manal Mohammed',
        role: 'Patient',
        content: '"It was my first time at D\'CosMedis and just based on how precise and considerate the details of my consultation was — I didn\'t even need to explain much. My treatment was done to perfection. I was literally glowing afterwards."',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 7,
        name: 'Raina Punj',
        role: 'Patient — 20+ Years',
        content: '"Going here for the last 20 years with my mother. They have the latest procedures and can help you with everything about beauty. You can trust them completely regarding your beautification needs."',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 8,
        name: 'Vishaka Talreja',
        role: 'Patient',
        content: '"I have had acne since my teenage years and nothing really worked. Then with regular treatments at D\'CosMedis and following their prescription helped. The dermatologists are good and all therapists are certified. They only recommend what you require."',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80',
        isCelebrity: false,
    },
    {
        id: 9,
        name: 'Mudita Pataskar',
        role: 'Patient',
        content: '"Visited for the skin treatment of our 13 year old daughter, we owe a big and heartfelt thanks to the ever gracious, kind and generous Dr. Dolly Gupta for her personalised care and warm gesture. We won\'t ever forget."',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
        isCelebrity: false,
    },
]

export const locations = [
    {
        id: 1,
        name: 'D\'CosMedis Mumbai — Kemps Corner',
        slug: 'mumbai-kemps-corner',
        address: 'Kemps Corner, Mumbai, Maharashtra',
        phone: '+91 22 2368 2255',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 2,
        name: 'D\'CosMedis Mumbai — Khar West',
        slug: 'mumbai-khar-west',
        address: 'Khar West, Mumbai, Maharashtra',
        phone: '+91 22 6704 2425',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 3,
        name: 'D\'CosMedis Mumbai — Andheri West',
        slug: 'mumbai-andheri-west',
        address: 'Andheri West, Mumbai, Maharashtra',
        phone: '+91 22 2636 1578',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 4,
        name: 'D\'CosMedis New Delhi',
        slug: 'new-delhi',
        address: 'Defence Colony, New Delhi - 110024',
        phone: '+91 11 4616 1250',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 5,
        name: 'D\'CosMedis Bengaluru',
        slug: 'bengaluru',
        address: 'Vittal Mallya Road, Bengaluru, Karnataka',
        phone: '+91 72592 00200',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 6,
        name: 'D\'CosMedis Chennai',
        slug: 'chennai',
        address: 'KNK Road, Chennai, Tamil Nadu',
        phone: '+91 73584 00400',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 7,
        name: 'D\'CosMedis Hyderabad',
        slug: 'hyderabad',
        address: 'Hyderabad, Telangana',
        phone: '+91 8080 125 874',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 8,
        name: 'D\'CosMedis Kolkata',
        slug: 'kolkata',
        address: 'Middleton Street, Kolkata, West Bengal',
        phone: '+91 99875 87147',
        email: 'query@dcosmedisclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
]

export const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', category: 'clinic', caption: 'Treatment Room' },
    { id: 2, src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80', category: 'treatments', caption: 'Signature Facial' },
    { id: 3, src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', category: 'results', caption: 'Acne Treatment Results' },
    { id: 4, src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', category: 'clinic', caption: 'D\'CosMedis Mumbai Clinic' },
    { id: 5, src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80', category: 'treatments', caption: 'Chemical Peel Session' },
    { id: 6, src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', category: 'results', caption: 'Anti-Aging Results' },
    { id: 7, src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', category: 'clinic', caption: 'D\'CosMedis Delhi Clinic' },
    { id: 8, src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80', category: 'treatments', caption: 'Laser Treatment' },
    { id: 9, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', category: 'results', caption: 'Pigmentation Treatment' },
    { id: 10, src: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=600&q=80', category: 'treatments', caption: 'Hair Treatment' },
    { id: 11, src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80', category: 'clinic', caption: 'Bengaluru Clinic' },
    { id: 12, src: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=600&q=80', category: 'results', caption: 'Skin Brightening Results' },
]

export const teamMembers = [
    {
        name: 'Dr. Dolly Gupta',
        role: 'Founder & Chief Dermatologist',
        bio: 'Pioneer of cosmetology in India with over 30 years of experience. Dr. Dolly Gupta founded D\'CosMedis (originally Blush Clinics) in 1994. She introduced Botox to India in 2000 and has been skincare mentor for Miss India for 20+ years. Recognised as "Best Skincare Expert" by Vogue and ELLE.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
        name: 'Dr. Rashmi Taneja',
        role: 'Senior Dermatologist',
        bio: 'Specializing in cosmetic dermatology, laser treatments, and advanced skin rejuvenation. Brings precision and artistry to every procedure with years of clinical expertise.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=400&q=80',
    },
    {
        name: 'Dr. Amit Verma',
        role: 'Hair Restoration Specialist',
        bio: 'Expert in GFC Therapy, Exosomes, Dermaneedling, and advanced hair transplant techniques. Specialises in treating hair loss with clinically proven, non-surgical solutions.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    },
]

export { stats } from './homeData';
