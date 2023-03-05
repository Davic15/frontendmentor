import React from 'react';
import './App.css';
import { DescriptionContainer } from './components/DescriptionContainer';
import { ImageContainer } from './components/ImageContainer';

function App() {
  return (
    <div className='main-container'>
      <ImageContainer />
      <DescriptionContainer />
    </div>
  );
}

export default App;
