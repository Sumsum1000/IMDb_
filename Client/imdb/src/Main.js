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

export default function Main(){

return(
 <>
<div className='grid-header'>
        <NavHeader />
</div>
    <Router>
        <MoviesProvider>
        <Switch>
          <Route path="/" exact>
          <div className='grid-trailers'>
            <Trailers />
          </div>
            <FeaturedToday />
          </Route>
          <Route path="/:id">
            <Trailer />
          </Route>
          </Switch>
        </MoviesProvider>
      </Router>
</>

    );
}

