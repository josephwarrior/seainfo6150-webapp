import React from "react";
// import { tsPropertySignature } from "@babel/types";

const ArticleListItem = article => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.shortText}</p>
      <time dateTime={article.pubYear}>{article.pubDate}</time>
      <button onClick={() => alert(article.slug)}>show article slug</button>
    </div>
  );
};

export default ArticleListItem;
