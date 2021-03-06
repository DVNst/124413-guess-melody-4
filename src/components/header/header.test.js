import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

it(`Render renderer`, () => {
  const tree = renderer.create(
      <Header mistakes={3}/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
