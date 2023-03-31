import { assinatura, areademembros, questionario, treino } from "../assets";
import styles, { layout } from "../style";

const Steps = () => (
  <div className="container my-24 px-6 mx-auto">
    <section className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mb-12`}>
        Como ter sucesso na <b>CONSULTORIA</b>
        <br /> em 4 passos
      </h2>

      <div className="grid lg:gap-x-12 lg:grid-cols-4 mt-8 text-center font-poppins sidebar">
        <div className="mb-12 lg:mb-0">
          <div className="rounded-lg shadow-lg h-full block bg-slate-50">
            <div className="flex justify-center">
              <img
                src={assinatura}
                alt="icon"
                className="w-[80px] h-[80px] inline-block -mt-8"
              />
            </div>
            <div className="p-6 ">
              <h5 className="text-lg font-semibold mb-4 ">ASSINATURA</h5>
              <hr className="border-t border-red-300 h-1 w-20 mx-auto mb-3" />
              <p>
                O pagamento da consultoria é através de uma recorrência mensal.
                A cobrança será a cada 30 dias, junto a renovação do seu treino.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 lg:mb-0">
          <div className="rounded-lg shadow-lg h-full block bg-slate-50">
            <div className="flex justify-center">
              <img
                src={areademembros}
                alt="icon"
                className="w-[80px] h-[80px] inline-block -mt-8"
              />
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold mb-4">ÁREA DE MEMBROS</h5>
              <hr className="border-t border-red-300 h-1 w-20 mx-auto mb-3" />
              <p>
                Após a confirmação do pagamento você receberá um email liberando
                o acesso a nossa ÁREA DE MEMBROS, utilize os dados fornecidos
                para entrar na plataforma.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 lg:mb-0">
          <div className="rounded-lg shadow-lg h-full block bg-slate-50">
            <div className="flex justify-center">
              <img
                src={questionario}
                alt="icon"
                className="w-[80px] h-[80px] inline-block -mt-8"
              />
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold mb-4">QUESTIONÁRIO</h5>
              <hr className="border-t border-red-300 h-1 w-20 mx-auto mb-3" />
              <p>
                Assista ao vídeo de boas-vindas no primeiro módulo e preencha o
                questionário cuidadosamente para que seja feita a melhor
                prescrição do treino pro seu objetivo.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg shadow-lg h-full block bg-slate-50">
            <div className="flex justify-center">
              <img
                src={treino}
                alt="icon"
                className="w-[80px] h-[80px] inline-block -mt-8"
              />
            </div>
            <div className="p-6">
              <h5 className="text-lg font-semibold mb-4">TREINO EM MÃOS</h5>
              <hr className="border-t border-red-300 h-1 w-20 mx-auto mb-3" />
              <p>
                O treino será entregue em até 48h após o envio do questionário
                devidamente preenchido. Com o planejamento em mãos, está na hora
                de começar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Steps;
