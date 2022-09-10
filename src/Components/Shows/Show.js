import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Styles/shows.css';
import { Link } from 'react-router-dom';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { Icon } from '@iconify/react';
import { fetchdata } from '../../redux/Shows/Shows';

const TeamDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  const eachShows = useSelector((State) => (State.shows));
  const renderList = eachShows.shows.map((show) => {
    const {
      id, name, language, image, genres,
    } = show;
    return (
      <div className=" shows container" key={id}>
        <div
          className="list of shows ui link cards"
          aria-hidden="true"
        >
          <div className="card">
            <div className="image font-link">
              <img src={image.medium} alt={name} />
              <Link
                to={`/shows/${name}`}
                state={show}
                style={{ textDecoration: 'none' }}
              >
                <Icon className="arrow icon" icon="ion:arrow-forward-circle-outline" />
              </Link>
              <div className="title font-link">{name}</div>
              <div className="Language font-link">{language}</div>
              <div className="genre font-link">{genres}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>{renderList}</div>
  );
};

export default TeamDetails;
