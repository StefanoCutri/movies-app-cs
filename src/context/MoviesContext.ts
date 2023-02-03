import {createContext} from 'react'
import { MoviesState } from '../interfaces/interfaces';

export interface MoviesContextProps {
    movies_state: MoviesState
}

export const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);