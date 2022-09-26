import { useState } from 'react';
import PropTypes from 'prop-types';

import './Rocket.css';

function Rocket({ rocket }) {
  const { id, rocket_name, description, flickr_images } = rocket;
  const [image, setImage] = useState(flickr_images[0]);
  return (
    <div className="rocket-card">
      <img src={image} alt={rocket_name} />
      <div className="rocket-info">
        <h2>{rocket_name}</h2>
        <p>{description}</p>
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
