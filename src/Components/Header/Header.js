import React from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from '../../redux/Shows/Shows';
import './styles/header.css';

const Header = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchData(e.target.value));
    }
  };

  return (

    <div className="Header">
      <div className="Header-container">
        <h1>TV Shows</h1>
      </div>
      <div>
        <input className="search bar" type="text" placeholder="Search.." onKeyPress={(e) => handleSearch(e)} />
      </div>
    </div>
  );
};

export default Header;
