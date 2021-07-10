import { useState } from 'react';
import ArtList from './ArtList';

const Home = () => {

  const [articles, setArticles] = useState( [
    { title: 'My New Blog', body: 'lorem ipsum...', author: 'A', id: 1 },
    { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'B', id: 2 },
    { title: 'Wellness Tips', body: 'lorem ipsum...', author: 'A', id: 3 }
  ] );

  const handleDelete = ( id ) => {
    // use setArticles() here to update 'articles'
    // 'filter' does not modify original list
    const newArticles = articles.filter( (article) => article.id !== id );
    setArticles( newArticles );
  }

  return (
    <div className="home">
      <ArtList articles={ articles } title="Article List:" handleDelete={ handleDelete } />
      <ArtList articles={ articles.filter( (article) => article.author === 'A' ) } title="A's Articles:" handleDelete={ handleDelete } />
    </div>
  );
}

export default Home;
