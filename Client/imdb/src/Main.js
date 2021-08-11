import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Trailers from "./Trailers";
import Trailer from "./Trailers";
import NavHeader from './NavHeader';
import MoviesProvider from './MoviesContext';

export default function Main(){

return(

   /* <Router>
    <Switch>
    <Route path="/" exact>
    <Trailers />
    </Route>
    <Route path="/:id" >
        <Trailer />
    </Route>
    </Switch>
</Router> */
 <div>

<div className='xxx'>
        <NavHeader />
      </div>
      <Router>
        <MoviesProvider>
        <Switch>
          <Route path="/" exact>
            <Trailers />
          </Route>
          <Route path="/:id">
            <Trailer />
          </Route>
          </Switch>
        </MoviesProvider>
      </Router>
</div>


    );
}

