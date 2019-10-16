import React from "react";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";
import style from "./ArticleListItem.module.css";
import { tsPropertySignature } from "@babel/types";
// import { tsPropertySignature } from "@babel/types";

const ArticleListItem = article => {
  return (
    <div className={style.articleItemContainerStyle}>
      <ArticleImage url={article.url} title={article.title} />
      <div className={style.buttonAndTextContainerStyle}>
        <div className={style.textContainerStyle}>
          <h2 className={style.h2Style}>{article.title}</h2>
          <p className={style.pStyle}>{article.shortText}</p>
          <time className={style.timeStyle} dateTime={article.pubYear}>
            {article.pubDate}
          </time>
        </div>
        <SlugButton buttonText={article.author} slug={article.slug} />
      </div>
    </div>
  );
};

export default ArticleListItem;
