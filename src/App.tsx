import { Route, Routes} from 'react-router-dom';
import { SingleMovieCard } from './components/SingleMovieCard';
import { useGenresLocalStorage } from './helpers/useGenresLocalStorage';
import { MoviesScreen } from './screens/MoviesScreen';

const App = () => {

  useGenresLocalStorage();

  return (
    <Routes>
      <Route path='/' element={<MoviesScreen/>} />
      <Route path='/movie/:id' element={<SingleMovieCard />}/>
    </Routes>
  )
}

export default App;
