import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";

it(`Render renderer`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
