import axios from "axios";

const API_KEY = "fcb98e3acc4503ce4e709825278891ec"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function getTrendingMovies() {
    const response = await axios.get("trending/movie/day", {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.results
}

export async function getMovieDetails(movieId) {
    const response = await axios.get(`movie/${movieId}`, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data
}