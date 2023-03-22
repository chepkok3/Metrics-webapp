import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/countries';
import Country from './components/country';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Country />} />

        <Route path="/countries/:alpha3Code" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
