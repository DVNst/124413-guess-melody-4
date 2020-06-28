import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer - when you click the Play button on a component, the button changes (pause / play)`, () => {
  window.HTMLMediaElement.prototype.pause = () => {};

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying={false}
        src={`path`}
        onPlayButtonClick={() => {}}
      />
  );

  let buttonPlay = audioPlayer.find(`button`);
  audioPlayer.setState({isLoading: false});

  expect(buttonPlay.hasClass(`track__button--pause`)).toBe(false);
  expect(buttonPlay.hasClass(`track__button--play`)).toBe(true);

  buttonPlay.simulate(`click`);
  buttonPlay = audioPlayer.find(`button`);
  expect(buttonPlay.hasClass(`track__button--pause`)).toBe(true);
  expect(buttonPlay.hasClass(`track__button--play`)).toBe(false);
});
