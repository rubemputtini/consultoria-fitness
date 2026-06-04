import FadeIn from './FadeIn';

const cards = [
  {
    number: '01',
    title: 'Execução incorreta sem perceber',
    text: 'A pessoa segue o treino à risca, mas está ativando o músculo errado, na carga errada, sem perceber. O esforço vai para o lugar errado e o resultado não vem.',
  },
  {
    number: '02',
    title: 'Platô sem diagnóstico',
    text: 'Depois de semanas evoluindo, trava. Sem alguém que olhe de fora e identifique o que mudou, fica girando em falso — fazendo mais do mesmo que já parou de funcionar.',
  },
  {
    number: '03',
    title: 'Treino estático, corpo em evolução',
    text: 'O que funcionou no primeiro mês pode estar travando sua evolução no terceiro. Um plano que não se adapta ao seu progresso vira um obstáculo com o tempo.',
  },
];

const Problem = () => (
  <section className="py-16 md:py-32 font-poppins">
    <div className="max-w-7xl mx-auto px-5">
      <FadeIn className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
          O problema real
        </span>
        <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Por que tantas pessoas treinam por meses <br className="hidden md:block" />
          e <span className="text-amber">continuam no mesmo lugar?</span>
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          Não é falta de esforço. Não é falta de um bom treino.<br />
          A resposta é quase sempre a mesma.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(({ number, title, text }) => (
          <div key={number} className="surface-card rounded-2xl p-8">
            <div className="text-6xl font-black mb-4 leading-none text-amber opacity-50">
              {number}
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
            <p className="text-muted leading-relaxed text-sm">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 md:p-10 rounded-2xl max-w-3xl mx-auto text-center"
        style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.2)' }}>
        <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
          "O problema não é conseguir um treino.<br />
          O problema é <span className="text-amber">fazer o treino do jeito certo.</span>"
        </p>
      </div>
    </div>
  </section>
);

export default Problem;
