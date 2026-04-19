import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

// ===== FLOATING WHATSAPP CTA =====
export default function FloatingCTA() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <a
            href="https://wa.me/911234567890?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebe57] hover:scale-105 hover:shadow-xl transition-all z-[100]"
            aria-label="WhatsApp Consultation"
            style={{
                animation: 'floatIn 0.5s ease-out'
            }}
        >
            <MessageCircle size={30} />
            <style>{`
                @keyframes floatIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </a>
    )
}
