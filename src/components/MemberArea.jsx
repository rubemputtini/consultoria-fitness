import styles, { layout } from "../style";
import { memberarea } from "../assets";

const MemberArea = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ÁREA DE MEMBROS <br /> EXCLUSIVA
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
        São mais de 110 vídeos mostrando a execução correta dos exercícios para
        garantir sua segurança durante a realização dos treinos
      </p>
    </div>
    <div className={layout.sectionImg}>
      <img
        src={memberarea}
        className="xs:w-[350px] sm:w-[350px] md:w-[500px]"
      />
    </div>
  </section>
);

export default MemberArea;
