import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ConnectWallet from './components/ConnectWallet';
import CreateContract from './components/CreateContract';
import CreateSession from './components/CreateSession';
import JoinVideo from './components/JoinVideo';
import ShowVideo from './components/ShowVideo';

function App() {

  const [curStep, setCurStep] = useState(0);


  return (
    <div className="App">
      {curStep == 0 && <ConnectWallet setCurStep={setCurStep} />}
      {curStep == 1 && <CreateContract setCurStep={setCurStep} />}
      {curStep == 2 && <CreateSession setCurStep={setCurStep} />}
      {curStep == 3 && <CreateSession setCurStep={setCurStep} />}
      {curStep == 4 && <JoinVideo setCurStep={setCurStep} />}
      {curStep == 5 && <ShowVideo setCurStep={setCurStep} />}
    </div>
  );
}

export default App;
