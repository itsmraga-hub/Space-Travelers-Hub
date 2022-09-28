import renderer from 'react-test-renderer';

import MissionSpace from '../MissionSpace';

const mission = {
  name: 'SpaceX',
  id: '87GHTR6',
};

it('<Mission /> renders properly as expected', () => {
  const {
    name, id,
  } = mission;
  const tree = renderer.create(<MissionSpace
    id={id}
    name={name}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
