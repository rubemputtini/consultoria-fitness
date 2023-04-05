import styles from "../style";
import { useState } from "react";

const FAQ = ({ questions }) => {
  const [questionsData, setQuestionsData] = useState(
    questions || questionsData
  );

  const toggleOpen = (index) => {
    const updatedQuestions = questionsData.map((question, i) => {
      if (i === index) {
        return { ...question, isOpen: !question.isOpen };
      } else {
        return question;
      }
    });
    setQuestionsData(updatedQuestions);
  };

  return (
    <section className="relative overflow-hidden font-poppins">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-3 text-sm text-yellow-500 text-center font-semibold uppercase tracking-px">
            Tem alguma pergunta?
          </p>
          <h2 className={`${styles.heading2} text-center mb-5`}>
            DÚVIDAS FREQUENTES
          </h2>

          <div className="mb-11 flex flex-wrap -m-1">
            {questionsData.map((question, index) => (
              <div key={index} className="w-full p-1">
                <div onClick={() => toggleOpen(index)}>
                  <div className="py-7 px-8 bg-slate-50 border-2 border-amber-200 rounded-2xl shadow-10xl">
                    <div className="flex flex-wrap justify-between -m-2">
                      <div className="flex-1 p-2">
                        <h3 className="mb-4 text-lg font-semibold leading-normal text-red-700">
                          {question.title}
                        </h3>
                        {question.isOpen && (
                          <div
                            dangerouslySetInnerHTML={{ __html: question.text }}
                            className="text-gray-600 font-light text-sm"
                          />
                        )}
                      </div>
                      <div className="w-auto p-2">
                        <svg
                          className={`relative top-1 ${
                            question.isOpen ? "transform rotate-180" : ""
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.834 7.5L10.0007 13.3333L4.16732 7.5"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
