import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

const question = {
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
};

it(`Render ArtistQuestionScreen`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
