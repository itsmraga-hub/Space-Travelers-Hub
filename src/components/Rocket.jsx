import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rocketsReducer';
import './css/Rocket.css';

Rocket.propTypes = {
    rocket: PropTypes.shape({
        id: PropTypes.number.isRequired,
        rocket_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

function Rocket({ rocket }) {
  const rockets = useSelector((state) => state.rockets.rockets);
  const { id, rocket_name, description, flickr_images,  } = rocket;
  const [image, setImage] = useState(flickr_images[0]);
    const dispatch = useDispatch();

    const reserve = () => {
        dispatch(reserveRocket(id));
        setReserved(true);
    };
 
    const cancel = () => {
        dispatch(cancelRocket(id));
        setReserved(false);
    };

    //check if rocket is reserved
    const reserved = rockets.find((rocket) => rocket.id === id).reserved;
        

  return (
    <div className="rocket-card">
      <img src={image} alt={rocket_name} />
      <div className="rocket-info">
        <h2>{rocket_name}</h2> 
        <p>{reserved? (<p className='reserve'>Reserved</p>):null}{description}</p> 
        {!rocket.reserved && (
            <button type="button" className='reserved' onClick={reserve}>Reserve Rocket</button>
        )}
        {rocket.reserved && (
            <button type="button" className='cancel' onClick={cancel}>Cancel Reservation</button>
        )}
      </div>
    </div>
  );
}

export default Rocket;
