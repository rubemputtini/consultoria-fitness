import styles from "../style";
import { salesLink } from "../constants";
//Se você gostou desse site e quer treinar comigo, tenho um cupom especial de 10% OFF no primeiro mês, é só colocar #soudev na página de assinatura e vir comigo! :)

const CTA = () => (
  <section className="flex justify-center items-center font-poppins mb-6">
    <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="flex flex-col relative p-6 mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 bg-gray-800 text-white">
        <div className="absolute z-[3] -right-1/2 top-0 w-[80%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[80%] h-[50%] rounded-full red__gradient" />
        <h3 className="mb-4 text-2xl font-semibold">Tudo isso por:</h3>
        <div className="flex justify-center items-baseline mt-2">
          <span className="mb-5 mr-2 text-5xl font-extrabold">R$ 119,90</span>
          <span className="text-gray-400">/mês</span>
        </div>
        <p className="font-bold sm:text-lg yellow-gradient-text mb-7">
          ASSINATURA SEM FIDELIDADE
        </p>
        <hr className="border-t border-yellow-50 h-1 w-50" />
        <ul role="list" className="mt-8 mb-8 space-y-4 text-left">
          <li key="planejamento" className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>
              <b>NOVO PLANEJAMENTO</b> a cada 5 semanas
            </span>
          </li>
          <li key="area" className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>
              <b>ÁREA DE MEMBROS</b> com exercícios em vídeo
            </span>
          </li>
          <li key="atendimento" className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>
              <b>ATENDIMENTO RÁPIDO</b> para tirar dúvidas
            </span>
          </li>
        </ul>
        <div className={`${styles.flexStart} flex-row`}>
          <div
            className={`${styles.flexCenter} w-[260px] h-[40px] rounded-full bg-red-gradient p-[2px] cursor-pointer`}
          >
            <div
              className={`${styles.flexCenter} flex-col text-white w-[100%] h-[100%] rounded-full`}
            >
              {salesLink.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  rel="noopener noreferrer"
                  className="font-poppins font-bold text-[18px] leading-[23px]"
                >
                  <span> QUERO COMEÇAR AGORA!</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
