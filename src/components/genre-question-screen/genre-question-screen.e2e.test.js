import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreQuestionScreen from "./genre-question-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`GenreQuestionScreen - Click on user answer returns the correct callback (question and selected answers)`, () => {
  const {question} = mock;
  const userAnswer = [true, false, false, false];

  const onAnswer = jest.fn();

  const genreQuestionScreen = shallow(
      <GenreQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />
  );

  const form = genreQuestionScreen.find(`.game__tracks`);
  const firstAnswerInput = form.find(`.game__input`).at(0);

  firstAnswerInput.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
