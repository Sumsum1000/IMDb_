import './App.css';
import Trailers from './Trailers';
import MoviesProvider from './MoviesContext';




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
