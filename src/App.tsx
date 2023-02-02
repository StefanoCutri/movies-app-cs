import React from 'react'
import { Navbar } from './components/Navbar';
import { useNowPlaying } from './hooks/useNowPlaying';
import { usePopular } from './hooks/usePopular';
import { useTopRated } from './hooks/useTopRated';
import { useUpComing } from './hooks/useUpComing';

const App = () => {

// useTopRated();
// usePopular();
// useNowPlaying();
// useUpComing();

  return (
    <>
      <Navbar/>
      <div>App</div>
    </>
  )
}

export default App;
