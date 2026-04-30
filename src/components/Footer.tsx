export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="text-2xl font-display font-bold mb-6">
            SANTOS <span className="text-accent">&</span> HENRIQUE
          </div>
          <p className="opacity-50 text-sm leading-relaxed">
            Advocacia moderna, humanizada e eficiente em Ipatinga/MG. Comprometidos com a defesa intransigente dos seus direitos.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-[10px]">Onde Estamos</h4>
          <p className="opacity-70 text-sm mb-2">R. Jacarandá, 394 - Horto</p>
          <p className="opacity-70 text-sm">Ipatinga - MG, 35160-304</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-[10px]">Contatos</h4>
          <p className="text-lg font-bold mb-2">(31) 99716-5967</p>
          <p className="opacity-70 text-sm">santosehenrique.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-30 uppercase tracking-widest">
        <div>© 2026 Santos e Henrique Advogados - Todos os direitos reservados</div>
        <div className="flex gap-6">
          <span>Justiça</span>
          <span>Ética</span>
          <span>Transparência</span>
        </div>
      </div>
    </footer>
  );
}
