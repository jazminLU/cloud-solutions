"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "+5493515928669";
const WHATSAPP_MESSAGE = "Hola! Estoy interesado en los servicios de Infra Moon.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 4px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{
        scale: 1.12,
        boxShadow: "0 6px 32px rgba(37,211,102,0.65), 0 2px 12px rgba(0,0,0,0.35)",
      }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(37,211,102,0.35)" }}
        animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 relative z-10"
        fill="white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.664 4.821 1.82 6.832L2 30l7.374-1.798A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.57 11.57 0 0 1-5.916-1.62l-.424-.252-4.376 1.066 1.098-4.258-.276-.44A11.536 11.536 0 0 1 4.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.346-8.658c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.61-.088-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.598-.202-.01-.434-.012-.666-.012s-.61.086-.928.434c-.32.348-1.218 1.19-1.218 2.902s1.246 3.366 1.42 3.598c.174.232 2.45 3.74 5.934 5.244.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.202-1.656-.086-.144-.318-.232-.666-.406z" />
      </svg>

      {/* Tooltip */}
      <motion.div
        className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, x: 8 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-lg text-white"
          style={{ background: "rgba(18,140,126,0.95)", backdropFilter: "blur(8px)" }}
        >
          Hablemos por WhatsApp
        </div>
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[5px] w-2 h-2 rotate-45"
          style={{ background: "rgba(18,140,126,0.95)" }}
        />
      </motion.div>
    </motion.a>
  );
}
