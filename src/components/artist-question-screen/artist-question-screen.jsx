import React from "react";
import PropTypes from 'prop-types';

import {GameType} from "../../const.js";

import Header from "../header/header.jsx";

const ArtistQuestionScreen = (props) => {
  const {question, onAnswer} = props;
  const {song, answers} = question;

  return (
    <section className="game game--artist">
      <Header />
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio
                src={song.src}
              />
            </div>
          </div>
        </div>
        <form className="game__artist">
          {answers.map((answer, i) => (
            <div className="artist" key={i}>
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                defaultValue={`answer-${i}`}
                id={`answer-${i}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer);
                }}
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
