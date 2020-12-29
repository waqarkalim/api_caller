import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import ImageGetter from './components/ImageGetter';
import RefreshButton from './components/RefreshButton';

function App() {
  const [toRefresh, setToRefresh] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        
        <ImageGetter toRefresh={toRefresh}/>

        <RefreshButton 
          toRefresh={toRefresh} 
          setToRefresh={setToRefresh} />

      </div>
    </div>
  );
}

export default App;
