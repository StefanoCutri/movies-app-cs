import { Movies } from './components/Movies';
import { Navbar } from './components/Navbar';
import { useNowPlaying } from './hooks/useNowPlaying';
import { usePopular } from './hooks/usePopular';
import { useTopRated } from './hooks/useTopRated';
import { MoviesProvider } from './context/MoviesProvider';

const App = () => {

  return (
 
    <MoviesProvider>
      <Navbar/>
      <Movies/>
    </MoviesProvider>
    
   
  )
}

export default App;
