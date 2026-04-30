import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1 border border-accent/30 rounded-full text-accent text-xs tracking-widest mb-6 uppercase font-semibold">
            ⚖️ Advocacia de Alto Padrão em Ipatinga
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
            Justiça com <span className="text-gradient">Excelência</span> e Empatia.
          </h1>
          <p className="text-lg md:text-xl opacity-60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Defendendo seus direitos com agilidade, transparência e o profissionalismo reconhecido por centenas de clientes em Minas Gerais.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a 
              whileHover={{ backgroundColor: '#C5A059', color: '#050505' }}
              href="https://wa.me/5531997165967" 
              className="bg-white text-dark px-10 py-5 rounded-full font-bold text-lg transition-colors duration-300 w-full md:w-auto"
            >
              Agendar Consulta Gratuita
            </motion.a>
            <div className="flex items-center gap-2 px-6 opacity-80">
              <span className="text-accent text-xl">★★★★★</span>
              <span className="text-sm">4.8 (35 Avaliações)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
