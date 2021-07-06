
import './App.css';

function App() {

  // any valid JavaScript here - before returning the component
  const title = "Welcome!";
  const visits = 25;
  const google = "https://www.google.com";

  return (
    <div className="App">

      <div className="content">

        <h1> { title } </h1>
        <h2> Visited { visits } times. </h2>
        <h3><a href={ google }> Google </a></h3>
        <h4> Random Number:  { Math.random() } </h4>

      </div>

    </div>
  );
}

export default App;
