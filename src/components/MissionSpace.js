import style from './css/MissionSpace.module.css';

const MissionSpace = (props) => {
  const mission = props;
  const { name, id } = mission;
  return (
    <li id={id} className={style.Mission}>{name}</li>
  );
};

export default MissionSpace;
