import { MoviesContext } from "../context/MoviesContext";
import { usePopular } from "../hooks/usePopular";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { useTopRated } from "../hooks/useTopRated";
import { useUpComing } from "../hooks/useUpComing";
import { MoviesState } from "../interfaces/interfaces";
import { useReducer } from "react";
import { moviesReducer } from "../reducer/moviesReducer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MoviesProvider = ({ children }: Props) => {
  const { popular, isLoadingPopular } = usePopular();
  const { nowPlaying, isLoadingNowPlaying } = useNowPlaying();
  const { topRated, isLoadingTopRated } = useTopRated();
  const { upComing, isLoadingUpComing } = useUpComing();

  const movies_state: MoviesState = {
    // popular: popular,
    // nowPlaying: nowPlaying,
    // topRated: topRated,
    // upComing: upComing,
    // isLoadingPopular,
    // isLoadingNowPlaying,
    // isLoadingTopRated,
    // isLoadingUpComing,
    filteredMovies: [],
  };
  const [moviesState, dispatch] = useReducer(moviesReducer, movies_state);
  return (
    <MoviesContext.Provider
      value={{
        moviesState,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
