
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

// Component: a function that returns a JSX template & is exported at the bottom of the file
function App() {

  // any valid JavaScript here - before returning the component

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
