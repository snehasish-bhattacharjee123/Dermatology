import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ArrowRight, Flame, Palette, Sparkles, Scissors, Eye, Sun, Search, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import { Caption } from '../ui/Typography'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'Treatments',
        path: '/treatments',
        megaMenuFeatured: {
            sidebarLinks: [
                { name: 'Acne Treatment', path: '/treatments/acne' },
                { name: 'Anti aging treatment', path: '/treatments/anti-aging' },
                { name: 'Hair Treatment', path: '/treatments/hair' },
                { name: 'IV drips', path: '/treatments/iv-drips' },
                { name: 'Laser hair reduction', path: '/treatments/laser-hair-reduction' },
                { name: 'Lifting And Contouring', path: '/treatments/lifting-and-contouring' },
                { name: 'Pigmentation', path: '/treatments/pigmentation' },
                { name: 'Signature Facial', path: '/treatments/signature-medifacials' },
                { name: 'Medical Grade Facials', path: '/treatments/medical-grade-facials' },
            ],
            sidebarBtnText: 'All Treatments',
            sidebarBtnLink: '/treatments',
            featuredItems: [
                {
                    title: 'Hitech Laser Facial',
                    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
                    linkText: 'Explore more',
                    path: '/treatments/hitech-facials'
                },
                {
                    title: 'Acne Treatment',
                    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80',
                    linkText: 'Explore more',
                    path: '/treatments/acne'
                }
            ],
            promoImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
            promoText: 'Not sure which treatment is right for you?',
            promoLink: 'https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!',
            promoBtnText: 'Chat with us'
        }
    },
    {
        name: 'Concerns',
        path: '/concerns',
        label: 'Classification by Concern',
        megaMenuColumns: [
            {
                col: 1,
                groups: [
                    {
                        category: 'Instant glow and Hydration',
                        items: [
                            { name: 'Signature Medifacials', path: '/treatments/signature-medifacials' },
                            { name: 'Hitech Facials', path: '/treatments/hitech-facials' },
                            { name: 'Medical Grade Facials', path: '/treatments/medical-grade-facials' },
                            { name: 'Neocollagen Facial', path: '/treatments/neocollagen-facial' },
                            { name: 'Ultrasonic Facial (HIFU)', path: '/treatments/ultrasonic-facial' },
                            { name: 'LaserBrite (QSWITCH)', path: '/treatments/laserbrite' },
                            { name: 'Carbon Glow', path: '/treatments/carbon-glow' },
                            { name: 'Oxyblast', path: '/treatments/oxyblast' },
                            { name: 'Crystal', path: '/treatments/crystal' },
                            { name: 'Glass Gloss', path: '/treatments/glass-gloss' },
                            { name: 'Illuminating', path: '/treatments/illuminating' },
                            { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' },
                        ]
                    }
                ]
            },
            {
                col: 2,
                groups: [
                    {
                        category: 'Acne',
                        items: [
                            { name: 'Morpheus8', path: '/treatments/morpheus8' },
                            { name: 'Intense Acne Peel', path: '/treatments/intense-acne-peel' },
                            { name: 'eMatrix', path: '/treatments/ematrix' },
                            { name: 'Professional Peels', path: '/treatments/professional-peels' },
                            { name: 'Carbon Glow', path: '/treatments/carbon-glow' },
                        ]
                    },
                    {
                        category: 'IV Infusion Drips',
                        items: [
                            { name: 'IV Drips', path: '/treatments/iv-drips' },
                            { name: 'Immunity Boost IV Infusion', path: '/treatments/immunity-boost-iv' },
                            { name: 'Energy Boost IV Infusion', path: '/treatments/energy-boost-iv' },
                            { name: 'Hair Restore IV Infusion', path: '/treatments/hair-restore-iv' },
                            { name: 'Metaboost IV Infusion', path: '/treatments/metaboost-iv' },
                            { name: 'Radiant Antioxidant IV Wellness Drip', path: '/treatments/radiant-antioxidant-iv' },
                        ]
                    }
                ]
            },
            {
                col: 3,
                groups: [
                    {
                        category: 'Anti Aging',
                        items: [
                            { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                            { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' },
                            { name: 'GFC', path: '/treatments/gfc' },
                            { name: 'Threadlift', path: '/treatments/threadlift' },
                        ]
                    },
                    {
                        category: 'Lifting & Contouring',
                        items: [
                            { name: 'Ultherapy', path: '/treatments/ultherapy' },
                            { name: 'Thermage', path: '/treatments/thermage' },
                            { name: 'Dermalift', path: '/treatments/dermalift' },
                            { name: 'Coolsculpt', path: '/treatments/coolsculpt' },
                            { name: 'Emsculpt', path: '/treatments/emsculpt' },
                        ]
                    }
                ]
            },
            {
                col: 4,
                groups: [
                    {
                        category: 'Hair',
                        items: [
                            { name: 'Advanced GFC', path: '/treatments/advanced-gfc' },
                            { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                            { name: 'Dermaneedling', path: '/treatments/dermaneedling' },
                            { name: 'Hair Transplant', path: '/treatments/hair-transplant' },
                        ]
                    },
                    {
                        category: 'Pigmentation',
                        items: [
                            { name: 'LaserBrite (QSWITCH)', path: '/treatments/laserbrite' },
                            { name: 'Skin Brightening Peel', path: '/treatments/skin-brightening-peel' },
                            { name: 'Chemical Peels', path: '/treatments/chemical-peels' },
                        ]
                    },
                    {
                        category: 'Body',
                        items: [
                            { name: 'Coolsculpting', path: '/treatments/coolsculpting' },
                            { name: 'Emsculpt', path: '/treatments/emsculpt' },
                            { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-reduction' },
                            { name: 'Bridal Skincare', path: '/treatments/bridal-skincare' },
                        ]
                    }
                ]
            }
        ],
        promoImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        promoText: 'Not sure which treatment is right for you?',
        promoLink: 'https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!',
        promoBtnText: 'Chat with us'
    },
    { name: 'Gallery', path: '/gallery' },
    // { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [activeMobileMenu, setActiveMobileMenu] = useState(null)
    const [mobileMenuStack, setMobileMenuStack] = useState([])
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const [expandedMobileItems, setExpandedMobileItems] = useState({
        TREATMENTS: false,
        CONCERNS: false,
        'SOCIAL MEDIA': false,
        'CONTACT US': false
    })

    const [expandedConcerns, setExpandedConcerns] = useState({
        'Instant glow and Hydration': false,
        'Acne': false,
        'IV Infusion Drips': false,
        'Anti Aging': false,
        'Lifting & Contouring': false,
        'Hair': false,
        'Pigmentation': false,
        'Body': false
    })

    const toggleMobileItem = (item) => {
        setExpandedMobileItems(prev => ({
            ...prev,
            [item]: !prev[item]
        }))
    }

    const toggleConcernCategory = (category) => {
        setExpandedConcerns(prev => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    const treatmentSubitems = [
        { name: 'Acne Treatment', path: '/treatments/acne-treatments' },
        { name: 'Anti aging treatment', path: '/treatments/anti-aging-treatments' },
        { name: 'Hair Treatment', path: '/treatments/hair-treatments' },
        { name: 'IV drips', path: '/treatments/iv-drip-therapy' },
        { name: 'Lifting And Contouring', path: '/treatments/lifting-contouring' },
        { name: 'Pigmentation', path: '/treatments/pigmentation-treatments' },
        { name: 'Signature Facials', path: '/treatments/signature-medifacials' },
        { name: 'Medical Grade Facials', path: '/treatments/medical-grade-facials' },
        { name: 'All Treatments', path: '/treatments' }
    ]

    const concernCategories = [
        {
            category: 'Instant glow and Hydration',
            items: [
                { name: 'Signature Medifacials', path: '/treatments/signature-medifacials' },
                { name: 'Hitech Facials', path: '/treatments/hitech-facials' },
                { name: 'Medical Grade Facials', path: '/treatments/medical-grade-facials' },
                { name: 'Neocollagen Facial', path: '/treatments/neocollagen-facial' },
                { name: 'Ultrasonic Facial (HIFU)', path: '/treatments/ultrasonic-facial' },
                { name: 'LaserBrite (QSWITCH)', path: '/treatments/laserbrite' },
                { name: 'Carbon Glow', path: '/treatments/carbon-glow' },
                { name: 'Oxyblast', path: '/treatments/oxyblast' },
                { name: 'Crystal', path: '/treatments/crystal' },
                { name: 'Glass Gloss', path: '/treatments/glass-gloss' },
                { name: 'Illuminating', path: '/treatments/illuminating' },
                { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' }
            ]
        },
        {
            category: 'Acne',
            items: [
                { name: 'Morpheus8', path: '/treatments/morpheus8' },
                { name: 'Intense Acne Peel', path: '/treatments/intense-acne-peel' },
                { name: 'eMatrix', path: '/treatments/ematrix' },
                { name: 'Professional Peels', path: '/treatments/professional-peels' },
                { name: 'Carbon Glow', path: '/treatments/carbon-glow' }
            ]
        },
        {
            category: 'IV Infusion Drips',
            items: [
                { name: 'IV Drips', path: '/treatments/iv-drips' },
                { name: 'Immunity Boost IV Infusion', path: '/treatments/immunity-boost-iv' },
                { name: 'Energy Boost IV Infusion', path: '/treatments/energy-boost-iv' },
                { name: 'Hair Restore IV Infusion', path: '/treatments/hair-restore-iv' },
                { name: 'Metaboost IV Infusion', path: '/treatments/metaboost-iv' },
                { name: 'Radiant Antioxidant IV Wellness Drip', path: '/treatments/radiant-antioxidant-iv' }
            ]
        },
        {
            category: 'Anti Aging',
            items: [
                { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                { name: 'Dermal Fillers', path: '/treatments/dermal-fillers' },
                { name: 'GFC', path: '/treatments/gfc' },
                { name: 'Threadlift', path: '/treatments/threadlift' }
            ]
        },
        {
            category: 'Lifting & Contouring',
            items: [
                { name: 'Ultherapy', path: '/treatments/ultherapy' },
                { name: 'Thermage', path: '/treatments/thermage' },
                { name: 'Dermalift', path: '/treatments/dermalift' },
                { name: 'Coolsculpt', path: '/treatments/coolsculpt' },
                { name: 'Emsculpt', path: '/treatments/emsculpt' }
            ]
        },
        {
            category: 'Hair',
            items: [
                { name: 'Advanced GFC', path: '/treatments/advanced-gfc' },
                { name: 'Exosomes Therapy', path: '/treatments/exosomes-therapy' },
                { name: 'Dermaneedling', path: '/treatments/dermaneedling' },
                { name: 'Hair Transplant', path: '/treatments/hair-transplant' }
            ]
        },
        {
            category: 'Pigmentation',
            items: [
                { name: 'LaserBrite (QSWITCH)', path: '/treatments/laserbrite' },
                { name: 'Skin Brightening Peel', path: '/treatments/skin-brightening-peel' },
                { name: 'Chemical Peels', path: '/treatments/chemical-peels' }
            ]
        },
        {
            category: 'Body',
            items: [
                { name: 'Coolsculpting', path: '/treatments/coolsculpting' },
                { name: 'Emsculpt', path: '/treatments/emsculpt' },
                { name: 'Laser Hair Reduction', path: '/treatments/laser-hair-reduction' },
                { name: 'Bridal Skincare', path: '/treatments/bridal-skincare' }
            ]
        }
    ]

    const socialSubitems = [
        { name: 'Instagram', path: 'https://www.instagram.com/aaynaclinic_official/', isExternal: true },
        { name: 'Facebook', path: 'https://www.facebook.com/aaynaclinic/', isExternal: true },
        { name: 'Youtube', path: 'https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q/', isExternal: true }
    ]

    const contactSubitems = [
        { name: 'Delhi: +91 11 2634 7890', path: 'tel:+911126347890', isExternal: true },
        { name: 'Gurugram: +91 1234567890', path: 'tel:+911234567890', isExternal: true },
        { name: 'Ludhiana: +91 99875 87147', path: 'tel:+919987587147', isExternal: true },
        { name: 'Book Appointment', path: '/book' },
        { name: 'Chat on WhatsApp', path: 'https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!', isExternal: true }
    ]

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileOpen(false)
        setActiveDropdown(null)
        setActiveMobileMenu(null)
        setMobileMenuStack([])
        setExpandedMobileItems({
            TREATMENTS: false,
            CONCERNS: false,
            'SOCIAL MEDIA': false,
            'CONTACT US': false
        })
        setExpandedConcerns({
            'Instant glow and Hydration': false,
            'Acne': false,
            'IV Infusion Drips': false,
            'Anti Aging': false,
            'Lifting & Contouring': false,
            'Hair': false,
            'Pigmentation': false,
            'Body': false
        })
    }, [location])

    const handleMobileMenuClick = (linkName) => {
        setMobileMenuStack([...mobileMenuStack, linkName])
        setActiveMobileMenu(linkName)
    }

    const handleMobileMenuBack = () => {
        const newStack = [...mobileMenuStack]
        newStack.pop()
        setMobileMenuStack(newStack)
        setActiveMobileMenu(newStack.length > 0 ? newStack[newStack.length - 1] : null)
    }

    return (
        <>
            {/* Top Bar - Hidden on mobile */}
            <div
                className="fixed top-0 left-0 w-full z-[1001] transition-all duration-500 hidden sm:block"
                style={{
                    background: 'var(--color-wine)',
                    height: isScrolled ? '0px' : 'var(--header-top-bar-height)',
                    overflow: 'hidden',
                    opacity: isScrolled ? 0 : 1,
                }}
            >
                <div className="container h-full flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-2 text-white tracking-wide text-xs font-medium hover:text-white/80 transition-colors"
                        >
                            <Phone size={12} strokeWidth={2.5} />
                            <span>+91 11 2634 7890</span>
                        </a>
                        <span className="text-white/50 text-xs hidden md:inline" aria-hidden="true">|</span>
                        <Caption variant="label-white" className="hidden md:inline opacity-90">
                            Mon - Sat: 10 AM - 7 PM
                        </Caption>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Social Icons
                        <div className="hidden lg:flex items-center gap-3 mr-2">
                            <a href="https://www.instagram.com/aaynaclinic_official/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                                <Instagram size={14} />
                            </a>
                            <a href="https://www.facebook.com/aaynaclinic/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                                <Facebook size={14} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                                <Youtube size={14} />
                            </a>
                        </div> */}
                        <div className="hidden sm:flex items-center bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm transition-all duration-300 hover:bg-white/30 cursor-default">
                            <MapPin size={12} className="text-white ml-1 mr-3 flex-shrink-0" />
                            <span className="font-body text-[11px] font-bold tracking-[2px] uppercase text-white mt-[1px]">
                                Delhi <span className="text-white/50 mx-1.5">&bull;</span> Gurugram <span className="text-white/50 mx-1.5">&bull;</span> Ludhiana
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Nav - Refined */}
            <header
                className="fixed left-0 w-full z-[1000] transition-all duration-500 overflow-visible"
                style={{
                    top: isScrolled ? '0px' : 'var(--header-top-bar-height)',
                    background: isScrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
                }}
            >
                <div
                    className="container flex items-center justify-between transition-all duration-500"
                    style={{ height: isScrolled ? 'var(--header-height-scrolled)' : 'var(--header-height)' }}
                >
                    {/* Logo - Improved */}
                    <Link to="/" className="flex items-center gap-3" aria-label="D'CosMedis Clinic - Home">
                        <div className="flex flex-col">
                            <span
                                className="text-2xl tracking-[6px] uppercase font-medium"
                                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-wine)' }}
                            >
                                D'COSMEDIS
                            </span>
                            <Caption variant="caption" style={{ color: 'var(--color-text-light)', letterSpacing: '3px', fontSize: '0.55rem', textTransform: 'uppercase', fontWeight: 600 }}>
                                SKIN &bull; HAIR &bull; WELLNESS
                            </Caption>
                        </div>
                    </Link>

                    {/* Desktop Nav - Refined spacing */}
                    <nav className={`hidden lg:flex items-center gap-3 h-full transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className={`group/nav z-10 h-full flex items-center ${link.dropdown ? 'relative' : ''}`}
                                onMouseEnter={() => (link.dropdown || link.megaMenu || link.megaMenuWithImages || link.megaMenuColumns || link.megaMenuFeatured) && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path || '#'}
                                    className={`flex items-center gap-1.5 px-4 py-2 font-medium tracking-wider uppercase transition-all duration-300 text-sm rounded-md hover:bg-cream ${location.pathname === link.path
                                        ? 'text-wine'
                                        : 'text-dark hover:text-wine'
                                        }`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                    aria-haspopup={link.dropdown || link.megaMenu || link.megaMenuWithImages || link.megaMenuColumns || link.megaMenuFeatured ? 'true' : undefined}
                                    aria-expanded={(link.dropdown || link.megaMenu || link.megaMenuWithImages || link.megaMenuColumns || link.megaMenuFeatured) && activeDropdown === link.name ? 'true' : 'false'}
                                >
                                    {link.name}
                                    {(link.dropdown || link.megaMenu || link.megaMenuWithImages || link.megaMenuColumns || link.megaMenuFeatured) && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>

                                {/* Standard Dropdown */}
                                {link.dropdown && (
                                    <div
                                        className={`absolute top-[100%] left-1/2 -translate-x-1/2 shadow-xl z-[100] w-[240px] bg-white rounded-xl transition-all duration-300 origin-top overflow-hidden border-t-2 border-wine
                                            ${activeDropdown === link.name ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
                                    >
                                        {link.dropdown.map((item, index) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className={`block px-5 py-3 text-sm transition-all duration-200 hover:pl-6 hover:text-wine ${index !== link.dropdown.length - 1 ? 'border-b border-border/30' : ''} ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
                                                style={{ fontFamily: 'var(--font-body)' }}
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile Toggle + Search Button */}
                    <div className="flex items-center" style={{ gap: '4px' }}>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-black/5 hover:text-wine text-dark rounded-full"
                            aria-label="Open Search"
                        >
                            <Search size={20} />
                        </button>

                        <Link
                            to="/book"
                            className="btn btn-primary header-book-btn"
                        >
                            Book Appointment
                        </Link>
                        <button
                            className="mobile-menu-btn p-2 hover:bg-cream rounded-lg transition-colors"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Full Width Search Overlay */}
                <div
                    className={`absolute inset-0 bg-white z-[1010] flex items-center justify-center transition-all duration-500 origin-top overflow-hidden border-b border-black/5 ${isSearchOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                >
                    <div className="container flex items-center gap-4 h-full">
                        <Search size={24} className="text-muted shrink-0" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full h-full text-lg md:text-xl bg-transparent border-none outline-none text-dark placeholder:text-muted/50 font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && searchQuery.trim()) {
                                    navigate(`/treatments?search=${encodeURIComponent(searchQuery)}`);
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                } else if (e.key === 'Escape') {
                                    setIsSearchOpen(false);
                                }
                            }}
                            autoFocus={isSearchOpen}
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="w-10 h-10 flex items-center justify-center transition-colors hover:bg-black/5 text-dark rounded-full shrink-0"
                            aria-label="Close Search"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Full Width Mega Menus */}
                {navLinks.map((link) => {
                    if (!link.megaMenu && !link.megaMenuWithImages && !link.megaMenuColumns && !link.megaMenuFeatured) return null;

                    const isOpen = activeDropdown === link.name;

                    return (
                        <div
                            key={`${link.name}-mega`}
                            className={`absolute top-[100%] left-0 w-full bg-white shadow-2xl transition-all duration-400 origin-top z-[90] border-t border-black/5 overflow-hidden
                                ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible pointer-events-none'}`}
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            <div className={`${link.megaMenuColumns || link.megaMenuFeatured ? 'w-full max-w-[1500px] mx-auto px-10' : 'container mx-auto'} transition-all duration-500 delay-75 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                {link.megaMenuFeatured && (
                                    <div className="flex w-full">
                                        <div className="w-[280px] py-10 pr-10 border-r border-black/5 shrink-0 flex flex-col">
                                            <ul className="space-y-4 flex-1">
                                                {link.megaMenuFeatured.sidebarLinks.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.path}
                                                            className={`text-[20px] transition-colors hover:text-wine block ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
                                                            style={{ fontFamily: 'var(--font-display)' }}
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {link.megaMenuFeatured.sidebarBtnText && (
                                                <div className="mt-8 pt-6">
                                                    <Link
                                                        to={link.megaMenuFeatured.sidebarBtnLink}
                                                        className="btn btn-primary w-full"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {link.megaMenuFeatured.sidebarBtnText} <ArrowRight size={16} className="ml-2" />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 py-10 px-10">
                                            <div className="grid grid-cols-2 gap-8 h-full">
                                                {link.megaMenuFeatured.featuredItems.map((item) => (
                                                    <div key={item.title} className="flex flex-col group cursor-pointer">
                                                        <div className="relative w-full aspect-square overflow-hidden mb-4 bg-cream/30">
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                            />
                                                            <div className="absolute inset-8 border border-white/40 pointer-events-none mix-blend-overlay flex items-center justify-center opacity-80">
                                                                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/40" />
                                                                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/40" />
                                                                <div className="absolute top-0 left-1/2 w-4 h-[2px] bg-white -translate-x-1/2 -translate-y-[1px]" />
                                                                <div className="absolute bottom-0 left-1/2 w-4 h-[2px] bg-white -translate-x-1/2 translate-y-[1px]" />
                                                                <div className="absolute left-0 top-1/2 w-[2px] h-4 bg-white -translate-y-1/2 -translate-x-[1px]" />
                                                                <div className="absolute right-0 top-1/2 w-[2px] h-4 bg-white -translate-y-1/2 translate-x-[1px]" />
                                                            </div>
                                                        </div>
                                                        <h3 className="text-[17px] font-medium text-[#6a6a7c] group-hover:text-wine transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                                                            {item.title}
                                                        </h3>
                                                        <Link
                                                            to={item.path}
                                                            className="text-[13px] text-muted hover:text-wine transition-colors mt-1.5 flex items-center gap-1"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            {item.linkText} <ArrowRight size={12} className="-rotate-45" />
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-[300px] xl:w-[350px] relative shrink-0">
                                            <img
                                                src={link.megaMenuFeatured.promoImage}
                                                alt="Promo"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-8 text-center">
                                                <h3 className="text-white text-3xl xl:text-4xl font-medium mb-6 leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {link.megaMenuFeatured.promoText}
                                                </h3>
                                                <a
                                                    href={link.megaMenuFeatured.promoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {link.megaMenuFeatured.promoBtnText} <ArrowRight size={16} className="ml-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {link.megaMenuColumns && (
                                    <div className="flex w-full">
                                        <div className="flex-1 py-8 pr-16">
                                            {link.label && (
                                                <h2 className="text-[16px] font-medium italic text-muted mb-6 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                                                    {link.label}
                                                </h2>
                                            )}
                                            <div className="grid grid-cols-4 gap-8">
                                                {link.megaMenuColumns.map((col) => (
                                                    <div key={col.col} className="col-span-1 flex flex-col gap-6">
                                                        {col.groups.map((group, idx) => (
                                                            <div key={group.category} className={`${idx !== 0 ? 'pt-6 border-t border-black/5' : ''}`}>
                                                                <h3 className="font-medium text-wine mb-3 text-[18px]" style={{ fontFamily: 'var(--font-display)' }}>
                                                                    {group.category}
                                                                </h3>
                                                                <ul className="space-y-1.5">
                                                                    {group.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                to={item.path}
                                                                                className={`text-[16px] transition-colors hover:text-wine block ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
                                                                                style={{ fontFamily: 'var(--font-body)' }}
                                                                                onClick={() => setActiveDropdown(null)}
                                                                            >
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-[300px] xl:w-[350px] relative shrink-0">
                                            <img
                                                src={link.promoImage}
                                                alt="Promo"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
                                                <h3 className="text-white text-3xl xl:text-4xl font-medium mb-6 leading-[1.2]" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {link.promoText}
                                                </h3>
                                                <a
                                                    href={link.promoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {link.promoBtnText} <ArrowRight size={16} className="ml-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {link.megaMenu && (
                                    <div className="py-10">
                                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
                                            {link.megaMenu.map((category) => (
                                                <div key={category.category} className="col-span-1">
                                                    <h3 className="font-medium text-wine border-b border-black/5 pb-3 mb-4 text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                                                        {category.category}
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {category.items.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    to={item.path}
                                                                    className={`text-[15px] transition-colors hover:text-wine block ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
                                                                    onClick={() => setActiveDropdown(null)}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {link.megaMenuWithImages && (
                                    <div className="py-10">
                                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
                                            <div>
                                                <h3 className="text-2xl font-medium text-dark" style={{ fontFamily: 'var(--font-display)' }}>
                                                    What Bothers You?
                                                </h3>
                                                <p className="text-sm text-muted mt-1">Explore our treatments for common skin concerns</p>
                                            </div>
                                            <Link
                                                to="/concerns"
                                                className="flex items-center gap-2 text-sm font-medium text-wine hover:text-wine-dark transition-colors"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                View All Concerns <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                                            {link.megaMenuWithImages.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    to={item.path}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-cream/20"
                                                >
                                                    <div className="relative h-48 overflow-hidden">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                                        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-sm">
                                                            {item.icon && <item.icon size={20} className="text-wine" />}
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                        <h4 className="text-white font-medium text-lg mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-white/80 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </header>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 z-[1098] bg-black/30 backdrop-blur-md transition-opacity duration-300 lg:hidden ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileOpen(false)}
                aria-hidden="true"
            />
            {/* Mobile Menu Drawer - Premium Ultra-Sleek Brand Layout */}
            <div
                className={`fixed top-0 right-0 h-full w-[100vw] sm:w-[85vw] max-w-[420px] bg-[#f5f0e1] z-[1099] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Header with simple "close" text on the right */}
                <div className="flex justify-end p-6 pb-4">
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="text-[#0d1319]/60 hover:text-[#954795] text-[14px] font-medium tracking-widest uppercase transition-colors p-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        close
                    </button>
                </div>

                {/* List of Menu Items - Modern Organic Spacing */}
                <nav className="px-8 pt-4 pb-12 flex flex-col gap-6">
                    {/* HOME */}
                    <div className="py-1">
                        <Link
                            to="/"
                            onClick={() => setIsMobileOpen(false)}
                            className="text-[#0d1319] text-[20px] tracking-[2px] uppercase font-bold hover:text-[#954795] transition-colors block"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            HOME
                        </Link>
                    </div>

                    {/* ABOUT */}
                    <div className="py-1">
                        <Link
                            to="/about"
                            onClick={() => setIsMobileOpen(false)}
                            className="text-[#0d1319] text-[20px] tracking-[2px] uppercase font-bold hover:text-[#954795] transition-colors block"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            ABOUT
                        </Link>
                    </div>

                    {/* TREATMENTS */}
                    <div className="py-1">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleMobileItem('TREATMENTS')}
                        >
                            <span
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['TREATMENTS'] ? 'text-[#954795]' : 'text-[#0d1319] hover:text-[#954795]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                TREATMENTS
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['TREATMENTS'] ? 'text-[#954795]' : 'text-[#0d1319]'}`}>
                                {expandedMobileItems['TREATMENTS'] ? '—' : '+'}
                            </span>
                        </div>
                        {/* Inline list - beautifully organic spacing, no borders */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${expandedMobileItems['TREATMENTS'] ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <ul className="pl-5 space-y-3.5 pb-2 pt-1">
                                {treatmentSubitems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-[#0d1319]/70 hover:text-[#954795] text-[15px] transition-colors block font-semibold py-0.5"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CONCERNS */}
                    <div className="py-1">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleMobileItem('CONCERNS')}
                        >
                            <span
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['CONCERNS'] ? 'text-[#954795]' : 'text-[#0d1319] hover:text-[#954795]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                CONCERNS
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['CONCERNS'] ? 'text-[#954795]' : 'text-[#0d1319]'}`}>
                                {expandedMobileItems['CONCERNS'] ? '—' : '+'}
                            </span>
                        </div>
                        {/* Nested Concerns Categories Accordion list */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${expandedMobileItems['CONCERNS'] ? 'max-h-[1600px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="pl-5 space-y-4 pb-2 pt-1">
                                {concernCategories.map((group) => (
                                    <div key={group.category} className="pl-0">
                                        <div
                                            className="flex items-center justify-between cursor-pointer py-2"
                                            onClick={() => toggleConcernCategory(group.category)}
                                        >
                                            <span
                                                className={`text-[15px] font-bold transition-colors ${expandedConcerns[group.category] ? 'text-[#954795]' : 'text-[#0d1319]/80 hover:text-[#954795]'}`}
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {group.category}
                                            </span>
                                            <span className={`text-xs font-bold select-none transition-colors ${expandedConcerns[group.category] ? 'text-[#954795]' : 'text-[#0d1319]/60'}`}>
                                                {expandedConcerns[group.category] ? '—' : '+'}
                                            </span>
                                        </div>
                                        {/* Subitems of this specific concern category */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${expandedConcerns[group.category] ? 'max-h-[450px] mt-1 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <ul className="pl-4 space-y-2.5 pb-2 pt-0.5">
                                                {group.items.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.path}
                                                            onClick={() => setIsMobileOpen(false)}
                                                            className="text-[#0d1319]/60 hover:text-[#954795] text-[14px] transition-colors block py-0.8 font-medium"
                                                            style={{ fontFamily: 'var(--font-body)' }}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                                {/* View All Concerns Link */}
                                {/* <div className="pt-2 pl-0">
                                    <Link
                                        to="/concerns"
                                        onClick={() => setIsMobileOpen(false)}
                                        className="text-[#954795] hover:text-[#6f346f] text-[15px] font-bold transition-colors block"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        View All Concerns →
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="py-1">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleMobileItem('SOCIAL MEDIA')}
                        >
                            <span
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['SOCIAL MEDIA'] ? 'text-[#954795]' : 'text-[#0d1319] hover:text-[#954795]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                SOCIAL MEDIA
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['SOCIAL MEDIA'] ? 'text-[#954795]' : 'text-[#0d1319]'}`}>
                                {expandedMobileItems['SOCIAL MEDIA'] ? '—' : '+'}
                            </span>
                        </div>
                        {/* Inline list */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${expandedMobileItems['SOCIAL MEDIA'] ? 'max-h-[200px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <ul className="pl-5 space-y-3.5 pb-2 pt-1">
                                {socialSubitems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsMobileOpen(false)}
                                            className="text-[#0d1319]/70 hover:text-[#954795] text-[15px] transition-colors block font-semibold py-0.5"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* GALLERY */}
                    <div className="py-1">
                        <Link
                            to="/gallery"
                            onClick={() => setIsMobileOpen(false)}
                            className="text-[#0d1319] text-[20px] tracking-[2px] uppercase font-bold hover:text-[#954795] transition-colors block"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            GALLERY
                        </Link>
                    </div>

                    {/* CONTACT US */}
                    <div className="py-1">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleMobileItem('CONTACT US')}
                        >
                            <span
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['CONTACT US'] ? 'text-[#954795]' : 'text-[#0d1319] hover:text-[#954795]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                CONTACT US
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['CONTACT US'] ? 'text-[#954795]' : 'text-[#0d1319]'}`}>
                                {expandedMobileItems['CONTACT US'] ? '—' : '+'}
                            </span>
                        </div>
                        {/* Inline list */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${expandedMobileItems['CONTACT US'] ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <ul className="pl-5 space-y-3.5 pb-2 pt-1">
                                {contactSubitems.map((item) => (
                                    <li key={item.name}>
                                        {item.isExternal ? (
                                            <a
                                                href={item.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setIsMobileOpen(false)}
                                                className="text-[#0d1319]/70 hover:text-[#954795] text-[15px] transition-colors block font-semibold py-0.5"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMobileOpen(false)}
                                                className="text-[#0d1319]/70 hover:text-[#954795] text-[15px] transition-colors block font-semibold py-0.5"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Toll Free / Footer Info at bottom of menu - sleek, centered, modern */}
                <div className="px-8 pb-12 pt-6 mt-4 text-center sm:text-left">
                    <p className="text-[#0d1319]/80 text-[14px] tracking-widest uppercase font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                        Toll Free Number
                    </p>
                    <a
                        href="tel:+918080125874"
                        className="text-[#954795] text-[18px] font-bold block mt-1 hover:text-[#6f346f] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        +91 80801 25874
                    </a>
                </div>
            </div>

        </>
    )
}
