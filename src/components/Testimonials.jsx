import { quotes } from '../assets';
import { feedback } from '../constants';
import FadeIn from './FadeIn';

const TestimonialCard = ({ id, content, name, img }) => (
  <div className="surface-card rounded-2xl p-5 md:p-6 h-full flex flex-col">
    <img src={quotes} alt="" className="w-6 h-auto mb-4 opacity-20" />
    <p className="text-muted leading-relaxed text-sm mb-5 flex-1">{content}</p>
    <div className="flex items-center gap-3 pt-4 border-t border-amber/20">
      <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" loading="lazy" />
      <div>
        <div className="text-white font-semibold text-sm">{name}</div>
        <div className="text-amber text-xs mt-0.5">Aluno da consultoria</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-16 md:py-32 font-poppins" style={{ background: 'rgba(15,21,35,0.5)' }}>
    <div className="max-w-7xl mx-auto">
      <FadeIn className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-5">
        <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
          Depoimentos
        </span>
        <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Mais de <span className="text-amber">184 alunos</span><br />
          já estão evoluindo
        </h2>
        <p className="text-muted text-sm md:text-lg leading-relaxed">
          Resultados reais de pessoas reais — com rotinas, limitações e objetivos diferentes.
        </p>
      </FadeIn>

      {/* Mobile: carrossel horizontal com scroll-snap */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 pb-4">
        {feedback.map((card) => (
          <div key={card.id} className="snap-center flex-shrink-0 w-[82vw]">
            <TestimonialCard {...card} />
          </div>
        ))}
      </div>

      {/* Desktop: masonry */}
      <div className="hidden md:block px-5 columns-2 md:columns-3" style={{ columnGap: '1.5rem' }}>
        {feedback.map((card, i) => (
          <FadeIn key={card.id} delay={i * 60} className="mb-6 break-inside-avoid">
            <TestimonialCard {...card} />
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
