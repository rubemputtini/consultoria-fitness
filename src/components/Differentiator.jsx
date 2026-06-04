import FadeIn from './FadeIn';

const genericItems = [
  'Busca o melhor treino disponível',
  'Executa os exercícios como consegue',
  'Espera os resultados aparecerem',
  'Quando trava, busca outro treino',
  'Repete o ciclo indefinidamente',
];

const consultingItems = [
  'Treino elaborado para o SEU corpo e objetivos',
  'Orientação de como executar cada movimento',
  'Acompanhamento semanal da sua evolução',
  'Ajustes feitos na hora certa, antes do platô',
  'Alguém que percebe o que você ainda não percebeu',
];

const Differentiator = () => (
  <section className="py-16 md:py-32 font-poppins" style={{ background: 'rgba(15,21,35,0.5)' }}>
    <div className="max-w-7xl mx-auto px-5">
      <FadeIn className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
          A diferença que muda tudo
        </span>
        <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Há uma diferença entre ter um treino<br className="hidden md:block" />
          e <span className="text-amber">saber o que fazer com ele</span>
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          A maioria foca no <strong className="text-white">o quê</strong> fazer.
          O resultado vem do <strong className="text-white">como</strong> fazer.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="surface-card rounded-2xl p-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
              Como a maioria faz
            </span>
          </div>
          <h3 className="text-white font-bold text-lg mb-6">Foco no O QUÊ fazer</h3>
          <ul className="space-y-3">
            {genericItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted text-sm">
                <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-8" style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.25)' }}>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber" />
            <span className="text-amber text-xs font-bold uppercase tracking-wider">
              O que a consultoria entrega
            </span>
          </div>
          <h3 className="text-white font-bold text-lg mb-6">
            Foco no <span className="text-amber">COMO</span> fazer
          </h3>
          <ul className="space-y-3">
            {consultingItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white text-sm">
                <span className="text-amber mt-0.5 flex-shrink-0 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-muted text-base mt-10 max-w-xl mx-auto">
        Um treino diz o que fazer. O acompanhamento te ensina a fazer do jeito certo —
        e continua ajustando enquanto você evolui.
      </p>
    </div>
  </section>
);

export default Differentiator;
