import FadeIn from './FadeIn';
import { rubem } from '../assets';

const credentials = [
  { label: 'Educação Física', detail: 'Universidade de Brasília (UnB) · 2017' },
  { label: 'Especialista em Atividade Física e Saúde', detail: 'Universidade do Porto (Portugal) · 2020' },
  { label: 'Experiência no fitness', detail: 'Desde 2013' },
  { label: 'Alunos acompanhados', detail: '+184 pessoas transformadas' },
];

const Author = () => (
  <section className="py-16 md:py-32 font-poppins">
    <div className="max-w-7xl mx-auto px-5">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="relative order-2 md:order-1 flex justify-center" direction="left">
          <div
            className="relative w-72 h-72 ss:w-80 ss:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: '0 0 0 4px rgba(212,168,67,0.15), 0 25px 60px rgba(0,0,0,0.5)' }}
          >
            <img
              src={rubem}
              alt="Rubem Puttini"
              className="w-full h-full object-cover object-center scale-125"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn className="order-1 md:order-2" direction="right">
          <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
            Quem está por trás do seu acompanhamento
          </span>

          <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Rubem <span className="text-amber">Puttini</span>
          </h2>

          <div className="space-y-5 text-muted text-base leading-relaxed mb-8">
            <p>
              Sou Profissional de Educação Física com mais de uma década acompanhando pessoas dentro e fora da academia.
              O que essa experiência toda me ensinou é simples:{' '}
              <span className="text-white font-semibold">resultado não vem de treinar mais. Vem de treinar certo.</span>
            </p>
            <p>
              Vi pessoas com treinos excelentes não evoluírem — porque ninguém ensinou como executar.
              E vi pessoas com treinos simples transformarem o corpo — porque tinham quem as orientasse
              e fizesse os ajustes certos no momento certo.
            </p>
            <p>
              Essa é a minha função na consultoria. Não entrego um treino e sumo.
              Acompanho cada semana, percebo o que está funcionando e o que precisa mudar,
              e faço os ajustes antes que você trave.
            </p>
          </div>

          <div className="space-y-3">
            {credentials.map(({ label, detail }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                <div>
                  <span className="text-white font-semibold text-sm">{label}</span>
                  <span className="text-muted text-sm"> — {detail}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Author;
