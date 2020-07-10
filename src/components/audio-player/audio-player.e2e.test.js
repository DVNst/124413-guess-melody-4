import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer - Click by Play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying={false}
        isLoading={false}
        src={`path`}
        onPlayButtonClick={handlePlayButtonClick}
      >
        <audio />
      </AudioPlayer>
  );

  const trackButton = audioPlayer.find(`.track__button`);
  trackButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
