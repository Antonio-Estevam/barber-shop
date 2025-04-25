import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        className="text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" color="#dd8546"/>}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-2xl font-semibold transition-all duration-300"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-800"
              aria-label="Fechar menu"
            >
              <X className="w-12 h-12 mt-20 mr-16 pr-[6px]"  color="#dd8546" />
            </button>
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#dd8546] transition-colors">Início</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="hover:text-[#dd8546] transition-colors">Sobre</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="hover:text-[#dd8546] transition-colors">Serviços</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-[#dd8546] transition-colors">Contato</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}