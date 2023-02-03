import { Route, Routes } from 'react-router-dom';
import { Movies } from './components/Movies';
import { Navbar } from './components/Navbar';
import { SingleMovieCard } from './components/SingleMovieCard';
import { MoviesScreen } from './screens/MoviesScreen';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<MoviesScreen/>} />
      <Route path='/movie/:id' element={<SingleMovieCard/>}/>
    </Routes>
  )
}

export default App;
