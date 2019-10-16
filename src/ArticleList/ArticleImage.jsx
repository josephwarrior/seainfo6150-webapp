import React from "react";
import style from "./ArticleImage.module.css";

// import { tsPropertySignature } from "@babel/types";

const ArticleImage = ({ url, title }) => {
  return (
    <div className={style.divStyle}>
      <img className={style.imgStyle} src={url} alt={title} />
    </div>
  );
};

export default ArticleImage;
