import React from 'react';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { IoMdSettings } from 'react-icons/io';
import './styles/NavDetails.css';

const NavDetails = () => {
  const navigation = useNavigate();
  return (
    <nav className="NavDetails">
      <div className="navDetail">
        <div className="nav-details">
          <button
            className="back to menu "
            type="button"
            onClick={() => navigation('/')}
          >
            <FaLessThan />
          </button>
        </div>
        <div className="right">
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </div>
    </nav>
  );
};

export default NavDetails;
