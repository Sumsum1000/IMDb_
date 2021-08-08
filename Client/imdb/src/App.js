import './App.css';
import Trailers from './Trailers';
import MoviesProvider from './MoviesContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Trailer from './Trailer';




function App() {

  
  return (
    <div className="App">
   <Router>
        <MoviesProvider>
        <Route path="/trailers" exact>
            <Trailers/>
        </Route>
        <Route path="/trailers/:id">
          <Trailer/>
        </Route>
        </MoviesProvider>
    </Router>
    </div>
  );
}

export default App;
