import React from 'react';
import './App.css';
import DepthVisualizer from './components/DepthVisualizer';
import Footer from './components/Footer';
import GroupingSelectBox from './components/GroupingSelectBox';
import { OrderType } from './components/OrderBook';

function App() {
  return (
    <div className="App">
      <Footer isFeedActive={false} />
      <GroupingSelectBox dropdownOptions={[0.5, 1, 2]} />
      <DepthVisualizer depth={88} orderType={OrderType.BIDS} />
    </div>
  );
}

export default App;
