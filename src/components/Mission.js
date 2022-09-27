const Mission = (props) => {
  const mission = props;
  const { name, desc } = mission;

  return (
    <li>
      <h2>{ name }</h2>
      <p>{ desc }</p>
      <a href="./">Not a member</a>
      <button type="button">Join Mission</button>
    </li>
  );
};

export default Mission;
