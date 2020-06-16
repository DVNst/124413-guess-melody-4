import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen.jsx";

it(`Render renderer`, () => {
  const tree = renderer.create(
      <GenreQuestionScreen/>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
