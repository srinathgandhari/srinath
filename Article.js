import React from 'react';

const Article = ({ article, onDelete }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <button onClick={() => onDelete(article.id)}>Delete</button>
    </div>
  );
};

export default Article;
