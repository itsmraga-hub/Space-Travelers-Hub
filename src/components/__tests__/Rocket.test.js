import renderer from 'react-test-renderer';

import Rocket from '../Rocket';

// props id, rocket_name, description, image, reserve, cancel, isReserved,

const rocket = {
  id: 1,
  rocket_name: 'SpaceX',
  description: 'Lorem ipsum text generate',
  image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
  reserve: () => true,
  cancel: () => true,
  reserved: false,
};

const rocket2 = {
  id: 2,
  rocket_name: 'SpaceX',
  description: 'Lorem ipsum text generate',
  image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
  reserve: () => true,
  cancel: () => true,
  reserved: true,
};

it('<Rocket /> renders properly as expected', () => {
  const {
    id, rocket_name, description, image, reserve, cancel, reserved,
  } = rocket;
  const tree = renderer.create(<Rocket
    id={id}
    rocket_name={rocket_name}
    description={description}
    image={image}
    reserve={reserve}
    cancel={cancel}
    reserved={reserved}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Rocket /> renders properly as expected', () => {
  const {
    id, rocket_name, description, image, reserve, cancel, reserved,
  } = rocket2;
  const tree = renderer.create(<Rocket
    id={id}
    rocket_name={rocket_name}
    description={description}
    image={image}
    reserve={reserve}
    cancel={cancel}
    reserved={reserved}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
