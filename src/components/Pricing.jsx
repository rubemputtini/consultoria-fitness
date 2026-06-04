import FadeIn from './FadeIn';
import useCurrency from '../hooks/useCurrency';
import { garantia } from '../assets';

const includes = [
  'Planejamento de treino personalizado',
  'Renovação do treino a cada 5 semanas',
  'Acesso ao aplicativo com vídeos de execução',
  'Suporte por WhatsApp para tirar dúvidas',
  'Acompanhamento e ajustes contínuos',
  'Sem fidelidade — cancele quando quiser',
];

const Pricing = () => {
  const { price, loading, ctaLink, ctaLabel } = useCurrency();

  return (
    <section id="pricing" className="py-16 md:py-32 font-poppins">
      <div className="max-w-7xl mx-auto px-5">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
            Investimento
          </span>
          <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Comece seu acompanhamento<br />
            <span className="text-amber">hoje mesmo</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <div className="rounded-2xl p-8 md:p-10" style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.25)' }}>
            <div className="mb-8">
              <div className="text-muted text-sm mb-2">Assinatura mensal</div>
              <div className="flex items-end gap-2">
                {loading ? (
                  <div className="text-muted text-2xl font-bold animate-pulse">Carregando...</div>
                ) : (
                  <>
                    <span className="text-5xl font-black text-amber">{price}</span>
                    <span className="text-muted text-lg mb-1">/mês</span>
                  </>
                )}
              </div>
              <p className="text-muted text-sm mt-3">
                Sem fidelidade. Cancele a qualquer momento.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-amber font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={loading ? '#' : ctaLink}
              target="_blank"
              rel="noreferrer"
              className="action-btn text-white font-bold text-base px-8 py-4 rounded-full w-full text-center block"
            >
              {loading ? 'Carregando...' : ctaLabel}
            </a>
          </div>

          <div className="surface-card rounded-2xl p-8 text-center">
            <img
              src={garantia}
              alt="Garantia 30 dias"
              className="w-28 h-28 object-contain mx-auto mb-6"
            />
            <h3 className="text-white font-black text-2xl mb-3">
              30 dias de <span className="text-amber">risco zero</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Nos primeiros 30 dias, se você não estiver satisfeito com a consultoria por
              qualquer motivo, devolvemos 100% do seu dinheiro. Sem burocracia,
              sem perguntas.
            </p>
            <div className="space-y-2 text-left">
              {['Reembolso integral', 'Sem necessidade de justificativa', 'Processo simples e rápido'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <span className="text-amber font-bold">✓</span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
