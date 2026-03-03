// ===== SITE DATA =====
// All content data for AAYNA Clinic clone

export const heroSlides = [
    {
        id: 1,
        title: 'Reveal Your Most\nRadiant Self',
        subtitle: 'Advanced Dermatology & Aesthetic Treatments',
        description: 'Experience world-class skin, hair & anti-aging treatments backed by science and delivered with care.',
        cta: 'Explore Treatments',
        ctaLink: '/treatments',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
    },
    {
        id: 2,
        title: 'Your Skin\nDeserves the Best',
        subtitle: 'Personalized Care, Premium Results',
        description: 'Our expert dermatologists craft treatment plans tailored to your unique skin goals.',
        cta: 'Book Consultation',
        ctaLink: '/book',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80',
    },
    {
        id: 3,
        title: 'Where Science\nMeets Beauty',
        subtitle: 'State-of-the-Art Technology',
        description: 'Cutting-edge laser systems, advanced injectables, and evidence-based treatments.',
        cta: 'Learn More',
        ctaLink: '/about',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80',
    },
]

export const concerns = [
    {
        id: 1,
        name: 'Active Acne',
        slug: 'active-acne',
        icon: '🔴',
        shortDescription: 'Advanced treatments for acne breakouts, inflammation, and scarring.',
        description: 'Acne is one of the most common skin concerns. At AAYNA, we use a combination of medical-grade treatments including chemical peels, laser therapy, and customized skincare to tackle acne at its root. Our dermatologists create personalized treatment plans to address both active breakouts and the scarring they leave behind.',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
        treatments: ['chemical-peels', 'laser-therapy', 'prp-treatment'],
    },
    {
        id: 2,
        name: 'Pigmentation',
        slug: 'pigmentation',
        icon: '🟤',
        shortDescription: 'Reduce dark spots, melasma, and uneven skin tone effectively.',
        description: 'Uneven skin tone and dark spots can be caused by sun damage, hormonal changes, or post-inflammatory hyperpigmentation. Our multi-modal approach combines advanced lasers, chemical peels, and medical-grade lightening agents for visible, lasting results.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        treatments: ['chemical-peels', 'glass-skin-facial'],
    },
    {
        id: 3,
        name: 'Anti-Aging',
        slug: 'anti-aging',
        icon: '✨',
        shortDescription: 'Turn back time with wrinkle reduction, skin tightening & rejuvenation.',
        description: 'Fine lines, wrinkles, and loss of skin elasticity are natural parts of aging, but modern dermatology offers powerful solutions. From Botox and fillers to HIFU and radiofrequency skin tightening, our anti-aging protocols deliver natural-looking rejuvenation.',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        treatments: ['anti-aging-therapy', 'hydrafacial', 'aayna-collagen-treatment'],
    },
    {
        id: 4,
        name: 'Hair Loss',
        slug: 'hair-loss',
        icon: '💇',
        shortDescription: 'Regrow and restore with PRP, mesotherapy & hair transplant solutions.',
        description: 'Hair loss affects both men and women and can be caused by genetics, stress, or nutritional deficiencies. AAYNA offers comprehensive hair restoration treatments including PRP therapy, mesotherapy, and advanced hair transplant techniques.',
        image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&q=80',
        treatments: ['prp-treatment', 'aayna-hair-regrow', 'aveda-hair-treatment'],
    },
    {
        id: 5,
        name: 'Dark Circles',
        slug: 'dark-circles',
        icon: '👁️',
        shortDescription: 'Brighten under-eye area and reduce puffiness with targeted therapies.',
        description: 'Dark circles under the eyes can make you look tired and aged. Our targeted treatments include under-eye fillers, chemical peels, laser therapy, and PRP to restore a refreshed, youthful appearance to the delicate under-eye area.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=800&q=80',
        treatments: ['prp-treatment', 'chemical-peels', 'aayna-wonder-eye'],
    },
    {
        id: 6,
        name: 'Dull Skin',
        slug: 'dull-skin',
        icon: '🌟',
        shortDescription: 'Restore glow with facials, peels, and advanced brightening treatments.',
        description: 'Environmental factors, stress, and aging can rob your skin of its natural radiance. Our glow-boosting treatments combine medical-grade facials, vitamin infusions, and advanced resurfacing to reveal luminous, healthy skin.',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        treatments: ['glass-skin-facial', 'hydrafacial', 'chemical-peels', 'aayna-hydraboost'],
    },
    {
        id: 7,
        name: 'Sensitive Skin',
        slug: 'sensitive-skin',
        icon: '🌸',
        shortDescription: 'Gentle treatments for redness, rosacea, and reactive skin types.',
        description: 'Sensitive skin requires specialized care. Our dermatologists use gentle yet effective treatments to calm inflammation, reduce redness, and strengthen your skin barrier without causing irritation.',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
        treatments: ['hydrafacial', 'rose-exosomes'],
    },
    {
        id: 8,
        name: 'Tan Removal',
        slug: 'tan-removal',
        icon: '☀️',
        shortDescription: 'Restore your natural complexion with advanced de-tan treatments.',
        description: 'Sun damage and tanning can leave skin looking uneven and dull. Our de-tan treatments use a combination of peels, lasers, and medical-grade products to restore your natural complexion and protect against future damage.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        treatments: ['chemical-peels', 'glass-skin-facial'],
    },
]

