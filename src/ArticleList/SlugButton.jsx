import React from "react";
import style from "./SlugButton.module.css";

const SlugButton = ({ buttonText, slug }) => {
  return (
    <button className={style.buttonStyle} onClick={() => alert(slug)}>
      {buttonText}
    </button>
  );
};

export default SlugButton;
