import {createContext} from 'react'
import { MoviesState } from '../interfaces/interfaces';

export interface MoviesContextProps {
    moviesState: MoviesState;
}

export const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);