export const treatments = [
    // ===== AAYNA EXCLUSIVE =====
    {
        id: 1,
        title: 'AAYNA Miracle',
        slug: 'aayna-miracle',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'Introducing the miracle of micro-needling with no downtime or redness. Designed to address all kinds of skin concerns.',
        description: `<p>AAYNA MIRACLE is designed to address all kinds of skin concerns so that you can finally have the skin you have always wanted.</p>
    <p>Introducing the miracle of micro-needling with no downtime or redness. This revolutionary treatment uses advanced micro-channeling technology to rejuvenate your skin without the traditional side effects of micro-needling.</p>
    <h3>Benefits</h3>
    <ul>
      <li>No downtime or redness</li>
      <li>Addresses multiple skin concerns simultaneously</li>
      <li>Stimulates natural collagen production</li>
      <li>Improves skin texture and tone</li>
      <li>Suitable for all skin types</li>
    </ul>`,
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/miracle-2.webp',
        gallery: [],
    },
    {
        id: 2,
        title: 'AAYNA Glass Skin Facial',
        slug: 'glass-skin-facial',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'Glass skin is a term used to describe flawless, even toned, smooth and luminous, crystal clear skin. It is the skin of everyone\'s dreams.',
        description: `<p>The AAYNA Glass Skin Facial is our signature treatment designed to give you the coveted "glass skin" look — smooth, poreless, and brilliantly luminous. This multi-step facial combines medical-grade exfoliation, deep hydration therapy, and LED light treatment.</p>
    <h3>What to Expect</h3>
    <p>The treatment begins with a thorough double cleanse followed by gentle exfoliation using medical-grade solutions. Next, our specialists apply a series of hydrating serums infused with hyaluronic acid and niacinamide. The final step involves LED light therapy to seal in the benefits and boost collagen production.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Intense deep hydration</li>
      <li>Reduced pore appearance</li>
      <li>Luminous, glass-like skin finish</li>
      <li>Improved skin texture and tone</li>
      <li>No downtime required</li>
    </ul>`,
        duration: '60 minutes',
        price: '₹5,500',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/glassSkinFacial-1.webp',
        gallery: [],
    },
    {
        id: 3,
        title: 'AAYNA Collagen Treatment',
        slug: 'aayna-collagen-treatment',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'A revolutionary facial treatment from Switzerland which delivers collagen through the ion channels of your skin without needles and discomfort.',
        description: `<p>AAYNA has revolutionized facial treatments in India with its Collagen Facial treatment — a new technology, from Switzerland which delivers collagen through the ion channels of your skin without needles and discomfort.</p>
    <h3>How It Works</h3>
    <p>Using advanced iontophoresis technology from Switzerland, the treatment delivers pure collagen deep into your skin's layers. The process is completely painless and uses the natural ion channels in your skin for maximum absorption.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Needle-free collagen delivery</li>
      <li>Instant visible plumping effect</li>
      <li>Improves elasticity and firmness</li>
      <li>Swiss precision technology</li>
      <li>No pain, no downtime</li>
    </ul>`,
        duration: '60 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/collagen-1.webp',
        gallery: [],
    },
    {
        id: 4,
        title: 'AAYNA Hair Regrow',
        slug: 'aayna-hair-regrow',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'A medical solution for advanced hair growth and hair restoration with a proprietary, patented mix of 5 growth factors, peptides, vitamins, amino acids, and minerals.',
        description: `<p>AAYNA HAIR REGROW is a medical solution for advanced hair growth and hair restoration. It is a proprietary, patented mix of 5 growth factors, peptides, vitamins, amino acids, and minerals.</p>
    <h3>Key Ingredients</h3>
    <ul>
      <li>5 specialised growth factors</li>
      <li>Bioactive peptides</li>
      <li>Essential vitamins and minerals</li>
      <li>Amino acid complex</li>
      <li>Proprietary patented formulation</li>
    </ul>
    <h3>Benefits</h3>
    <ul>
      <li>Stimulates new hair growth</li>
      <li>Strengthens existing hair</li>
      <li>Reduces hair fall significantly</li>
      <li>Nourishes scalp health</li>
    </ul>`,
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/leaf-right-2.webp',
        gallery: [],
    },
    {
        id: 5,
        title: 'AAYNA Renew',
        slug: 'aayna-renew',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'A revolutionary treatment incorporating the goodness of micro-needling and radiofrequency to stimulate the production of collagen and elastin.',
        description: `<p>One of the most revolutionary treatments introduced at AAYNA amidst many others is the AAYNA Renew Treatment, which incorporates the goodness of micro-needling and radiofrequency at the same time, to stimulate the production of collagen and elastin.</p>
    <h3>It helps in skin rejuvenation, tightening, lifting, scar management & wound healing.</h3>
    <h3>Benefits</h3>
    <ul>
      <li>Skin rejuvenation and tightening</li>
      <li>Facial lifting effect</li>
      <li>Scar management</li>
      <li>Wound healing</li>
      <li>Collagen and elastin stimulation</li>
    </ul>`,
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/AAYNA-Renew-Leaf-1.webp',
        gallery: [],
    },
    {
        id: 6,
        title: 'AAYNA Wonder Eye',
        slug: 'aayna-wonder-eye',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'Our signature treatment combining radiofrequency, laser and transdermal medicinal drug delivery to rejuvenate, lift and lighten the skin around your eyes.',
        description: `<p>AAYNA Wonder Eye is one of our signature treatments. Our team of experts has formulated a unique protocol, which combines the benefits of radiofrequency, laser and transdermal medicinal drug delivery to rejuvenate, lift and lighten the skin around your eyes.</p>
    <h3>Benefits</h3>
    <ul>
      <li>Under-eye rejuvenation</li>
      <li>Lifting and tightening effect</li>
      <li>Dark circle lightening</li>
      <li>Combines RF + Laser + Drug delivery</li>
      <li>Expert-formulated protocol</li>
    </ul>`,
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/leaf-right-3.webp',
        gallery: [],
    },
    {
        id: 7,
        title: 'AAYNA Waterless Medical Pedicure',
        slug: 'aayna-waterless-pedicure',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'A unique and exclusive waterless pedicure performed by London-trained aestheticians using Australian Emu oil to treat corns, calluses, and ingrown toenails.',
        description: `<p>AAYNA's Waterless Medical Pedicure is a unique and exclusive treatment in the country. This revolutionary pedicure is performed by London-trained aestheticians and uses Australian Emu oil and a special device to treat corns, calluses, and ingrown toenails.</p>
    <p>The treatment is waterless, making it more hygienic and reducing the risk of fungal infections. The process is painless and requires no downtime, allowing you to return to your daily activities right after the treatment. A relaxing session will leave your feet feeling rejuvenated, refreshed, and ready to take on the day.</p>`,
        duration: '60 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/water-less-pedicure.webp',
        gallery: [],
    },
    {
        id: 8,
        title: 'Endermologie',
        slug: 'endermologie',
        category: 'AAYNA Exclusive',
        categorySlug: 'aayna-exclusive',
        shortDescription: 'France\'s renowned weight loss treatment by LPG, launched in India for the first time by Dr. Simal Soin. Precisely targets and slims specific body areas.',
        description: `<p>Dr. Simal Soin has launched France's renowned weight loss treatment Endermologie by LPG in India for the first time. This treatment precisely targets and slims specific areas of the body such as the arms, back, legs, stomach, waist, thighs and buttocks, as per different skin types.</p>
    <h3>Target Areas</h3>
    <ul>
      <li>Arms and back</li>
      <li>Legs and thighs</li>
      <li>Stomach and waist</li>
      <li>Buttocks</li>
    </ul>`,
        duration: '35–45 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2021/11/leaf-right-1-1.webp',
        gallery: [],
    },

    // ===== NEW LAUNCHES =====
    {
        id: 9,
        title: 'AAYNA Hydraboost Facial Therapy',
        slug: 'aayna-hydraboost',
        category: 'New Launches',
        categorySlug: 'new-launches',
        shortDescription: 'A deeply hydrating treatment designed to quench dehydrated skin and restore its natural moisture balance at the cellular level.',
        description: `<p><strong>AAYNA Hydraboost Facial Therapy</strong> is a deeply hydrating treatment designed to quench dehydrated skin and restore its natural moisture balance. Ideal for those experiencing dryness, dullness, or tight, flaky skin, this therapy works at the cellular level to replenish lost hydration and strengthen the skin's barrier.</p>
    <h3>5 Benefits of MDMA (Microdermabrasion in Hydraboost)</h3>
    <ul>
      <li><strong>Deep Cleanses:</strong> Gently removes dead cells, dirt, and excess oil, leaving skin fresh and clear.</li>
      <li><strong>Enhanced Absorption:</strong> Prepares the skin to better absorb serums and creams, maximizing treatment benefits.</li>
      <li><strong>Smoother Texture:</strong> Eliminates roughness and flakiness for a softer, refined complexion.</li>
      <li><strong>Stimulates Circulation:</strong> Boosts blood flow to promote a natural, healthy glow.</li>
      <li><strong>Minimises Pore Congestion:</strong> Clears clogged pores to prevent breakouts and improve treatment outcomes.</li>
    </ul>`,
        duration: '60 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2025/10/AAYNA_8_AAYNA-Hydraboost.webp',
        gallery: [],
    },
    {
        id: 10,
        title: 'AVEDA Hair Treatment',
        slug: 'aveda-hair-treatment',
        category: 'New Launches',
        categorySlug: 'new-launches',
        shortDescription: 'A restorative vegan treatment designed to revive damaged, dull, and stressed hair using advanced phyto-active complexes.',
        description: `<p><strong>Aveda Hair Repair Therapy</strong> is a restorative treatment designed to revive damaged, dull, and stressed hair. Ideal for anyone dealing with breakage, color damage, or dryness from daily styling, this vegan and eco-conscious therapy works deep within the hair fiber to strengthen and rejuvenate.</p>
    <ul>
      <li><strong>100% Vegan Formulation:</strong> Powered by plant-based ingredients for healthier, stronger hair.</li>
      <li><strong>Free from Harsh Chemicals:</strong> Gentle on the scalp and suitable for all hair types.</li>
      <li><strong>Repairs Structural Damage:</strong> Targets weakened fibers to rebuild and protect from within.</li>
      <li><strong>Phyto-Active Complexes:</strong> Clinically proven to restore strength and smoothness.</li>
      <li><strong>Visible Results:</strong> Experience smoother texture, reduced frizz, and radiant shine in just one session.</li>
    </ul>`,
        duration: '60–90 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2025/10/AAYNA_9_Aveda-Hair-1.webp',
        gallery: [],
    },
    {
        id: 11,
        title: 'Rose Exosomes',
        slug: 'rose-exosomes',
        category: 'New Launches',
        categorySlug: 'new-launches',
        shortDescription: 'Cutting-edge regenerative treatment harnessing Damask Rose stem cell-derived exosomes to target aging, pigmentation, and hair thinning.',
        description: `<p><strong>Rose Exosomes Therapy</strong> is a cutting-edge regenerative treatment designed to target concerns like aging, pigmentation, dark spots, and hair thinning. This therapy harnesses the power of <strong>Damask Rose stem cell–derived exosomes</strong> to repair, renew, and revitalize at a cellular level.</p>
    <ul>
      <li><strong>Stimulates Follicle Renewal:</strong> Activates dormant hair follicles for thicker, stronger growth.</li>
      <li><strong>Improves Scalp Health:</strong> Reduces inflammation and enhances nutrient absorption.</li>
      <li><strong>Boosts Collagen Production:</strong> Promotes firmer, smoother, and more elastic skin.</li>
      <li><strong>Targets Pigmentation:</strong> Helps correct hyperpigmentation, dark spots, and uneven tone.</li>
      <li><strong>Minimally Invasive:</strong> Delivers visible rejuvenation without surgery or downtime.</li>
    </ul>`,
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2025/10/AAYNA_12_Rose-Exosomes.webp',
        gallery: [],
    },
    {
        id: 12,
        title: 'Préime DermaFacial',
        slug: 'preime-dermafacial',
        category: 'New Launches',
        categorySlug: 'new-launches',
        shortDescription: 'A revolutionary 5-in-1 skincare innovation designed to cleanse, rejuvenate, and strengthen your skin from within.',
        description: `<p><strong>Préime DermaFacial</strong> is a revolutionary 5-in-1 skincare innovation designed to cleanse, rejuvenate, and strengthen your skin from within. Combining state-of-the-art technologies, it delivers the future of skin health—today.</p>
    <ul>
      <li><strong>AquaB:</strong> Hydro-dermabrasion that deeply cleanses, exfoliates, and hydrates in one step.</li>
      <li><strong>VibroX:</strong> Uses microdermabrasion, vibration, red LED light, and CO₂ microbubbles to oxygenate and energize the skin.</li>
      <li><strong>MicroT:</strong> Provides microcurrent stimulation to tone and lift facial muscles for a firmer look.</li>
      <li><strong>Collagen+:</strong> Delivers gentle RF heat to activate fibroblasts and boost natural collagen production.</li>
      <li><strong>UltraB:</strong> Enhances transdermal delivery of potent serums through advanced ultrasound technology.</li>
    </ul>
    <p>One treatment. Five transformative actions. <strong>Préime DermaFacial</strong> breathes life into tired, dehydrated skin—leaving it smoother, firmer, and radiantly refreshed.</p>`,
        duration: '60–75 minutes',
        price: 'On Consultation',
        image: 'https://www.aaynaclinic.com/wp-content/uploads/2025/10/AAYNA_11_Prieme-DermaFacial.webp',
        gallery: [],
    },

    // ===== STANDARD TREATMENTS =====
    {
        id: 13,
        title: 'Laser Hair Removal',
        slug: 'laser-hair-removal',
        category: 'Laser',
        categorySlug: 'laser',
        shortDescription: 'Permanent hair reduction using advanced laser technology. Safe, fast, and effective for all skin types.',
        description: `<p>Our advanced laser hair removal treatment uses state-of-the-art diode and Nd:YAG laser technology to safely and effectively reduce unwanted hair on all skin types.</p>
    <h3>Treatment Areas</h3>
    <ul>
      <li>Full face and neck</li>
      <li>Underarms</li>
      <li>Full body</li>
      <li>Bikini area</li>
      <li>Arms and legs</li>
    </ul>`,
        duration: '30–90 minutes',
        price: '₹3,000 onwards',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
        gallery: [],
    },
    {
        id: 14,
        title: 'Chemical Peels',
        slug: 'chemical-peels',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'Medical-grade peels for acne, pigmentation, and skin renewal. Customized to your skin type and goals.',
        description: `<p>Chemical peels are one of the most effective treatments for skin resurfacing. At AAYNA, we offer a range of medical-grade peels customized to your specific skin concerns.</p>
    <h3>Types Available</h3>
    <ul>
      <li><strong>Glycolic Peel:</strong> Mild exfoliation for brightening</li>
      <li><strong>Salicylic Peel:</strong> Deep pore cleansing for acne-prone skin</li>
      <li><strong>TCA Peel:</strong> Medium-depth for pigmentation and fine lines</li>
      <li><strong>Lactic Peel:</strong> Gentle hydrating peel for sensitive skin</li>
    </ul>`,
        duration: '30–45 minutes',
        price: '₹2,500 onwards',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
    },
    {
        id: 15,
        title: 'Anti-Aging Therapy',
        slug: 'anti-aging-therapy',
        category: 'Anti-Aging',
        categorySlug: 'anti-aging',
        shortDescription: 'Comprehensive anti-aging solutions including Botox, dermal fillers, HIFU, and skin tightening treatments.',
        description: `<p>Our comprehensive anti-aging program combines the latest in medical aesthetics to help you look your best at any age.</p>
    <h3>Available Treatments</h3>
    <ul>
      <li><strong>Botox:</strong> Smooth dynamic wrinkles and fine lines</li>
      <li><strong>Dermal Fillers:</strong> Restore volume, define contours</li>
      <li><strong>HIFU:</strong> Non-surgical skin lifting and tightening</li>
      <li><strong>Thread Lift:</strong> Minimally invasive facial contouring</li>
      <li><strong>RF Skin Tightening:</strong> Collagen stimulation for firmer skin</li>
    </ul>`,
        duration: '45–90 minutes',
        price: '₹8,000 onwards',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        gallery: [],
    },
    {
        id: 16,
        title: 'HydraFacial',
        slug: 'hydrafacial',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'The ultimate hydrating facial that cleanses, extracts, and hydrates for immediately visible results.',
        description: `<p>HydraFacial is a patented skin treatment available at AAYNA that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously.</p>
    <h3>The 4-Step Process</h3>
    <ul>
      <li><strong>Cleanse + Peel:</strong> Gentle exfoliation and resurfacing</li>
      <li><strong>Extract + Hydrate:</strong> Painless suction removes debris</li>
      <li><strong>Fuse + Protect:</strong> Antioxidants and peptides maximize your glow</li>
      <li><strong>LED Light Therapy:</strong> Boost collagen and reduce inflammation</li>
    </ul>`,
        duration: '45 minutes',
        price: '₹4,500',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
        gallery: [],
    },
    {
        id: 17,
        title: 'PRP Hair Treatment',
        slug: 'prp-treatment',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'Platelet-Rich Plasma therapy to stimulate natural hair growth and strengthen hair follicles.',
        description: `<p>Platelet-Rich Plasma (PRP) therapy uses your own blood's growth factors to stimulate natural hair growth. Our dermatologists perform PRP treatments with precision for both men and women experiencing hair thinning or loss.</p>
    <h3>The Process</h3>
    <p>A small sample of your blood is drawn and processed in a centrifuge to concentrate the platelets. This PRP-rich solution is then injected into the scalp in areas of thinning.</p>`,
        duration: '45 minutes',
        price: '₹6,000',
        image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&q=80',
        gallery: [],
    },
    {
        id: 18,
        title: 'DERMAPEN – Acne Scar Treatment',
        slug: 'dermapen-acne-scar',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'A fractional micro-needling device which helps in collagen repairing and reduces scarring with long-lasting results.',
        description: `<p>The Derma Pen is a fractional micro-needling device which helps in collagen repairing and reduces scarring. AAYNA offers customized treatments to help reduce acne scars that are painless, safe and provide long-lasting results.</p>
    <h3>How It Works</h3>
    <p>The automatic, vibration function improves the efficacy and absorption of products. At the same time, it also reduces pain and discomfort.</p>
    <p>It minimizes pore size & helps reduce stretch marks.</p>
    <p>The serums used are usually hyaluronic acid, Vitamin C, 2% BPC and platelet-rich plasma (PRP).</p>`,
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
        gallery: [],
    },
]

