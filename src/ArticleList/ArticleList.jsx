import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import style from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <article className={style.articleStyle}>
      <ul className={style.ulStyle}>
        {props.articles.map(article => (
          <li key={article.slug}>
            <ArticleListItem
              title={article.title}
              shortText={article.shortText}
              pubDate={article.pubDate}
              slug={article.slug}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
