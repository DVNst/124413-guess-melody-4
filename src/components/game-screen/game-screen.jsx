import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {GameType} from '../../const.js';

import Header from '../header/header.jsx';

const GameScreen = ({type, children, mistakes}) => {

  return (
    <section className={`game game--${type}`}>
      <Header mistakes={mistakes} />
      {children}
    </section>
  );
};

GameScreen.propTypes = {
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  mistakes: state.mistakes,
});

export {GameScreen};
export default connect(mapStateToProps)(GameScreen);
