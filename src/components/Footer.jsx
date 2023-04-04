import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col md:flex-row w-full md:w-auto items-center">
        <img
          src={logo}
          alt="rubem_puttini"
          className="w-[266px] h-[72px] object-contain xs:mb-7"
        />
        <p className={`${styles.text} ml-6`}>
          <b>AVISO:</b> Para garantir que as estratégias da "Consultoria Fitness
          Online com Rubem Puttini" tragam resultados significativos durante os
          treinos, é necessário aplicar todos os ensinamentos durante a
          consultoria conforme o recomendado. Os resultados podem variar e
          dependem unicamente da dedicação de cada aluno em colocar em prática
          as técnicas apresentadas.
          <br />
          <br />
          <b>ATENÇÃO:</b> Este produto não substitui o parecer médico
          profissional. Sempre consulte um médico para tratar de assuntos
          relativos à saúde.
        </p>
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-col items-center md:items-start md:flex-row">
        <p className="font-poppins font-normal text-center md:text-left text-[18px] leading-[27px] text-white">
          Rubem Puttini © 2021.
        </p>
        <p className="font-poppins font-normal text-center md:text-left text-[18px] leading-[27px] text-white order-last md:order-none">
          &nbsp;Todos os direitos reservados
        </p>
      </div>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social) => (
          <a href={social.link} target="_blank" key={social.id}>
            <img
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                social.id !== socialMedia[socialMedia.length - 1].id
                  ? "mr-6"
                  : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
