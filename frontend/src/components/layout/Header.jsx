import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ArrowRight, Flame, Palette, Sparkles, Scissors, Eye, Sun, Search, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import { Caption } from '../ui/Typography'

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 14, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
)

// Custom Instagram Icon
const InstagramIcon = ({ size = 14, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
)

// Custom Facebook Icon
const FacebookIcon = ({ size = 14, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

// Custom YouTube Icon
const YoutubeIcon = ({ size = 14, ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
)

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
            {/* Top Bar - Visible on ALL screens including mobile */}
            <div
                className="fixed top-0 left-0 w-full z-[1001] transition-all duration-500 block"
                style={{
                    background: 'var(--color-wine)',
                    height: isScrolled ? '0px' : 'var(--header-top-bar-height)',
                    overflow: 'hidden',
                    opacity: isScrolled ? 0 : 1,
                }}
            >
                <div className="container h-full flex items-center justify-between gap-4">

                    {/* LEFT: Social Icons — exact brand colors */}
                    <div className="flex items-center gap-2">
                        {/* WhatsApp — #25D366 */}
                        <a
                            href="https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!"
                            target="_blank" rel="noreferrer"
                            aria-label="WhatsApp"
                            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 hover:opacity-85 shadow-sm"
                            style={{ background: '#25D366' }}
                        >
                            <WhatsAppIcon size={16} style={{ color: '#fff' }} />
                        </a>
                        {/* Instagram — brand gradient */}
                        <a
                            href="https://www.instagram.com/dcosmedicsindia/"
                            target="_blank" rel="noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 hover:opacity-85 shadow-sm"
                            style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                        >
                            <InstagramIcon size={16} style={{ color: '#fff' }} />
                        </a>
                        {/* Facebook — #1877F2 */}
                        <a
                            href="https://www.facebook.com/aaynaclinic/"
                            target="_blank" rel="noreferrer"
                            aria-label="Facebook"
                            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 hover:opacity-85 shadow-sm"
                            style={{ background: '#1877F2' }}
                        >
                            <FacebookIcon size={16} style={{ color: '#fff' }} />
                        </a>
                        {/* YouTube — #FF0000 */}
                        <a
                            href="https://www.youtube.com/channel/UCF4-AP5qfQ_VKyNZjhKfb4Q"
                            target="_blank" rel="noreferrer"
                            aria-label="YouTube"
                            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 hover:opacity-85 shadow-sm"
                            style={{ background: '#FF0000' }}
                        >
                            <YoutubeIcon size={16} style={{ color: '#fff' }} />
                        </a>
                    </div>

                    {/* CENTER: Phone + Hours (hidden on mobile) */}
                    <div className="hidden sm:flex items-center gap-3">
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-1.5 text-white tracking-wide text-[11px] font-medium transition-colors"
                        >
                            <Phone size={11} strokeWidth={2.5} className="text-[#C9BFA6]" />
                            <span className="text-[#C9BFA6] hover:text-white transition-colors">+91 11 2634 7890</span>
                        </a>
                        <span className="text-white/30 text-xs" aria-hidden="true">|</span>
                        <span className="text-white/70 text-[11px] font-medium tracking-wide">Mon – Sat: 10 AM – 7 PM</span>
                    </div>

                    {/* RIGHT: Chat With Us CTA */}
                    <a
                        href="https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-bold uppercase shrink-0 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
                        style={{
                            background: '#EDE8D0',
                            color: 'var(--color-wine)',
                            fontSize: '11px',
                            letterSpacing: '0.8px',
                            padding: '6px 16px',
                        }}
                    >
                        <span style={{ color: '#25D366', display: 'flex', alignItems: 'center' }}>
                            <WhatsAppIcon size={14} />
                        </span>
                        <span>Chat with us</span>
                    </a>

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
                        className="text-[#0d1319]/60 hover:text-[#5A262C] text-[14px] font-medium tracking-widest uppercase transition-colors p-2"
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
                            className="text-[#0d1319] text-[20px] tracking-[2px] uppercase font-bold hover:text-[#5A262C] transition-colors block"
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
                            className="text-[#0d1319] text-[20px] tracking-[2px] uppercase font-bold hover:text-[#5A262C] transition-colors block"
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
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['TREATMENTS'] ? 'text-[#5A262C]' : 'text-[#0d1319] hover:text-[#5A262C]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                TREATMENTS
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['TREATMENTS'] ? 'text-[#5A262C]' : 'text-[#0d1319]'}`}>
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
                                            className="text-[#0d1319]/70 hover:text-[#5A262C] text-[15px] transition-colors block font-semibold py-0.5"
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
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['CONCERNS'] ? 'text-[#5A262C]' : 'text-[#0d1319] hover:text-[#5A262C]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                CONCERNS
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['CONCERNS'] ? 'text-[#5A262C]' : 'text-[#0d1319]'}`}>
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
                                                className={`text-[15px] font-bold transition-colors ${expandedConcerns[group.category] ? 'text-[#5A262C]' : 'text-[#0d1319]/80 hover:text-[#5A262C]'}`}
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {group.category}
                                            </span>
                                            <span className={`text-xs font-bold select-none transition-colors ${expandedConcerns[group.category] ? 'text-[#5A262C]' : 'text-[#0d1319]/60'}`}>
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
                                                            className="text-[#0d1319]/60 hover:text-[#5A262C] text-[14px] transition-colors block py-0.8 font-medium"
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
                                        className="text-[#5A262C] hover:text-[#3d1a1c] text-[15px] font-bold transition-colors block"
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
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['SOCIAL MEDIA'] ? 'text-[#5A262C]' : 'text-[#0d1319] hover:text-[#5A262C]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                SOCIAL MEDIA
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['SOCIAL MEDIA'] ? 'text-[#5A262C]' : 'text-[#0d1319]'}`}>
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
                                            className="text-[#0d1319]/70 hover:text-[#5A262C] text-[15px] transition-colors block font-semibold py-0.5"
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
                            className="text-[#0d1319] text-[20px] tracking-[2px] uppercase font-bold hover:text-[#5A262C] transition-colors block"
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
                                className={`text-[20px] tracking-[2px] uppercase font-bold transition-colors ${expandedMobileItems['CONTACT US'] ? 'text-[#5A262C]' : 'text-[#0d1319] hover:text-[#5A262C]'}`}
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                CONTACT US
                            </span>
                            <span className={`text-[16px] font-bold select-none transition-colors ${expandedMobileItems['CONTACT US'] ? 'text-[#5A262C]' : 'text-[#0d1319]'}`}>
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
                                                className="text-[#0d1319]/70 hover:text-[#5A262C] text-[15px] transition-colors block font-semibold py-0.5"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMobileOpen(false)}
                                                className="text-[#0d1319]/70 hover:text-[#5A262C] text-[15px] transition-colors block font-semibold py-0.5"
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
                        className="text-[#5A262C] text-[18px] font-bold block mt-1 hover:text-[#3d1a1c] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        +91 80801 25874
                    </a>
                </div>
            </div>

        </>
    )
}
