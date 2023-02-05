import { Navigate, Route, Routes} from 'react-router-dom';
import { SingleMovieCard } from './components/SingleMovieCard';
import { MoviesScreen } from './screens/MoviesScreen';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<MoviesScreen/>} />
      <Route path='/movie/:id' element={<SingleMovieCard />}/>
      {/* <Navigate to='/' /> */}
      {/* <Route path='*' element={<Redirect to='/'/>}/> */}
    </Routes>
  )
}

export default App;
