export default function Marquee() {
  const items = [
    "Dra. Débora Henrique",
    "Dr. Bruno Santos",
    "Especialistas em Causas Cíveis",
    "Direito de Família",
    "Empresa de Empreendedoras",
    "Atendimento Humanizado"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="marquee flex gap-12 items-center opacity-40 grayscale">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex gap-12 items-center shrink-0">
            <span className="text-2xl font-display font-bold">{item}</span>
            <span className="text-accent text-xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}
