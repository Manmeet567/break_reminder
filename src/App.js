import Clock from './components/Clock';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import { useState } from 'react';

function App() {

  let [playButton, setPlayButton] = useState(false);

  function startTimer(){
    playButton ? setPlayButton(false) : setPlayButton(true);
  }

  return (
    <div className="App">
      <Navbar />
      <Clock playButton={playButton}/>
      <AppFooter playButton={playButton} startTimer={startTimer}/>
    </div>
  );
}

export default App;
