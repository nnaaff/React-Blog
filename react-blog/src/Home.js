import { useState } from 'react';

const Home = () => {

  const [articles, setArticles] = useState( [
    { title: 'My New Blog', body: 'lorem ipsum...', author: 'A', id: 1 },
    { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'B', id: 2 },
    { title: 'Wellness Tips', body: 'lorem ipsum...', author: 'C', id: 3 }
  ] );

  return (
    <div className="home">
      { articles.map( (article) => (
        <div className="article-preview" key={ article.id }>
          <h2> { article.title } </h2>
          <p> { article.body } </p>
          <p> Written by: { article.author } </p>
        </div>
      ) ) }
    </div>
  );
}

export default Home;
