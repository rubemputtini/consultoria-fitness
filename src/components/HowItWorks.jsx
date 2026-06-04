import FadeIn from './FadeIn';
import { assinatura, areademembros, questionario, treino } from '../assets';

const steps = [
  {
    icon: assinatura,
    step: '01',
    title: 'Você assina',
    description:
      'Assinatura mensal sem fidelidade. Sem contrato, sem multa. Cancele quando quiser, sem burocracia.',
  },
  {
    icon: areademembros,
    step: '02',
    title: 'Acesso imediato',
    description:
      'Logo após o pagamento você recebe por e-mail as instruções para acessar o aplicativo com a área de membros.',
  },
  {
    icon: questionario,
    step: '03',
    title: 'Seu perfil completo',
    description:
      'Você preenche um questionário detalhado. Eu conheço seus objetivos, limitações e rotina antes de montar qualquer coisa.',
  },
  {
    icon: treino,
    step: '04',
    title: 'Treino personalizado',
    description:
      'Em até 48h você recebe seu plano — feito para o seu corpo, com orientações de execução para cada exercício.',
  },
];

const HowItWorks = () => (
  <section className="py-16 md:py-32 font-poppins">
    <div className="max-w-7xl mx-auto px-5">
      <FadeIn className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
          Como funciona
        </span>
        <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Do início ao seu primeiro treino<br />
          em <span className="text-amber">4 passos simples</span>
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          Sem complicação. Em menos de 48 horas você já está treinando com um plano feito para você.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map(({ icon, step, title, description }, index) => (
          <div key={step} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] right-0 h-px"
                style={{ background: 'linear-gradient(to right, rgba(212,168,67,0.3), transparent)' }} />
            )}
            <div className="surface-card rounded-2xl p-6 text-center h-full">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)' }} />
                <img src={icon} alt={title} className="w-10 h-10 object-contain relative z-10" />
              </div>
              <div className="text-xs font-black text-amber uppercase tracking-widest mb-2">
                Passo {step}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted text-base">
          E depois? O acompanhamento continua. A cada semana, avaliamos sua evolução e
          ajustamos o que for necessário.
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
