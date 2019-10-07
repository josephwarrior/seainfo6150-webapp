import React from "react";
// import { tsPropertySignature } from "@babel/types";

const SlugButton = article => {
  return (
    <div>
      <button onClick={() => alert(article.slug)}>show article slug</button>
    </div>
  );
};

export default SlugButton;
