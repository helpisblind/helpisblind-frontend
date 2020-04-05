import React from 'react'
import Header from '../components/Header';
import './home.css'

function Home () {
  return (
    <div className='Home'>
      <Header />
      <div className='top'>
        <div className='wrapper'>
          <h1 className='prefix'>Help is</h1>
          <h1 className='suffix'>Blind</h1>
        </div>
      </div>
      <div className='mid'>
        <div className='wrapper'>
          <h1>How does it work?</h1>
          <h1 style={{fontSize: 100}}>Place holder animation?</h1>
        </div>
      </div> 
      <div className='bottom'>
        <div className='wrapper'>
          <h1 style={{fontSize: 100}}>Other ways to go</h1>
        </div>
      </div>            
    </div>
  )
}

export default Home;