/* eslint-disable camelcase */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchMissions } from '../redux/missions/missions';

import Mission from '../components/Mission';

import style from './css/Missions.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

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
          const { mission_id, mission_name, description } = mission;
          return <Mission key={mission_id} name={mission_name} desc={description} />;
        })
      }
      </ul>
    </section>
  );
};

export default Missions;
