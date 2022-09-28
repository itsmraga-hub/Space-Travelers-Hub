import renderer from 'react-test-renderer';

import Mission from '../Mission';

const mission = {
  name: 'SpaceX',
  desc: 'Lorem ipsum text generate',
  id: '56DFRE',
  join: () => true,
  reserved: false,
};

const mission2 = {
  name: 'SpaceX',
  desc: 'Lorem ipsum text generate',
  id: '56DFRE',
  join: () => true,
  reserved: true,
};

it('<Mission /> renders properly as expected', () => {
  const {
    name, desc, id, join, reserved,
  } = mission;
  const tree = renderer.create(<Mission
    name={name}
    id={id}
    desc={desc}
    join={join}
    reserved={reserved}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Mission /> renders properly as expected', () => {
  const {
    name, desc, id, join, reserved,
  } = mission2;
  const tree = renderer.create(<Mission
    name={name}
    id={id}
    desc={desc}
    join={join}
    reserved={reserved}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
