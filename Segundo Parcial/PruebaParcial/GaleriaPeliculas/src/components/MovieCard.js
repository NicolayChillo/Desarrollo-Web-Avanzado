import "../styles/styleMovieCard.css";

function MovieCard ( {movie} ){
    return (
        <div className="card">
            <img src={movie.image} alt={movie.title }/>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Fecha Estreno: {movie.release_date}</p>
            <p>Tiempo: {movie.running_time} minutos</p>
        </div>
    );

}

export default MovieCard;