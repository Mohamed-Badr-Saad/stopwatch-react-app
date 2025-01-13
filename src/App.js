import './App.css';
import Button from './components/Button/button';
import Minutes from './components/minute/minute';
import { useState } from 'react';
import Seconds from './components/second/second';

function App() {
  const increaseMinutes = () => {
    setMinutes(minutes + 1);
  };
  const decreaseMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    }
  };

  const [minutes, setMinutes] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        {[<h1>Casio</h1>, <h2> StopWatch</h2>]}   {/*React can render arrays */}
        <div className='flex-container'>
          <Button text='+' onClickHandler={increaseMinutes}></Button>
          <Minutes value={minutes}> </Minutes>
          <Button text='-' onClickHandler={decreaseMinutes}></Button>
        </div>


        {minutes === 0 ? null : <Seconds minutes={minutes} setMinutesHandler={setMinutes}></Seconds>}

      </header>
    </div>
  );
}

export default App;
