import FadeIn from './FadeIn';
import { quotes } from '../assets';
import { feedback } from '../constants';

const FEATURED_IDS = ['feedback-1', 'feedback-9', 'feedback-4'];

const FeaturedTestimonials = () => {
  const featured = feedback.filter((f) => FEATURED_IDS.includes(f.id));

  return (
    <section className="py-16 md:py-32 font-poppins">
      <div className="max-w-7xl mx-auto px-5">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-4 border border-amber/30 px-4 py-1.5 rounded-full">
            Resultados reais
          </span>
          <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Veja o que dizem<br />
            quem está <span className="text-amber">evoluindo de verdade</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map(({ id, content, name, img }) => (
            <div key={id} className="surface-card rounded-2xl p-8 flex flex-col">
              <img
                src={quotes}
                alt=""
                className="w-8 h-auto mb-6 opacity-20"
              />
              <p className="text-muted leading-relaxed flex-1 mb-8 text-sm">{content}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-amber/20">
                <img
                  src={img}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-amber text-xs mt-0.5">Aluno da consultoria</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
