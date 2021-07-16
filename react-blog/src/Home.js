// import { useState, useEffect } from 'react';
import ArtList from './ArtList';
import useFetch from './useFetch';

const Home = () => {

  const { data: articles, isPending, error } = useFetch( "http://localhost:8000/articles" );

  return (
    <div className="home">
      { error && <div> { error } </div> }
      { isPending && <div> Loading... </div> }
      { articles && < ArtList articles={ articles } title="Article List:" /> }
    </div>
  );
}

export default Home;
