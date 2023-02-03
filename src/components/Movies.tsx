import {useContext} from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import '../styles/movie-card.css';

export const Movies = ()=> {

    const {movies_state} = useContext(MoviesContext);

    
    console.log(movies_state.isLoadingPopular)
    return (
    <>
        <p className="movie-type">Popular</p>
        <div className="movies-container">
            {
            movies_state.popular.map(p => {
                return ( <MovieCard movieInfo={{
                    movie: p,
                    isLoading: movies_state.isLoadingPopular
                }} key={p.id} />)
            })
            }
        </div>

        <p className="movie-type">Top rated</p>
        <div className="movies-container">
            {
            movies_state.topRated.map(p => {
                return ( <MovieCard movieInfo={{
                    movie: p,
                    isLoading: movies_state.isLoadingTopRated
                }} key={p.id} />)
            })
            }
        </div>

        <p className="movie-type">Now playing</p>
        <div className="movies-container">
            {
            movies_state.nowPlaying.map(p => {
                return ( <MovieCard movieInfo={{
                    movie: p,
                    isLoading: movies_state.isLoadingNowPlaying
                }} key={p.id} />)
            })
            }
        </div>

        <p className="movie-type">Up coming</p>
        <div className="movies-container">
            {
            movies_state.upComing.map(p => {
                return ( <MovieCard movieInfo={{
                    movie: p,
                    isLoading: movies_state.isLoadingUpComing
                }} key={p.id} />)
            })
            }
        </div>

        </>
    )

}
