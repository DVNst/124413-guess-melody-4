import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistQuestionScreen from "./artist-question-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``
    },
    answers: [
      {
        artist: `one`,
        picture: `pic-one`,
      },
      {
        artist: `two`,
        picture: `pic-two`,
      },
      {
        artist: `three`,
        picture: `pic-three`,
      },
    ],
  }
};

it(`ArtistQuestionScreen - Click on user answer returns the correct callback (question and selected answer)`, () => {
  const {question} = mock;
  const userAnswer = question.answers[0];

  const onAnswer = jest.fn();

  const artistQuestionScreen = shallow(
      <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />
  );

  const answerInputs = artistQuestionScreen.find(`.artist__input`);
  const firstAnswerInput = answerInputs.at(0);

  firstAnswerInput.simulate(`change`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
