import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Trailers from "./Trailers";
import Trailer from "./Trailer";
import NavHeader from './NavHeader';
import MoviesProvider from './MoviesContext';
import FeaturedToday from "./FeaturedToday/FeaturedToday";
import MovieToday from './MovieToday/MovieToday';
import upNext from './Images/upNext.PNG';

export default function Main(){

return(
 <>
    <Router>
      <MoviesProvider>
      <Switch>
      {/* MovieToday moved to top - doesnt work otherwise -------------------- */}
          <Route path="/MovieToday/:id">
              <MovieToday />
          </Route>
          <Route path="/" exact>
            <div className='grid-header'>
                <NavHeader />
            </div>
            <div className='grid-trailers'>
                <Trailers />
                <img className= "upNext" src={upNext}/>
            </div>
                <FeaturedToday />
          </Route>

          <Route path="/:id">
            <div className='grid-header'>
                <NavHeader />
            </div>
            <Trailer />
          </Route>
          </Switch>
        </MoviesProvider>
      </Router>
</>

    );
}

