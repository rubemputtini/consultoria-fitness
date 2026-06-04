import FadeIn from './FadeIn';
import { useState } from 'react';
import { questionsData } from '../constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-32 font-poppins" style={{ background: 'rgba(15,21,35,0.5)' }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">

          <div className="md:sticky md:top-32">
            <span className="inline-block text-amber font-bold text-xs uppercase tracking-widest mb-6 border border-amber/30 px-4 py-1.5 rounded-full">
              Dúvidas frequentes
            </span>
            <h2 className="text-3xl ss:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Tem alguma<br />
              <span className="text-amber">pergunta?</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Se não encontrar o que procura, fale diretamente pelo WhatsApp.
            </p>
          </div>

          <div>
            {questionsData.map(({ title, text }, index) => (
              <div key={index} className="border-t border-border">
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-black text-amber opacity-60 mt-1 flex-shrink-0 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-semibold text-sm leading-snug transition-colors duration-200 ${openIndex === index ? 'text-amber' : 'text-white group-hover:text-amber'}`}>
                      {title}
                    </span>
                  </div>
                  <svg
                    className={`flex-shrink-0 w-4 h-4 text-amber mt-1 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className="text-muted text-base leading-relaxed pl-9">
                    {text}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
