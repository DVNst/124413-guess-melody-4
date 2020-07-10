import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `audio_src`,
    genre: `rock`,
  }, {
    src: `audio_src`,
    genre: `blues`,
  }, {
    src: `audio_src`,
    genre: `jazz`,
  }, {
    src: `audio_src`,
    genre: `rock`,
  }],
};

it(`Render GenreQuestionScreen`, () => {
  const tree = renderer.create(
      <GenreQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
        userAnswers={[false, false, false, false]}
        onChange={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
