/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchMissions, joinMission } from '../redux/missions/missions';

import Mission from '../components/Mission';

import style from './css/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const join = (e) => {
    e.preventDefault();
    dispatch(joinMission(e.target.id));
  };

  return (
    <section className={style.MissionSection}>
      <ul className={style.MissionsContainer}>
        <li className={style.MissionsTitle}>
          <h1>Mission</h1>
          <p>Description</p>
          <p>Status</p>
          <p>Empty</p>
        </li>
        {
        missions.map((mission) => {
          const {
            mission_id, mission_name, description, reserved,
          } = mission;
          return (
            <Mission
              key={mission_id}
              id={mission_id}
              name={mission_name}
              desc={description}
              join={join}
              isReserved={reserved}
            />
          );
        })
      }
      </ul>
    </section>
  );
};

export default Missions;
