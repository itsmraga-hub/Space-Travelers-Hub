import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../components/Rocket';
import { reserveRocket, cancelRocket } from '../redux/rocketsReducer';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  const reserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancel = (id) => {
    dispatch(cancelRocket(id));
  };

  return (
    <div className="rockets">
      {
        rockets.map((rocket) => {
          const {
            id, rocket_name, description, flickr_images,
            reserved,
          } = rocket;
          return (
            <Rocket
              key={id}
              id={id}
              rocket_name={rocket_name}
              description={description}
              image={flickr_images[0]}
              reserve={reserve}
              cancel={cancel}
              isReserved={reserved}
            />
          );
        })
      }
    </div>
  );
}

export default Rockets;
