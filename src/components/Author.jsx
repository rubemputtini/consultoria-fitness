import styles, { layout } from "../style";
import { rubem } from "../assets";

const Author = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionImg}`}>
        <img src={rubem} alt="garantia" className="w-[300px] h-[300x]" />
        <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full red__gradient" />
      </div>

      <div className={`${layout.sectionInfo} mt-5`}>
        <h2 className={`${styles.heading2} text-center`}>Rubem Puttini</h2>
        <p className={`${styles.paragraph}  text-center mt-5`}>
          Mestrando em Atividade Física e Saúde pela Universidade do Porto e
          Profissional de Educação Física graduado pela Universidade de
          Brasília. É apaixonado por musculação e atua na área fitness desde
          2013. Seu objetivo é fazer as pessoas entenderem que resultados
          extraordinários não são exclusivos de quem dedica muitas horas do dia
          em exercícios físicos.
        </p>
      </div>
    </section>
  );
};

export default Author;
