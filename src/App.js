import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './Components/Pages/homePage';
import DetailsPage from './Components/Pages/detailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
