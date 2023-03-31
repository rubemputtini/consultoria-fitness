import styles, { layout } from "../style";
import Button from "./Button";
import { garantia } from "../assets";

const Guarantee = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionImg}`}>
        <img src={garantia} alt="garantia" className="w-[300px] h-[300px]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full red__gradient"></div>
      </div>

      <div className={`${layout.sectionInfo} mt-5`}>
        <h2 className={styles.heading2}>NÃO CORRA RISCOS DESNECESSÁRIOS</h2>
        <p className={`${styles.paragraph}  mt-5`}>
          Quero sua total confiança nesse projeto de transformação da sua vida,
          darei meu máximo e quero que você também faça o mesmo na hora dos
          treinos. <br />
          <b>O PRIMEIRO MÊS</b> é um período de teste. Se em até 30 dias você
          não sentir os resultados ou então não gostar da minha metodologia é só
          solicitar o <b>CANCELAMENTO</b> e você terá seu dinheiro de volta! Sem
          burocracia e continuamos amigos.
        </p>
        <Button styles="font-bold hover:bg-green-500" />
      </div>
    </section>
  );
};

export default Guarantee;