export const treatmentCategories = [
    { name: 'All', slug: 'all' },
    { name: 'AAYNA Exclusive', slug: 'aayna-exclusive' },
    { name: 'New Launches', slug: 'new-launches' },
    { name: 'Skin', slug: 'skin' },
    { name: 'Hair', slug: 'hair' },
    { name: 'Facials', slug: 'facials' },
    { name: 'Laser', slug: 'laser' },
    { name: 'Anti-Aging', slug: 'anti-aging' },
]

export const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        content: 'AAYNA has completely transformed my skin! The Glass Skin Facial is absolutely incredible. My skin has never looked this radiant and healthy. The staff is professional and the clinic ambiance is top-notch.',
        location: 'Khan Market, Delhi',
        rating: 5,
        treatment: 'Glass Skin Facial',
    },
    {
        id: 2,
        name: 'Rahul Kapoor',
        content: 'I was skeptical about PRP for my hair loss but the results have been remarkable. After just 4 sessions, I noticed significant new growth. Dr. Simal and the team are truly experts in their field.',
        location: 'Gurugram',
        rating: 5,
        treatment: 'PRP Hair Treatment',
    },
    {
        id: 3,
        name: 'Anjali Menon',
        content: 'The anti-aging treatments at AAYNA are phenomenal. The results look so natural — people keep telling me I look 10 years younger! The consultation process was thorough and the care was personalized.',
        location: 'SDA, Delhi',
        rating: 5,
        treatment: 'Anti-Aging Therapy',
    },
    {
        id: 4,
        name: 'Vikram Singh',
        content: 'Best laser hair removal experience in Delhi. Clean clinic, friendly staff, virtually painless procedure. I have completed 5 sessions and the hair reduction is about 90%. Highly recommended!',
        location: 'Ludhiana',
        rating: 5,
        treatment: 'Laser Hair Removal',
    },
]

