import React from "react";
import SlugButton from "./SlugButton";
import style from "./ArticleListItem.module.css";
import { tsPropertySignature } from "@babel/types";
// import { tsPropertySignature } from "@babel/types";

const ArticleListItem = article => {
  return (
    <div className={style.divStyle}>
      <h2 className={style.h2Style}>{article.title}</h2>
      <p className={style.pStyle}>{article.shortText}</p>
      <time className={style.timeStyle} dateTime={article.pubYear}>
        {article.pubDate}
      </time>
      <SlugButton buttonText={article.author} slug={article.slug} />
    </div>
  );
};

export default ArticleListItem;
