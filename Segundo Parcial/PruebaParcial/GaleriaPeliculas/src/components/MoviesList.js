import MovieCard from './MovieCard';

function MovieList ( {movies} ) {
    return (
        <div className="grid">
            {movies.map((m) => (
                // key es para que react identifique cada componente de manera unica
                <MovieCard key={m.id} movie={m} /> // pasa el producto como prop
            ))}
        </div>
    );
}

export default MovieList;