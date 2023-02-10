import { useContext, useEffect, useReducer } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { MovieCard } from "./MovieCard";
import "../styles/movie-card.css";
import { moviesReducer } from "../reducer/moviesReducer";
import { usePopular } from "../hooks/usePopular";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { useTopRated } from "../hooks/useTopRated";
import { useUpComing } from "../hooks/useUpComing";

export const Movies = () => {
  const { moviesState } = useContext(MoviesContext);
  const { popular, isLoadingPopular } = usePopular();
  const { nowPlaying, isLoadingNowPlaying } = useNowPlaying();
  const { topRated, isLoadingTopRated } = useTopRated();
  const { upComing, isLoadingUpComing } = useUpComing();

  const [state, dispatch] = useReducer(moviesReducer, moviesState);
  const filteredState = useContext(MoviesContext);

  // useEffect(() => {
  //   console.log(state.filteredMovies);
  // }, [filteredState]);

  return (
    <>
      <div className="movies-container">
        {filteredState.moviesState.filteredMovies.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingTopRated,
              }}
              key={p.id}
            />
          );
        })}
      </div>
      <p className="movie-type">Popular</p>
      <div className="movies-container">
        {popular.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingPopular,
              }}
              key={p.id}
            />
          );
        })}
      </div>

      <p className="movie-type">Top rated</p>
      <div className="movies-container">
        {topRated.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingTopRated,
              }}
              key={p.id}
            />
          );
        })}
      </div>

      <p className="movie-type">Now playing</p>
      <div className="movies-container">
        {nowPlaying.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingNowPlaying,
              }}
              key={p.id}
            />
          );
        })}
      </div>

      <p className="movie-type">Up coming</p>
      <div className="movies-container">
        {upComing.map((p) => {
          return (
            <MovieCard
              movieInfo={{
                movie: p,
                isLoading: isLoadingUpComing,
              }}
              key={p.id}
            />
          );
        })}
      </div>
    </>
  );
};
