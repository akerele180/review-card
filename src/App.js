import React from 'react';
import Card from './components/card';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="title">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default App;