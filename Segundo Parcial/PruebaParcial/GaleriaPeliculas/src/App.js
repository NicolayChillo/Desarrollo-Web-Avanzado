import { useFetch } from "./hook/useFetch";
import { getMovies } from "./services/moviesService";
import MoviesList from "./components/MoviesList";
import Loading from "./components/Loading";
import './App.css';

function App() {
  const { data: movies, loading, error } = useFetch(getMovies);
  return (
    <div className="App">
      <h1>Lista de Películas</h1>
      {loading && <Loading />} 
      {error && <p>Error: {error}</p>} 
      {!loading && !error && <MoviesList movies={movies} />} 
    </div> 
  );
}

export default App;
