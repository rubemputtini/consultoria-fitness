import { useState } from 'react';
import { menu, close } from '../assets';
import useCurrency from '../hooks/useCurrency';

const MEMBER_LINK = 'https://www.mfitpersonal.com.br/download';

const Logo = () => (
  <div className="leading-tight">
    <div className="font-black text-base tracking-tight text-white uppercase">
      Rubem <span className="text-amber">Puttini</span>
    </div>
    <div className="text-xs font-medium tracking-widest text-muted uppercase">
      Consultoria Fitness Online
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ctaLink, loading } = useCurrency();
  const href = loading ? '#' : ctaLink;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <a
            href={MEMBER_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-white transition-colors text-sm font-medium"
          >
            Área de Membros
          </a>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="action-btn text-white font-bold text-sm px-6 py-3 rounded-full"
          >
            Começar agora
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          <img src={isOpen ? close : menu} alt="" className="w-6 h-6" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden sidebar bg-surface border-t border-border px-6 py-6 flex flex-col gap-4">
          <a
            href={MEMBER_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-muted text-base font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Área de Membros
          </a>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="action-btn text-white font-bold text-base px-6 py-4 rounded-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Começar agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
