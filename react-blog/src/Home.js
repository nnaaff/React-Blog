import { useState } from 'react';
import ArtList from './ArtList';

const Home = () => {

  const [articles, setArticles] = useState( [
    { title: 'My New Blog', body: 'lorem ipsum...', author: 'A', id: 1 },
    { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'B', id: 2 },
    { title: 'Wellness Tips', body: 'lorem ipsum...', author: 'A', id: 3 }
  ] );

  return (
    <div className="home">
      <ArtList articles={ articles } title="List of Articles:" />
      <ArtList articles={ articles.filter( (article) => article.author === 'A' ) } title="A's Articles:" />
    </div>
  );
}

export default Home;
