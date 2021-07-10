import { useState, useEffect } from 'react';
import ArtList from './ArtList';

const Home = () => {

  const [articles, setArticles] = useState( null );

  const [name, setName] = useState( 'A' );

  useEffect( () => {
    fetch( "http://localhost:8000/articles" ) 
      .then( (res) => {
        return res.json();
      } )
      .then( (data) => {
        // console.log( data );
        setArticles( data );
      } );
  }, [] );

  return (
    <div className="home">
      { articles && < ArtList articles={ articles } title="Article List:" /> }
    </div>
  );
}

export default Home;
