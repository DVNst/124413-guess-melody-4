import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';

const song = {
  src: `audio-src`,
};

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer
        isPlaying={false}
        src={song.src}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
