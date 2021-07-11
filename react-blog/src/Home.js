import { useState, useEffect } from 'react';
import ArtList from './ArtList';

const Home = () => {

  const [articles, setArticles] = useState( null );
  const [isPending, setIsPending] = useState( true );
  const [error, setError] = useState( null );

  useEffect( () => {

    fetch( "http://localhost:8000/articles" )

      .then( (res) => {
        if( !res.ok ) {  // if fetch Successful but problem with 'res' obj --> issue with endpoint
          throw Error( 'Could not fetch data for this resource!' );
        }
        return res.json();
      } )

      .then( (data) => {
        // console.log( data );
        setArticles( data );
        setIsPending( false );
        setError( null );  // if any subsequent fetch is successful --> error msg shouldn't show up
      } )

      .catch( (err) => {  // if fetch Unsuccessful --> network problem
        // console.log( err.message );
        setIsPending( false );
        setError( err.message );
      } );

  }, [] );  // only runs upon initial rendering of 'Home' component

  return (
    <div className="home">
      { error && <div> { error } </div> }
      { isPending && <div> Loading... </div> }
      { articles && < ArtList articles={ articles } title="Article List:" /> }
    </div>
  );
}

export default Home;
