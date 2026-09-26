import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";

function MovieDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchMovie() {
            const data = await getMovieDetails(movieId);
            setMovie(data);
        }
        fetchMovie();
    }, [movieId]);

    // Safely retrieve the path to go back to, defaulting to "/" if location.state is null
    const backLinkHref = location.state?.from ?? location.state?.pathname ?? "/";

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const defaultImg = "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg";

    return (
        <div>
            <Link to={backLinkHref}>Go back</Link>

            {movie.poster_path ? (
                <img src={imageUrl} alt={movie.title} />
            ) : (
                <img src={defaultImg} alt={movie.title} />
            )}

            <div className="container">
                <h1>{movie.title}</h1>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                    {movie.genres?.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MovieDetails;