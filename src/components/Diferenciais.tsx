import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnim = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Por que nos escolher?</h2>
        <p className="opacity-50">Compromisso real com a solução do seu problema jurídico.</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]"
      >
        {/* Card 1 */}
        <motion.div variants={itemAnim} className="md:col-span-8 glass p-10 rounded-3xl flex flex-col justify-end hover:border-accent/40 transition-colors group">
          <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-dark transition-all duration-300">
            <Zap className="w-6 h-6 text-accent group-hover:text-dark" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Resolução Ágil</h3>
          <p className="opacity-60 max-w-md">Processos conduzidos com rapidez e eficiência. Nosso foco é sanar o problema com a máxima brevidade jurídica.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={itemAnim} className="md:col-span-4 glass p-10 rounded-3xl flex flex-col justify-center items-center text-center hover:border-accent/40 transition-colors">
          <div className="text-4xl font-display font-bold text-accent mb-2">4.8</div>
          <p className="font-bold">Pontuação no Google</p>
          <p className="text-sm opacity-50">Baseado em 35 avaliações reais</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={itemAnim} className="md:col-span-4 glass p-10 rounded-3xl flex flex-col justify-end hover:border-accent/40 transition-colors">
          <h3 className="text-xl font-bold mb-2">Inclusividade</h3>
          <p className="text-sm opacity-60">Empresa que acolhe orgulhosamente a comunidade LGBTQ+ e valoriza a diversidade.</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div variants={itemAnim} className="md:col-span-8 glass p-10 rounded-3xl flex items-center gap-8 hover:border-accent/40 transition-colors">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" 
            alt="Liderança" 
            className="hidden md:block w-32 h-32 rounded-2xl object-cover"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Liderança Feminina</h3>
            <p className="opacity-60">Identificada como uma empresa de empreendedoras, trazendo um olhar humano e atento aos detalhes.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
