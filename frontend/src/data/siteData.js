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
    {
        id: 1,
        title: 'Acne & Acne Scar Treatments',
        slug: 'acne-treatments',
        category: 'Acne',
        categorySlug: 'acne',
        shortDescription: 'Advanced, doctor-led treatments to calm active acne and minimize scarring.',
        description: '<p>Acne affects confidence as much as skin. At D\'CosMedis, we have treated acne and acne scarring for over 30 years, addressing breakouts at every stage — from early signs to stubborn, deep-seated inflammation — and minimising the scars they leave behind.</p><p>Using personalised combinations of medical-grade peels, advanced fractional RF technology, and targeted lasers, we calm active acne while triggering the skin\'s natural healing to fade marks and restore texture.</p>',
        duration: 'Varies',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'INTENSE ACNE PEEL',
                description: 'The Intense Acne Peel is designed to target acne at every stage — from early breakouts (Grade 0) to more stubborn flare-ups (Grade 3). This advanced, doctor-led treatment works through a four-step corrective action: Deep pore cleansing to clear blockages, regulation of excess sebum production, elimination of acne-causing bacteria, and refinement of skin texture to reduce post-acne marks.'
            },
            {
                title: 'SUBLATIVE REJUVENATION — EMATRIX®',
                description: 'A new generation of skin resurfacing, Sublative Rejuvenation uses fractional radio-frequency (RF) energy to gently heat the deeper layers of the skin while keeping the surface intact. This controlled heating triggers the body\'s natural healing process, stimulating fresh collagen and elastin production for smoother, firmer skin. It is highly effective for acne scars, skin texture refinement, and early signs of ageing.'
            },
            {
                title: 'PROFESSIONAL PEELS',
                description: 'Professional peels speed up skin cell turnover — essentially acting as skin resurfacing and exfoliation agents. The aim is to replace the outer, dead layers of tired, blemished skin to reveal underlying areas of fresher, younger-looking skin. Our VitaGlow Peel combines Retinol, Vitamin C, and Vitamin B3 to treat hyperpigmentation and stimulate regeneration.'
            },
            {
                title: 'MORPHEUS8',
                description: 'Morpheus8 is a cutting-edge dermatological procedure that combines fractional microneedling with radiofrequency energy to remodel the skin\'s deeper layers. By delivering controlled heat through ultrafine needles, it stimulates collagen and elastin production. It reduces active acne, improves acne scarring, minimises enlarged pores, and smooths fine lines.'
            },
            {
                title: 'CARBON GLOW TREATMENT',
                description: 'A powerful yet gentle skin rejuvenation treatment designed to instantly brighten and refine the skin. A thin layer of medical-grade carbon is applied to the face, absorbing excess oil and dirt. When the laser passes over the carbon, it breaks it down along with absorbed impurities — deep cleansing pores, reducing acne, removing blackheads, and tightening the skin.'
            }
        ]
    },
    {
        id: 2,
        title: 'Anti-Ageing & Wrinkle Treatments',
        slug: 'anti-aging-treatments',
        category: 'Anti-Aging',
        categorySlug: 'anti-aging',
        shortDescription: 'Restore youthful volume, smooth wrinkles, and lift sagging skin with advanced injectables and therapies.',
        description: '<p>The ageing process typically begins in your mid-twenties. Sun exposure, stress, lifestyle habits, and genetics can accelerate early signs like fine lines, loss of volume, and reduced skin elasticity. At D\'CosMedis, we believe in natural-looking rejuvenation. Our comprehensive range of non-surgical anti-ageing treatments focuses on restoring lost volume, relaxing dynamic wrinkles, and stimulating your body\'s own collagen production.</p>',
        duration: 'Varies',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1588776814546-ec7e0bf1f1b7?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'BOTOX®',
                description: 'Botox® is a highly purified protein injection used to temporarily relax the specific facial muscles responsible for causing dynamic wrinkles (such as frown lines, crow\'s feet, and forehead lines). By easing these muscle contractions, the overlying skin smooths out, resulting in a refreshed and rested appearance. D\'CosMedis pioneered Botox in India and focuses on delivering natural, non-frozen results.'
            },
            {
                title: 'DERMAL FILLERS',
                description: 'As we age, our face naturally loses subcutaneous fat, leading to sunken cheeks, hollow eyes, and prominent facial folds. Dermal Fillers are USFDA-approved injectable gels (typically made of Hyaluronic Acid, a naturally occurring substance in the body) used to instantly restore lost volume, plump thin lips, smooth deep creases, and enhance facial contours like the jawline and chin.'
            },
            {
                title: 'EXOSOMES THERAPY',
                description: 'Exosomes are cutting-edge stem cell-derived nanoparticles packed with growth factors, peptides, and proteins. When applied to the skin (usually via microneedling), they act as powerful messengers, instructing skin cells to regenerate, repair damage, and rapidly increase collagen and elastin production. It significantly improves skin texture, firmness, and overall health.'
            },
            {
                title: 'GFC (ADVANCED PRP)',
                description: 'Growth Factor Concentrate (GFC) is a highly advanced form of PRP (Platelet-Rich Plasma). It involves extracting your own blood, processing it to isolate the most potent growth factors, and injecting them back into the skin. This concentrated serum stimulates cellular renewal, boosts collagen, and smooths fine lines for a naturally radiant, youthful glow.'
            },
            {
                title: 'THREAD LIFTS',
                description: 'A PDO Thread Lift is a minimally invasive procedure that uses dissolvable medical-grade threads to physically lift and tighten sagging skin on the face, neck, or jawline. Beyond the immediate lifting effect, the presence of the threads stimulates the body\'s natural collagen production in the treated areas, providing ongoing skin firming even after the threads have dissolved.'
            }
        ]
    },
    {
        id: 3,
        title: 'Hair Treatments',
        slug: 'hair-treatments',
        category: 'Hair',
        categorySlug: 'hair',
        shortDescription: 'Regrow and restore thinning hair with our advanced clinical therapies and transplants.',
        description: '<p>Hair thinning, breakage, and loss can result from stress, hormonal changes, genetics, or nutritional deficiencies. Early intervention is key. D\'CosMedis offers advanced, clinically proven solutions including Dermaneedling, Exosomes Therapy, GFC, and Hair Transplant.</p>',
        duration: 'Varies',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'ADVANCED GFC FOR HAIR',
                description: 'Growth Factor Concentrate (GFC) therapy uses your body\'s own potent growth factors to stimulate dormant hair follicles, increase blood circulation to the scalp, and promote thicker, healthier hair growth. It is highly effective for reducing hair fall and treating early to moderate stages of hair thinning.'
            },
            {
                title: 'EXOSOMES FOR HAIR',
                description: 'Stem cell-derived Exosomes therapy is one of the latest breakthroughs in hair restoration. These powerful nanoparticles send regenerative signals directly to hair follicles, accelerating cellular repair, prolonging the hair growth phase, and significantly improving hair density and scalp health.'
            },
            {
                title: 'DERMANEEDLING',
                description: 'Dermaneedling uses fine, medical-grade needles to create micro-channels in the scalp. This process not only stimulates the scalp\'s natural healing and blood flow but also drastically enhances the absorption and efficacy of topical hair-growth serums and treatments applied during the session.'
            },
            {
                title: 'HAIR TRANSPLANT',
                description: 'For advanced hair loss, D\'CosMedis offers state-of-the-art Hair Transplant procedures (like FUE). This minimally invasive surgery involves extracting healthy hair follicles from a donor area (usually the back of the head) and meticulously implanting them into thinning or bald areas, delivering permanent, natural-looking results.'
            }
        ]
    },
    {
        id: 4,
        title: 'IV Infusion Drips',
        slug: 'iv-drip-therapy',
        category: 'IV Drips',
        categorySlug: 'iv-drips',
        shortDescription: 'Doctor-supervised IV infusions for immunity, energy, hair health and skin glow.',
        description: '<p>IV therapy involves the administration of essential vitamins, minerals, and antioxidants directly into the bloodstream. This bypasses the digestive system, ensuring 100% absorption and immediate availability for cellular use. Administered in a relaxing, clinical environment under doctor supervision.</p>',
        duration: '30–45 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'IMMUNITY BOOST',
                description: 'Packed with high-dose Vitamin C, Zinc, and essential B-vitamins, this drip is designed to strengthen your immune system, fight off seasonal illnesses, and promote vibrant health year-round.'
            },
            {
                title: 'ENERGY BOOST',
                description: 'Formulated to combat fatigue, jet lag, and burnout. This energizing blend replenishes depleted nutrients, supports cellular energy production, and leaves you feeling refreshed and revitalized.'
            },
            {
                title: 'HAIR RESTORE',
                description: 'A targeted infusion of Biotin, essential amino acids, and minerals designed to nourish hair follicles from within, strengthen hair shafts, reduce hair fall, and support thicker, healthier hair growth.'
            },
            {
                title: 'METABOOST',
                description: 'This metabolism-enhancing drip includes specialized amino acids and vitamins that support liver function, aid in fat metabolism, and boost natural energy levels to support your fitness and weight-loss goals.'
            },
            {
                title: 'RADIANT ANTIOXIDANT',
                description: 'Featuring powerful antioxidants like Glutathione and Vitamin C, this "glow drip" combats oxidative stress, flushes out toxins, lightens pigmentation, and restores a luminous, even complexion from the inside out.'
            }
        ]
    },
    {
        id: 5,
        title: 'Laser Hair Reduction',
        slug: 'laser-hair-reduction',
        category: 'Laser',
        categorySlug: 'laser',
        shortDescription: 'USFDA-approved laser hair reduction safe for all skin tones, including brown skin.',
        description: '<p>Laser hair reduction is a safe and long-term solution for unwanted hair. At D\'CosMedis, we use USFDA-approved diode and Nd:YAG lasers with advanced cooling systems to ensure maximum comfort and efficacy. Our protocols are specifically tailored to be safe and effective for Indian/brown skin types.</p>',
        duration: 'Varies',
        price: '₹3,000 onwards',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'FULL FACE AND NECK',
                description: 'Safely and gently removes unwanted facial hair, including upper lip, chin, sideburns, and neck, providing smooth skin without the irritation of threading or waxing.'
            },
            {
                title: 'UNDERARMS',
                description: 'A quick and highly effective treatment that reduces underarm hair, minimizes ingrown hairs, and helps lighten darkened underarm skin caused by constant shaving or friction.'
            },
            {
                title: 'BIKINI LINE',
                description: 'Provides long-lasting smoothness and completely eliminates the discomfort, razor bumps, and ingrown hairs commonly associated with traditional hair removal methods in this sensitive area.'
            },
            {
                title: 'FULL BODY',
                description: 'A comprehensive package covering arms, legs, back, abdomen, and more. Enjoy the freedom of permanently reduced hair growth and impeccably smooth skin all over.'
            }
        ]
    },
    {
        id: 6,
        title: 'Lifting & Contouring',
        slug: 'lifting-contouring',
        category: 'Lifting & Contouring',
        categorySlug: 'lifting-contouring',
        shortDescription: 'Non-surgical skin lifting and body sculpting with FDA-approved technologies.',
        description: '<p>Skin loses its natural firmness and definition with age or weight changes—leading to sagging. D\'CosMedis offers the world\'s most advanced, non-surgical options to restore structure, definition, and tone without surgery using only FDA-approved technologies.</p>',
        duration: 'Varies',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1611625618313-68b87aaa0626?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'ULTHERAPY®',
                description: 'The only FDA-cleared, non-invasive treatment that lifts the neck, chin, and brow, and improves lines and wrinkles on the upper chest. Ultherapy uses focused ultrasound to stimulate collagen deep within the skin, incorporating traditional ultrasound imaging so practitioners can see the layers of tissue they are treating.'
            },
            {
                title: 'THERMAGE®',
                description: 'Thermage® uses radiofrequency technology to heat the deep, collagen-rich layers of your skin. The heat helps tighten existing collagen and stimulate the formation of new collagen, resulting in smoother, tighter skin and more defined contours on the face, eyes, and body in just a single session.'
            },
            {
                title: 'SUBLIME DERMALIFT',
                description: 'Combining bi-polar radiofrequency and light energies, Sublime precisely heats the dermal tissue, stimulating collagen production within the target treatment area. Fine wrinkles are reduced, facial contours improved, and overall skin quality reveals a much smoother, more even complexion.'
            },
            {
                title: 'COOLSCULPTING®',
                description: 'An FDA-cleared fat-freezing procedure that uses controlled cooling to safely target and eliminate diet- and exercise-resistant fat. The treated fat cells are crystallized (frozen), then die, and are naturally processed and eliminated by the body, resulting in permanent fat reduction in the treated area.'
            },
            {
                title: 'EMSCULPT®',
                description: 'The only procedure to help both women and men build muscle and sculpt their body non-invasively. EMSCULPT uses High-Intensity Focused Electromagnetic (HIFEM) technology to induce supramaximal muscle contractions not achievable through voluntary workouts, equivalent to doing 20,000 crunches or squats in 30 minutes.'
            }
        ]
    },
    {
        id: 7,
        title: 'Pigmentation Treatments',
        slug: 'pigmentation-treatments',
        category: 'Skin',
        categorySlug: 'skin',
        shortDescription: 'Reduce dark spots, melasma, and uneven skin tone with advanced laser and peel treatments.',
        description: '<p>Pigmentation occurs due to an increase in melanin production, leading to dark spots, sun damage, melasma, and uneven skin tone. At D\'CosMedis, we combine deep chemical peels with advanced QSWITCH laser technology to deliver visible, lasting results for all types of hyperpigmentation.</p>',
        duration: 'Varies',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'LASERBRITE (QSWITCH)',
                description: 'LaserBrite utilizes state-of-the-art QSWITCH laser technology to shatter deep-seated pigment particles while leaving surrounding tissue unharmed. It is the ultimate solution for stubborn dark spots, freckles, melasma, and overall skin brightening, with minimal to no downtime.'
            },
            {
                title: 'SKIN BRIGHTENING PEEL',
                description: 'A specialized peel blending unique brightening acids and antioxidants. It gently sloughs away the dull, pigmented surface layer, revealing an instantly brighter, more luminous, and even-toned complexion beneath. Ideal for treating sun damage and tanning.'
            },
            {
                title: 'CHEMICAL PEELS',
                description: 'Medical-grade exfoliation tailored to your specific pigmentation type. Peels (such as TCA, Glycolic, or Lactic acid) accelerate cell turnover, stripping away hyperpigmented skin cells and stimulating the growth of fresh, unblemished skin for a clearer, more radiant appearance.'
            }
        ]
    },
    {
        id: 8,
        title: 'Hitech Facials',
        slug: 'hitech-facials',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Advanced facials combining cutting-edge technology and medical-grade ingredients.',
        description: '<p>Hitech Facials incorporate the latest technologies like dermal infusion, microcurrents, and LED light therapies to fundamentally transform skin health and appearance, going far beyond traditional spa facials.</p>',
        duration: '60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'NEOCOLLAGEN FACIAL',
                description: 'The Neocollagen Facial is specifically designed to ignite your skin\'s natural collagen and elastin production processes. By deeply infusing targeted peptides and employing advanced skin-heating technology, it restores volume, firmness, and significantly reduces the appearance of aging.'
            },
            {
                title: 'ULTRASONIC FACIAL (HIFU)',
                description: 'Utilizing High-Intensity Focused Ultrasound (HIFU), this facial gently heats the deep muscular layers of the face. This promotes an immediate tightening effect and long-term lifting over several months, redefining the jawline and cheekbones without surgery or downtime.'
            },
            {
                title: 'LASERBRITE FACIAL',
                description: 'An intensive brightening treatment that combines the power of QSWITCH laser technology with deep hydration protocols. It rapidly breaks down superficial pigmentation, refines pore size, and leaves the skin with an unmistakable, luminous glow.'
            },
            {
                title: 'CARBON GLOW TREATMENT',
                description: 'Also known as the "Hollywood Peel," this treatment involves applying medical-grade liquid carbon to the face. A laser is then used to blast away the carbon, taking dirt, oil, and dead skin cells with it. It instantly clears pores, reduces acne, and provides an immediate, radiant glow.'
            }
        ]
    },
    {
        id: 9,
        title: 'Signature Medifacials',
        slug: 'signature-medifacials',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Customised signature medifacials for deep cleansing, hydration, and an instant glow.',
        description: '<p>Our Signature Medifacials are customized to target your unique skin concerns. Combining medical-grade products with advanced techniques, these facials promote deep cleansing, intense hydration, and a noticeable, long-lasting glow.</p>',
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'OXYBLAST FACIAL',
                description: 'A deeply hydrating treatment that infuses pure oxygen and specialized serums into the skin. It instantly plumps fine lines, accelerates cellular turnover, and revitalizes tired, dull skin, leaving you with a fresh, dewy complexion.'
            },
            {
                title: 'CRYSTAL CLEAR FACIAL',
                description: 'Utilizing medical-grade microdermabrasion, this facial gently buffs away the outermost layer of dead skin cells. It effectively unclogs pores, smooths rough texture, and allows for much deeper penetration of hydrating serums applied during the treatment.'
            },
            {
                title: 'GLASS GLOSS FACIAL',
                description: 'Inspired by the Korean "glass skin" trend, this intensive multi-step facial focuses on extreme hydration and barrier repair. Using deeply penetrating hyaluronic acid and peptide complexes, it leaves the skin incredibly smooth, clear, and highly reflective.'
            },
            {
                title: 'ILLUMINATING FACIAL',
                description: 'Designed specifically for dull, pigmented skin. This facial uses high-potency Vitamin C and gentle enzymatic exfoliation to instantly brighten the complexion, fade dark spots over time, and protect the skin against environmental free-radical damage.'
            }
        ]
    },
    {
        id: 10,
        title: 'Medical Grade Facials',
        slug: 'medical-grade-facials',
        category: 'Facials',
        categorySlug: 'facials',
        shortDescription: 'Clinically formulated medical grade facials to address stubborn pigmentation, acne, and aging.',
        description: '<p>Administered under clinical supervision, our Medical Grade Facials use potent active ingredients that penetrate deeper than standard spa facials, effectively treating complex conditions like active acne, severe melasma, and deep fine lines with medical-grade safety and precision.</p>',
        duration: '45–60 minutes',
        price: 'On Consultation',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
        gallery: [],
        subTreatments: [
            {
                title: 'ACNE CLEAR FACIAL',
                description: 'A targeted clinical treatment for acne-prone skin. It includes deep pore extraction, salicylic acid exfoliation to clear congestion, and calming LED blue light therapy to destroy acne-causing bacteria and reduce inflammation.'
            },
            {
                title: 'ADVANCED BRIGHTENING FACIAL',
                description: 'A potent facial designed to tackle stubborn hyperpigmentation and melasma. It utilizes a combination of medical-grade tyrosinase inhibitors and gentle chemical peeling to suppress excess melanin production and dramatically even out skin tone.'
            },
            {
                title: 'AGE DEFY FACIAL',
                description: 'A comprehensive anti-ageing facial that combines mild resurfacing, deep hydration, and collagen-stimulating peptides. It is designed to firm sagging skin, smooth out deep wrinkles, and restore a youthful, plump appearance.'
            }
        ]
    }
];
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
