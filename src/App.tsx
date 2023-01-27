import React from 'react';
import './App.css';
import DepthVisualizer from './components/DepthVisualizer';
import Footer from './components/Footer';
import { OrderType } from './components/OrderBook';

function App() {
  return (
    <div className="App">
      <Footer isFeedActive={false} />
      <DepthVisualizer depth={88} orderType={OrderType.BIDS} />
    </div>
  );
}

export default App;
