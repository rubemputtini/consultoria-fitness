import styles from "../style";
import { gym } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
    ></div>

    <section className="flex flex-col md:flex-row justify-between items-center w-full p-5">
      <div className="md:mr-4 mr-0 sm:ml-8 xs:mx-4">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[35px] text-[25px] text-white">
          Transforme seu corpo e recupere sua autoestima treinando <br />
          <span className="yellow-gradient-text">
            MENOS DE 45 MINUTOS POR DIA!
          </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Não há nada mais frustrante do que passar horas na academia e não
          notar nenhuma mudança, não é mesmo? Mas aqui, você dará adeus a isso.{" "}
          Graças a um <b>MÉTODO INTELIGENTE DE TREINAMENTO</b>, você verá todo o
          seu esforço ser recompensado!
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <div>
        <img
          src={gym}
          alt="exercise"
          className="w-[100%] h-[100%] relative z-[5] xs:mt-3"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 red__gradient" />
        <div className="absolute z-[1] w-[40%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
