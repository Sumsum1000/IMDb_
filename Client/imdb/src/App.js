import './App.css';
import Trailers from './Trailers';
import MoviesProvider from './MoviesContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Trailer from './Trailer';
import NavHeader from './NavHeader';


function App() {


  return (
    <div className="App">
      <div className='xxx'>
        <NavHeader />
      </div>
      <Router>
        <MoviesProvider>
          <Route path="/" exact>
            <Trailers />
          </Route>
          <Route path="/:id">
            <Trailer />
          </Route>
        </MoviesProvider>
      </Router>
    </div>
  );
}

export default App;
