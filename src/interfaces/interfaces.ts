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

export interface TopRated {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
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





