import React, {PureComponent} from 'react';

import AudioPlayer from '../../components/audio-player/audio-player.jsx';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return (
        <Component
          {...this.props}

          renderPlayer={(src, id) => {
            const activePlayer = activePlayerId === id;

            return (
              <AudioPlayer
                src={src}
                isPlaying={activePlayer}
                onPlayButtonClick={() => this.setState({activePlayerId: activePlayer ? -1 : id})}
              />
            );
          }}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
