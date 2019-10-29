import React from "react";
import style from "./ArticleImage.module.css";

const ArticleImage = ({ url, title }) => {
  return (
    <div className={style.divStyle}>
      <img className={style.imgStyle} src={url} alt={title} />
    </div>
  );
};

export default ArticleImage;
