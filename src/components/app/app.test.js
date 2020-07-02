import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const questions = [
  {
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
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `audio_src`,
    },
    answers: [{
      picture: `avatar_url_1`,
      artist: `John Snow`,
    }, {
      picture: `avatar_url_2`,
      artist: `Jack Daniels`,
    }, {
      picture: `avatar_url_3`,
      artist: `Jim Beam`,
    }],
  }
];

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer.create(
        <App
          errorsCount={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={-1}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const tree = renderer.create(
        <App
          errorsCount={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={1}
        />, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
