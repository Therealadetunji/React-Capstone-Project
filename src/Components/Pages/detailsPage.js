// import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import { useLocation } from 'react-router';
import './styles/detailsPage.css';
import NavDetails from '../Navbar/NavDetails';

const DetailsPage = () => {
  const location = useLocation();
  const image = location.state.image.medium;
  const { name } = location.state;
  const { averageRuntime } = location.state;
  const { officialSite } = location.state;
  const rating = location.state.rating.average;
  const { time } = location.state.schedule;
  const { days } = location.state.schedule;
  const { summary } = location.state;

  return (
    < >
      <div className="clicked info">
        ``
        <NavDetails />
        <div className="image font-link">
          <img src={image} alt={window.name} />
        </div>
        <div className="clicked content font-link">
          <div className="name">
            {name}
          </div>
          <div className="averageRuntime font-link">
            <b>AverageRuntime:  </b>
            {averageRuntime}
          </div>
          <div className="officialSite font-link">
            <b>OfficialSite:  </b>
            {officialSite}
          </div>
          <div className="rating font-link">
            <b>Rating:  </b>
            {rating}
          </div>
          <div className="schedule font-link">
            <b>Time:  </b>
            {time}
            --
            <b>Days:  </b>
            {days}
          </div>
          <div className="summary font-link">
            {summary}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsPage;
