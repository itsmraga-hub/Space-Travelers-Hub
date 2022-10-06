/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './css/Rocket.css';

function Rocket({
  id, rocket_name, description, image, reserve, cancel, isReserved,
}) {
  return (
    <div className="rocket-card">
      <img src={image} alt={rocket_name} />
      <div className="rocket-info">
        <h2>{rocket_name}</h2>
        <>
          <p className="reserve">
            {
            isReserved ? 'Reserved' : 'Not reserved'
          }
          </p>
          {description}
        </>
        <div className="rocket-buttons">
          {
            isReserved ? (
              <button type="button" className="cancel" onClick={() => cancel(id)}>Cancel Reservation</button>
            ) : (
              <button type="button" className="reserved" onClick={() => reserve(id)}>Reserve Rocket</button>
            )
          }
        </div>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  isReserved: PropTypes.bool,
};

export default Rocket;
