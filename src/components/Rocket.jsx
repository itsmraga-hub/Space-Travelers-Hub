import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rocketsReducer';
import './css/Rocket.css';

function Rocket({ rocket }) {
  const rockets = useSelector((state) => state.rockets.rockets);
  const {
    // eslint-disable-next-line camelcase
    id, rocket_name, description, flickr_images,
  } = rocket;
  // eslint-disable-next-line camelcase
  const [image] = useState(flickr_images[0]);
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(id));
  };

  const cancel = () => {
    dispatch(cancelRocket(id));
  };

  // check if rocket is reserved
  const { reserved } = rockets.find((rocket) => rocket.id === id);

  return (
    <div className="rocket-card">
      {/* eslint-disable-next-line camelcase */}
      <img src={image} alt={rocket_name} />
      <div className="rocket-info">
        {/* eslint-disable-next-line camelcase */}
        <h2>{rocket_name}</h2>
        <>
          {reserved ? (<p className="reserve">Reserved</p>) : null}
          {description}
        </>
        {/* eslint-disable-next-line react/prop-types */}
        {!rocket.reserved && (
        <button type="button" className="reserved" onClick={reserve}>Reserve Rocket</button>
        )}
        {/* eslint-disable-next-line react/prop-types */}
        {rocket.reserved && (
        <button type="button" className="cancel" onClick={cancel}>Cancel Reservation</button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
