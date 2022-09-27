const Mission = (props) => {
  const mission = props;
  const {
    name, desc, id, join, isReserved,
  } = mission;

  return (
    <li>
      <h2>{ name }</h2>
      <p>{ desc }</p>
      <a rel="noreferrer" href="##">
        {
        isReserved ? 'Active Member' : 'Not A Member'
      }
      </a>
      <button type="button" id={id} onClick={join}>
        {
          isReserved ? 'Leave Mission' : 'Join Mission'
        }
      </button>
    </li>
  );
};

export default Mission;
