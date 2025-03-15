import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './ArticleList';
import AddArticle from './AddArticle';

function App() {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  const deleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddArticle onAdd={addArticle} />
        <ArticleList articles={articles} onDelete={deleteArticle} />
      </header>
    </div>
  );
}

export default App;
