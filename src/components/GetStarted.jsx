import styles from "../style";
import { salesLink } from "../constants";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[200px] h-[40px] rounded-full bg-yellow-gradient p-[2px] cursor-pointer mt-5`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        {salesLink.map((link, index) => (
          <a
            key={index}
            href={link.link}
            rel="noopener noreferrer"
            className="font-poppins font-medium text-[18px] leading-[23px]"
          >
            <span className="yellow-gradient-text"> EU QUERO MUDAR!</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default GetStarted;
