import React from 'react';
import Header from './components/Header';
import PledgeHeader from './components/PledgeHeader';
import './App.css';
import PledgeBody from './components/PledgeBody';

function App() {
  return (
    <div className="App">
      <Header />
      <PledgeHeader />
      <PledgeBody/>
    </div>
  );
}

export default App;
