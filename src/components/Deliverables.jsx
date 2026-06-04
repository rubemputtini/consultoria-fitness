import FadeIn from './FadeIn';
import { memberarea } from '../assets';

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
  </svg>
);

const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconUnlock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 019.9-1" />
  </svg>
);

const items = [
  {
    Icon: IconClipboard,
    title: 'Planejamento personalizado',
    description: 'Treino elaborado para o seu corpo, seus objetivos e suas limitações — renovado a cada 5 semanas conforme sua evolução.',
  },
  {
    Icon: IconPlay,
    title: 'Biblioteca de vídeos de execução',
    description: 'Acesso a mais de 1800 vídeos demonstrando a forma correta de cada exercício. Você nunca fica em dúvida sobre como fazer.',
  },
  {
    Icon: IconMessage,
    title: 'Suporte direto por WhatsApp',
    description: 'Canal direto para tirar dúvidas sobre execução, carga ou adaptações. Sem ficar sem resposta.',
  },
  {
    Icon: IconRefresh,
    title: 'Ajustes ao longo do tempo',
    description: 'A cada ciclo, seu treino evolui com você. Não é um plano estático — é um acompanhamento vivo.',
  },
  {
    Icon: IconClock,
    title: 'Treinos curtos e objetivos',
    description: 'Entre 25 e 45 minutos. Sem enrolação, sem tempo desperdiçado. Para quem tem rotina corrida.',
  },
  {
    Icon: IconUnlock,
    title: 'Sem fidelidade',
    description: 'Assine e cancele quando quiser. Você fica porque está evoluindo — não porque tem contrato.',
  },
];

const Deliverables = () => (
  <section className="py-16 md:py-32 font-poppins" style={{ background: 'rgba(15,21,35,0.5)' }}>
    <div className="max-w-7xl mx-auto px-5">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
          O que você recebe
        </span>
        <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Tudo o que você precisa para<br />
          <span className="text-amber">evoluir de verdade</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Screenshot — aparece primeiro no mobile */}
        <div className="order-1 md:order-2 md:sticky md:top-28">
          <img
            src={memberarea}
            alt="Área de membros do aplicativo"
            className="w-full object-contain"
            loading="lazy"
          />
          <p className="text-muted text-xs text-center mt-3">
            Área de membros — acesso imediato após a assinatura
          </p>
        </div>

        {/* Lista de itens — aparece segundo no mobile */}
        <div className="order-2 md:order-1 grid gap-3">
          {items.map(({ Icon, title, description }) => (
            <div key={title} className="surface-card rounded-xl p-4 md:p-5 flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-amber"
                style={{ background: 'rgba(212,168,67,0.1)' }}>
                <Icon />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Deliverables;
