import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.slug}>
          <ArticleListItem
            title={article.title}
            shortText={article.shortText}
            pubDate={article.pubDate}
            slug={article.slug}
          />
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
