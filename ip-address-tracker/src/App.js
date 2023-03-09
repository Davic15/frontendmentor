import React, { useState } from 'react';
import './App.css';
import { InfoContainer } from './components/InfoContainer';
import { Map } from './components/Map';
import { SearchContainer } from './components/SearchContainer';

function App() {

  const [domainData, setDomainData] = useState({})


  const handleData = (e) => {
    setDomainData(e);
  }

  return (
    <div className='container'>
      <SearchContainer onHandleData={handleData}/>
      <InfoContainer domainData={domainData} />
      <Map domainData={domainData}/>
    </div>
  );
}

export default App;
