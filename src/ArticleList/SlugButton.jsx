import React from "react";
import style from "./SlugButton.module.css";
// import { tsPropertySignature } from "@babel/types";

const SlugButton = ({ buttonText, slug }) => {
  return (
    //<div className={style.divStyle}>
    <button className={style.buttonStyle} onClick={() => alert(slug)}>
      {buttonText}
    </button>
    // </div>
  );
};

export default SlugButton;
