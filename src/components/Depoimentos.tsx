import { motion } from 'motion/react';

const testimonials = [
  {
    text: "Meu processo foi muito rápido, excelentes profissionais, indico de olhos fechados.",
    author: "Vanessa Silva",
    initials: "VS"
  },
  {
    text: "Profissionalismo e competência, principalmente paciência. Resolveu meu problema na maior rapidez. Nota 10000!",
    author: "Cleide Monteiro",
    initials: "CM"
  },
  {
    text: "Eu desconheço profissionais melhores, tanto o Dr. Bruno quanto a Dr. Débora me atenderam da melhor forma possível.",
    author: "Jeferson Henrique",
    initials: "JH"
  }
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="font-display text-4xl font-bold mb-2">Vozes de Confiança</h2>
            <p className="opacity-50">O que nossos clientes dizem no Google.</p>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="text-accent mb-4 text-xl">★★★★★</div>
              <p className="italic opacity-80 mb-6 text-lg">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent">
                  {t.initials}
                </div>
                <span className="font-bold">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
