import { To } from "react-router-dom";

export interface Result {
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
}

export interface UpComing {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Popular {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface NowPlaying {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface MovieDetails {
    adult:                 boolean;
    backdrop_path:         string;
    genres:                Genre[];
    id:                    number;
    original_language:     string;
    original_title:        string;
    overview:              string;
    poster_path:           string;
    release_date:          string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
}


export interface TopRated {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface MoviesContextInterface{
    movies: Result[] | []
}

export interface MoviesState{
    topRated: Result[] | [];
    nowPlaying: Result[] | [];
    popular:Result[] | [];
    upComing: Result[] | []
}