export const locations = [
    {
        id: 1,
        name: 'AAYNA SDA',
        slug: 'aayna-sda',
        address: 'SDA Market, Opposite IIT Gate, Hauz Khas, New Delhi - 110016',
        phone: '+91 11 2634 7890',
        email: 'sda@aaynaclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 2,
        name: 'AAYNA Khan Market',
        slug: 'aayna-khan-market',
        address: 'Khan Market, Middle Lane, New Delhi - 110003',
        phone: '+91 11 2634 7891',
        email: 'khanmarket@aaynaclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 3,
        name: 'AAYNA Gurugram',
        slug: 'aayna-gurugram',
        address: 'Sector 28, Main Market, Gurugram, Haryana - 122002',
        phone: '+91 124 234 5678',
        email: 'gurugram@aaynaclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
    {
        id: 4,
        name: 'AAYNA Ludhiana',
        slug: 'aayna-ludhiana',
        address: 'Sarabha Nagar, Main Road, Ludhiana, Punjab - 141001',
        phone: '+91 161 234 5678',
        email: 'ludhiana@aaynaclinic.com',
        hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        mapUrl: 'https://maps.google.com',
    },
]

export const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', category: 'clinic', caption: 'Treatment Room' },
    { id: 2, src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80', category: 'treatments', caption: 'Facial Treatment' },
    { id: 3, src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', category: 'results', caption: 'Skin Rejuvenation' },
    { id: 4, src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', category: 'clinic', caption: 'AAYNA SDA Clinic' },
    { id: 5, src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80', category: 'treatments', caption: 'Chemical Peel Session' },
    { id: 6, src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', category: 'results', caption: 'Anti-Aging Results' },
    { id: 7, src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', category: 'clinic', caption: 'Khan Market Clinic' },
    { id: 8, src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80', category: 'treatments', caption: 'Laser Treatment' },
    { id: 9, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', category: 'results', caption: 'Pigmentation Treatment' },
    { id: 10, src: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=600&q=80', category: 'treatments', caption: 'Hair Treatment' },
    { id: 11, src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80', category: 'clinic', caption: 'Gurugram Clinic' },
    { id: 12, src: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=600&q=80', category: 'results', caption: 'Dark Circle Treatment' },
]

export const teamMembers = [
    {
        name: 'Dr. Simal Soin',
        role: 'Founder & Chief Dermatologist',
        bio: 'With over 20 years of experience in dermatology and aesthetic medicine, Dr. Simal Soin is one of India\'s most renowned skin specialists. She founded AAYNA with a vision to bring world-class treatments to Indian patients.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
        name: 'Dr. Rashmi Taneja',
        role: 'Senior Dermatologist',
        bio: 'Specializing in cosmetic dermatology and laser treatments, Dr. Taneja brings precision and artistry to every procedure.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=400&q=80',
    },
    {
        name: 'Dr. Amit Verma',
        role: 'Hair Restoration Specialist',
        bio: 'An expert in PRP therapy and advanced hair transplant techniques with a track record of transformative results.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    },
]

export const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '50,000+', label: 'Happy Patients' },
    { value: '4', label: 'Clinic Locations' },
    { value: '50+', label: 'Advanced Treatments' },
]
