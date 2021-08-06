import './App.css';
import Trailers from './Trailers';
import MoviesProvider from './MoviesContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";




function App() {

  
  return (
    <div className="App">
  
        <MoviesProvider>
        
            <Trailers/>
       
        </MoviesProvider>
    
    </div>
  );
}

export default App;
