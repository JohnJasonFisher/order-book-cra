import React from 'react';
import './App.css';
import Button from './components/Button';
import DepthVisualizer from './components/DepthVisualizer';
import { OrderType } from './components/OrderBook';

function App() {
  return (
    <div className="App">
      <Button text={'I am a button'} backgroundColor={'red'} callback={() => {
        console.log('I was clicked');
      }}/>
      <DepthVisualizer depth={88} orderType={OrderType.BIDS} />
    </div>
  );
}

export default App;
