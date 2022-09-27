import Rocket from '../components/Rocket';
import { useSelector, useDispatch } from 'react-redux'; 

function Rockets() {
    const rockets = useSelector((state) => state.rockets.rockets)

    return (
        <div className="rockets-container">
        {rockets.map((rocket,index) => (
            <Rocket key={index} rocket={rocket} />
        ))}
        </div>
    );
}

export default Rockets;
