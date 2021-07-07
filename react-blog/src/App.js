
import Navbar from './Navbar';
import Home from './Home';

// Component: a function that returns a JSX template & is exported at the bottom of the file
function App() {

  // any valid JavaScript here - before returning the component

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
