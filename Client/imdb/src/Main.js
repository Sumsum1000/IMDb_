import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import Trailers from "./Trailers";
import Trailer from "./Trailers";

export default function Main(){

return(
<div>
   <Router>
    <Switch>
    <Route path="/" exact>
    <Trailers />
    </Route>
    <Route path="/:id" >
        <Trailer />
    </Route>
    </Switch>
</Router>
</div>

    );
}

