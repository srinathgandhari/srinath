import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, onDelete }) => {
  return (
    <div>
      <h2>News Articles</h2>
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        articles.map((article) => (
          <Article key={article.id} article={article} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default ArticleList;
