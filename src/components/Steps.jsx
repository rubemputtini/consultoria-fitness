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
                O pagamento da consultoria é mensal e recorrente. A cada 30 dias, sua assinatura será renovada, garantindo o ajuste constante do seu treino.
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
              <h5 className="text-lg font-semibold mb-4">APLICATIVO</h5>
              <hr className="border-t border-red-300 h-1 w-20 mx-auto mb-3" />
              <p>
                Após o pagamento, você receberá acesso imediato ao nosso APP DE TREINO. Basta seguir as instruções no email e começar agora, direto do seu celular.
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
                Assista ao vídeo de boas-vindas e preencha o questionário com atenção. Com suas respostas detalhadas, criarei um treino personalizado que se ajusta perfeitamente às suas metas e rotina.
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
                Seu treino será entregue em até 48 horas após o envio do questionário completo. Com tudo pronto, é hora de começar sua jornada!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Steps;
