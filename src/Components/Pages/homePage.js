import React from 'react';
import DisplayList from '../Shows/ShowDisplay';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './styles/detailsPage.css';

const HomePage = () => (
  <div className="background">
    <Navbar />
    <Header />
    <DisplayList />
  </div>
);

export default HomePage;
