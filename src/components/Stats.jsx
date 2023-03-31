import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-2 gap-4`}
  >
    {stats.map((stats) => (
      <div
        key={stats.id}
        className={`flex-1 flex justify-start items-center flex-row mx-6`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stats.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] yellow-gradient-text uppercase ml-3">
          {stats.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
