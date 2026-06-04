import useCurrency from '../hooks/useCurrency';
import useInView from '../hooks/useInView';

const stats = [
  { value: '+184', label: 'alunos\nacompanhados' },
  { value: '+13', label: 'anos de\nexperiência' },
  { value: '30', label: 'dias de\ngarantia' },
];

const Hero = () => {
  const { ctaLink, loading } = useCurrency();
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <section className="relative md:min-h-screen flex items-center justify-center pt-20 font-poppins overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 65%)' }} />

      <div className="max-w-4xl mx-auto px-5 w-full py-10 md:py-24 text-center">
        <div
          style={{
            opacity: 1,
            animation: 'fadeSlideUp 0.7s ease both',
          }}
        >
          <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 md:mb-6 border border-amber/30 px-4 py-1.5 rounded-full">
            Consultoria de Treino Online
          </span>
        </div>

        <div style={{ animation: 'fadeSlideUp 0.7s ease 0.1s both' }}>
          <h1 className="text-3xl ss:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-4 md:mb-6">
            Treino por treino,<br />você vai na IA.<br />
            <span className="amber-gradient-text">Acompanhamento<br />individual, não.</span>
          </h1>
        </div>

        <div style={{ animation: 'fadeSlideUp 0.7s ease 0.2s both' }}>
          <p className="text-muted text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
            Plano de treino você consegue em qualquer lugar. O que transforma resultado
            é ter alguém que te conhece, percebe o que está travando a sua evolução
            e faz os ajustes certos — semana a semana, só para você.
          </p>
        </div>

        <div style={{ animation: 'fadeSlideUp 0.7s ease 0.3s both' }}>
          <a
            href={loading ? '#' : ctaLink}
            target="_blank"
            rel="noreferrer"
            className="action-btn text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 md:py-5 rounded-full w-full ss:w-auto block ss:inline-block text-center"
          >
            Quero um acompanhamento de verdade
          </a>
        </div>

        <div
          ref={statsRef}
          className="flex justify-center gap-6 md:gap-12 mt-6 md:mt-16 pt-6 md:pt-8 border-t border-border"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={value}
              className={i > 0 ? 'border-l border-border pl-4 md:pl-12' : ''}
              style={{
                opacity: statsInView ? 1 : 0,
                filter: statsInView ? 'blur(0)' : 'blur(10px)',
                transform: statsInView ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.6s ease ${i * 180}ms, filter 0.6s ease ${i * 180}ms, transform 0.6s ease ${i * 180}ms`,
              }}
            >
              <div className="text-2xl md:text-4xl font-black amber-gradient-text">{value}</div>
              <div className="text-muted text-xs mt-1 leading-tight whitespace-pre-line">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
