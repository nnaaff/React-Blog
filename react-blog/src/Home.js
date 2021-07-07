const Home = () => {

  const handleClick = () => {
    console.log("Button clicked.");
  }

  const handle2 = ( name ) => {
    console.log( name + " clicked me." );
  }

  return (
    <div className="home">
      <h2> Homepage </h2>
      <button onClick={ handleClick }> Click Me </button>
      <button onClick={ () => handle2( "X" ) }> Click Me Too </button>
    </div>
  );
}

export default Home;
