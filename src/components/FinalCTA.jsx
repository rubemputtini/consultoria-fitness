import FadeIn from './FadeIn';
import useCurrency from '../hooks/useCurrency';

const FinalCTA = () => {
  const { ctaLink, ctaLabel, loading } = useCurrency();

  return (
    <section className="py-16 md:py-32 font-poppins relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,168,67,0.08) 0%, transparent 70%)' }} />

      <FadeIn className="max-w-3xl mx-auto px-5 text-center relative z-10">
        <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-6 border border-amber/30 px-4 py-1.5 rounded-full">
          Seu próximo passo
        </span>

        <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Pare de trocar de treino.<br />
          <span className="amber-gradient-text">Comece a ser acompanhado.</span>
        </h2>

        <p className="text-muted text-sm md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          O que vai transformar o seu resultado é ter alguém que acompanha como você
          executa cada movimento, percebe o que está travando sua evolução e faz os
          ajustes certos na hora certa.
        </p>

        <a
          href={loading ? '#' : ctaLink}
          target="_blank"
          rel="noreferrer"
          className="action-btn text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 md:py-5 rounded-full w-full ss:w-auto block ss:inline-block text-center"
        >
          {loading ? 'Carregando...' : ctaLabel}
        </a>

        <p className="text-muted text-sm mt-6">
          30 dias de garantia · Sem fidelidade · Cancele quando quiser
        </p>
      </FadeIn>
    </section>
  );
};

export default FinalCTA;
