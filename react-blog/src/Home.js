import { useState, useEffect } from 'react';
import ArtList from './ArtList';

const Home = () => {

  const [articles, setArticles] = useState( null );
  const [isPending, setIsPending] = useState( true );

  useEffect( () => {
    fetch( "http://localhost:8000/articles" )
      .then( (res) => {
        return res.json();
      } )
      .then( (data) => {
        // console.log( data );
        setArticles( data );
        setIsPending( false );
      } );
  }, [] );

  return (
    <div className="home">
      { isPending && <div> Loading... </div> }
      { articles && < ArtList articles={ articles } title="Article List:" /> }
    </div>
  );
}

export default Home;
