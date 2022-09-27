import { useState, useEffect } from 'react';
import Rocket from '../components/Rocket';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rocketsReducer';

function Rockets() {
    const rockets = useSelector((state) => state.rockets.rockets);
    console.log(rockets);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRockets());
    }, []);

    return (
        <div className="rockets-container">
        {rockets.map((rocket,index) => (
            <Rocket key={index} rocket={rocket} />
        ))}
        </div>
    );
}

export default Rockets;
