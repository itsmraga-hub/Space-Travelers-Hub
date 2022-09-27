/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import MissionSpace from '../components/MissionSpace';

import style from './css/Profile.module.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  const reservedMissions = missions.filter((obj) => obj.reserved);

  return (
    <>
      <main>
        <div className={style.MyMissions}>
          <h2 className={style.MissionHeader}>My Missions</h2>
          <ul className={style.Missions}>
            {
              reservedMissions.map((mission) => {
                const { mission_name, mission_id } = mission;
                return <MissionSpace key={mission_id} name={mission_name} />;
              })
            }
          </ul>
        </div>
      </main>
    </>
  );
};

export default Profile;
