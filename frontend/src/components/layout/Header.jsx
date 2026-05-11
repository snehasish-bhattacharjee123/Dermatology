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
            {/* Top Bar - Refined */}
            <div
                className="fixed top-0 left-0 w-full z-[1001] transition-all duration-500"
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
                        {/* Social Icons */}
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
                        </div>
                        <div className="hidden sm:flex items-center bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm transition-all duration-300 hover:bg-white/30 cursor-default">
                            <MapPin size={12} className="text-white mr-1.5 flex-shrink-0" />
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
                                                            className={`text-[15px] transition-colors hover:text-wine block ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
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
                                                        className="inline-flex items-center justify-center bg-[#6a6a7c] text-white px-6 py-2.5 text-sm hover:bg-wine transition-colors rounded-sm"
                                                        style={{ fontFamily: 'var(--font-body)' }}
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {link.megaMenuFeatured.sidebarBtnText} <ArrowRight size={14} className="ml-2 -rotate-45" />
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
                                                    className="px-6 py-2.5 border border-white text-white text-sm hover:bg-white hover:text-dark transition-colors backdrop-blur-sm"
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {link.megaMenuFeatured.promoBtnText} <ArrowRight size={14} className="inline ml-1 -rotate-45" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {link.megaMenuColumns && (
                                    <div className="flex w-full">
                                        <div className="flex-1 py-8 pr-16">
                                            {link.label && (
                                                <h2 className="text-[13px] font-medium italic text-muted mb-6 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                                                    {link.label}
                                                </h2>
                                            )}
                                            <div className="grid grid-cols-4 gap-8">
                                                {link.megaMenuColumns.map((col) => (
                                                    <div key={col.col} className="col-span-1 flex flex-col gap-6">
                                                        {col.groups.map((group, idx) => (
                                                            <div key={group.category} className={`${idx !== 0 ? 'pt-6 border-t border-black/5' : ''}`}>
                                                                <h3 className="font-medium text-wine mb-3 text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                                                                    {group.category}
                                                                </h3>
                                                                <ul className="space-y-1.5">
                                                                    {group.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                to={item.path}
                                                                                className={`text-[14px] transition-colors hover:text-wine block ${location.pathname === item.path ? 'text-wine font-medium' : 'text-muted'}`}
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
                                                    className="px-6 py-2 border border-white text-white text-sm hover:bg-white hover:text-dark transition-colors backdrop-blur-sm"
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {link.promoBtnText} <ArrowRight size={14} className="inline ml-1" />
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

            {/* Mobile Menu Slide-in Concept */}
            <div
                className={`fixed inset-0 z-[1098] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileOpen(false)}
                aria-hidden="true"
            />
            <div
                className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-white z-[1099] overflow-hidden transition-transform duration-500 lg:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-[50px] border-b border-black/10 px-4 sticky top-0 bg-white z-50">
                    {activeMobileMenu ? (
                        <button
                            onClick={handleMobileMenuBack}
                            className="h-[50px] w-[50px] flex items-center justify-center -ml-4 border-r border-black/10 hover:bg-black/5"
                        >
                            <ChevronDown size={20} className="rotate-90" />
                        </button>
                    ) : (
                        <div className="w-[50px] -ml-4" /> // Placeholder for spacing
                    )}

                    <span className="font-medium text-[15px] {activeMobileMenu ? 'text-dark' : 'text-transparent'}">
                        {activeMobileMenu || ''}
                    </span>

                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="h-[50px] w-[50px] flex items-center justify-center -mr-4 border-l border-black/10 hover:bg-black/5"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile Menu Container with Slider Action */}
                <div className="relative h-[calc(100%-50px)] overflow-x-hidden overflow-y-auto">
                    {/* Main Menu Layer */}
                    <nav className={`absolute w-full top-0 left-0 transition-transform duration-500 ${activeMobileMenu ? '-translate-x-full' : 'translate-x-0'}`}>
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.name} className="border-b border-black/10">
                                    {(link.dropdown || link.megaMenu || link.megaMenuWithImages) ? (
                                        <button
                                            onClick={() => handleMobileMenuClick(link.name)}
                                            className="w-full flex items-center justify-between h-[50px] px-5 py-0 text-left hover:bg-black/5 transition-colors"
                                        >
                                            <span className="text-[15px] font-medium" style={{ fontFamily: 'var(--font-display)' }}>{link.name}</span>
                                            <ChevronDown size={18} className="-rotate-90 text-dark/50" />
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path || '#'}
                                            className="flex items-center h-[50px] px-5 py-0 text-[15px] font-medium hover:bg-black/5 transition-colors"
                                            style={{ fontFamily: 'var(--font-display)' }}
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="p-5 mt-4">
                            <Link to="/book" className="btn btn-primary w-full justify-center" onClick={() => setIsMobileOpen(false)}>
                                Book Appointment
                            </Link>
                        </div>
                    </nav>

                    {/* Sub-menu Layers */}
                    {navLinks.map((link) => {
                        if (!link.dropdown && !link.megaMenu && !link.megaMenuWithImages) return null;

                        const isActive = mobileMenuStack.includes(link.name);
                        const isTop = activeMobileMenu === link.name;

                        return (
                            <div
                                key={`${link.name}-submenu`}
                                className={`absolute top-0 left-0 w-full bg-white min-h-full transition-transform duration-500 px-5 py-4
                                    ${isActive ? (isTop ? 'translate-x-0' : '-translate-x-full') : 'translate-x-full'}`}
                                style={{
                                    visibility: isActive ? 'visible' : 'hidden',
                                    zIndex: isActive ? 10 : -1
                                }}
                            >
                                {link.dropdown && (
                                    <ul className="flex flex-col">
                                        {link.dropdown.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    to={item.path}
                                                    className="block py-3 text-[15px] text-dark hover:text-wine transition-colors"
                                                    style={{ fontFamily: 'var(--font-body)' }}
                                                    onClick={() => setIsMobileOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {link.megaMenu && (
                                    <div className="flex flex-col pb-8">
                                        {link.megaMenu.map((category) => (
                                            <div key={category.category} className="mb-6 last:mb-0">
                                                <h4 className="text-[16px] text-wine font-medium leading-tight py-2 uppercase tracking-wide border-b border-border/30 mb-2">
                                                    {category.category}
                                                </h4>
                                                <ul className="flex flex-col space-y-1">
                                                    {category.items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                to={item.path}
                                                                className="block py-1.5 text-[15px] text-dark hover:text-wine transition-colors"
                                                                style={{ fontFamily: 'var(--font-body)' }}
                                                                onClick={() => setIsMobileOpen(false)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {link.megaMenuWithImages && (
                                    <div className="flex flex-col pb-8">
                                        <h4 className="text-[16px] text-wine font-medium leading-tight py-2 uppercase tracking-wide border-b border-border/30 mb-4">
                                            What Bothers You?
                                        </h4>
                                        <div className="flex flex-col gap-3">
                                            {link.megaMenuWithImages.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    to={item.path}
                                                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-black/5 group"
                                                    onClick={() => setIsMobileOpen(false)}
                                                >
                                                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h5
                                                            className="text-[15px] font-medium text-dark group-hover:text-wine transition-colors"
                                                            style={{ fontFamily: 'var(--font-display)' }}
                                                        >
                                                            {item.title}
                                                        </h5>
                                                        <p
                                                            className="text-xs mt-0.5 line-clamp-1"
                                                            style={{ color: 'var(--color-text-muted)' }}
                                                        >
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <ArrowRight size={16} className="shrink-0 text-wine opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </div>
                                        <Link
                                            to="/concerns"
                                            className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-wine border border-wine/30 rounded-xl hover:bg-wine/5 transition-colors"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            View All Concerns <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            </>
    )
}
