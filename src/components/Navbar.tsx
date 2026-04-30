import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-display font-bold tracking-tighter">
          SANTOS <span className="text-accent">&</span> HENRIQUE
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
          <a href="#inicio" className="hover:text-accent transition">Início</a>
          <a href="#diferenciais" className="hover:text-accent transition">Diferenciais</a>
          <a href="#sobre" className="hover:text-accent transition">Sobre</a>
          <a href="#depoimentos" className="hover:text-accent transition">Avaliações</a>
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/5531997165967" 
          target="_blank" 
          className="bg-accent text-dark px-6 py-2 rounded-full font-bold text-sm"
        >
          CONTATO
        </motion.a>
      </nav>
    </header>
  );
}
