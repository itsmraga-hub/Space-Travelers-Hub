import style from './css/Mission.module.css';

const Mission = (props) => {
  const mission = props;
  const {
    name, desc, id, join, isReserved,
  } = mission;

  return (
    <li className={style.Mission}>
      <h2 className={style.Title}>{ name }</h2>
      <p className={style.desc}>{ desc }</p>
      <div data-id>
        <a rel="noreferrer" href="##" className={`${isReserved ? style.reserved : ''} ${style.badge}`}>
          {
        isReserved ? 'Active Member' : 'Not A Member'
      }
        </a>
      </div>
      <button type="button" id={id} onClick={join} className={`${isReserved ? style.reserved : ''} ${style.btn}`}>
        {
          isReserved ? 'Leave Mission' : 'Join Mission'
        }
      </button>
    </li>
  );
};

export default Mission;
