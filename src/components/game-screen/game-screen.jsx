import React from "react";
import PropTypes from "prop-types";

import { GameType } from "../../const.js";

import Header from "../header/header.jsx";

const GameScreen = (props) => {
  const {type, children} = props;

  return (
    <section className={`game game--${type}`}>
      <Header />
      {children}
    </section>
  );
};

GameScreen.propTypes = {
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GameScreen;
