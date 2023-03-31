import React from "react";
import { salesLink } from "../constants";

const Button = ({ styles }) => {
  return (
    <div className={`${styles.flexStart} flex-row mt-12`}>
      {salesLink.map((link, index) => (
        <a
          key={index}
          href={link.link}
          rel="noopener noreferrer"
          className={`py-1.5 px-3 bg-green-gradient font-poppins font-bold text-[18px] text-white outline-none rounded-full shadow shadow-white`}
        >
          QUERO FAZER PARTE!
        </a>
      ))}
    </div>
  );
};

export default Button;
