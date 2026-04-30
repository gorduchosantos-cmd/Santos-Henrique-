import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1k0y2a5BFGTQf40M20Xh6u5yydsAVng5u" 
              alt="Santos e Henrique Advogados" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
            <p className="text-accent font-bold text-lg">Atendimento em Ipatinga</p>
            <p className="text-sm opacity-60">Bairro Horto</p>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Dr. Bruno & Dra. Débora</h2>
          <p className="text-lg opacity-70 mb-6 leading-relaxed">
            Com sede no coração do Horto em Ipatinga, o escritório Santos e Henrique Advogados nasceu da paixão por solucionar conflitos através de um atendimento verdadeiramente humano e prestativo.
          </p>
          <p className="text-lg opacity-70 mb-8 leading-relaxed">
            Nossa especialidade não está apenas nos livros jurídicos, mas na capacidade de ouvir cada cliente e entregar paciência, competência e resultados nota 1000.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Direito Civil e Contratual",
              "Direito de Família e Sucessões",
              "Consultoria Jurídica Estratégica"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="text-accent w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/5531997165967" className="group inline-flex items-center gap-2 border-b-2 border-accent pb-2 font-bold hover:text-accent transition">
            FALE DIRETAMENTE COM UM ADVOGADO 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
