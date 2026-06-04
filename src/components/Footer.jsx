import { socialMedia } from '../constants';

const Logo = () => (
  <div className="leading-tight">
    <div className="font-black text-xl tracking-tight text-white uppercase">
      Rubem <span className="text-amber">Puttini</span>
    </div>
    <div className="text-xs font-medium tracking-widest text-muted uppercase mt-0.5">
      Consultoria Fitness Online
    </div>
  </div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-poppins border-t border-border">
      <div className="max-w-7xl mx-auto px-5">

        <div className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-muted text-sm">
              Acompanhamento individual de treino online.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialMedia.map(({ id, name, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img src={icon} alt="" className="w-5 h-5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border py-8 flex flex-col gap-4">
          <p className="text-muted text-sm leading-relaxed max-w-2xl">
            Os resultados variam de pessoa para pessoa e dependem do comprometimento de cada aluno.
            Este serviço não substitui orientação médica — consulte um profissional de saúde antes
            de iniciar qualquer programa de exercícios.
          </p>
          <p className="text-muted/70 text-xs">
            © {year} Rubem Puttini. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
