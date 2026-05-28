import { useState, useEffect } from 'react'
import { Bot } from 'lucide-react'

// Custom WhatsApp Icon for accuracy
const WhatsAppIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
)

export default function FloatingSocials() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <>
            {/* Left Side - WhatsApp only */}
            <a
                href="https://api.whatsapp.com/send/?phone=917738891858&text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed left-4 md:left-6 bottom-6 w-10 h-10 md:w-12 md:h-12 bg-white text-wine border border-[#e8e4db] rounded-full flex items-center justify-center shadow-lg hover:bg-wine hover:text-white hover:border-wine hover:scale-110 transition-all z-[100]"
                aria-label="WhatsApp"
                style={{ animation: 'floatInLeft 0.6s ease-out' }}
            >
                <WhatsAppIcon size={20} />
            </a>

            {/* Right Side Chatbot */}
            <button
                className="fixed right-4 md:right-6 bottom-6 w-12 h-12 md:w-14 md:h-14 bg-wine text-white rounded-full flex items-center justify-center shadow-2xl border border-wine-dark hover:bg-wine-dark hover:scale-105 transition-all z-[100] group"
                aria-label="Chat Bot"
                style={{ animation: 'floatInRight 0.6s ease-out' }}
                onClick={() => alert('Chatbot functionality coming soon!')}
            >
                <Bot size={28} strokeWidth={1.5} className="group-hover:animate-bounce" />
            </button>

            <style>{`
                @keyframes floatInLeft {
                    from { opacity: 0; transform: translateX(-20px) scale(0.9); }
                    to { opacity: 1; transform: translateX(0) scale(1); }
                }
                @keyframes floatInRight {
                    from { opacity: 0; transform: translateX(20px) scale(0.9); }
                    to { opacity: 1; transform: translateX(0) scale(1); }
                }
            `}</style>
        </>
    )
}
