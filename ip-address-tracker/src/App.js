import React from 'react';
import './App.css';
import { InfoContainer } from './components/InfoContainer';
import { MapContainer } from './components/MapContainer';
import { SearchContainer } from './components/SearchContainer';

function App() {
  return (
    <div>
      <SearchContainer />
      <InfoContainer />
      <MapContainer />
    </div>
  );
}

export default App;
