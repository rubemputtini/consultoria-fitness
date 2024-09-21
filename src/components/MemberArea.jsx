import styles, { layout } from "../style";
import { memberarea } from "../assets";

const MemberArea = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        APLICATIVO DE TREINO
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
        Explore todas as diversas funcionalidades! Você pode registrar seus treinos e monitorar cargas facilmente.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
        Acesse vídeos demonstrativos de forma prática no seu celular e assegure-se de executar os exercícios corretamente, maximizando seus resultados a qualquer hora e em qualquer lugar!
      </p>
    </div>
    <div className={layout.sectionImg}>
      <img
        src={memberarea}
        className="xs:w-[350px] sm:w-[350px] md:w-[500px]"
        alt="area-de-membros"
      />
    </div>
  </section>
);

export default MemberArea;
