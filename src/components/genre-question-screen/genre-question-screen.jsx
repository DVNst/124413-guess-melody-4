import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {GameType} from '../../const.js';

import GenreQuestionItem from '../genre-question-item/genre-question-item.jsx';

class GenreQuestionScreen extends PureComponent {
  render() {
    const {question, onAnswer, renderPlayer, userAnswers, onChange} = this.props;
    const {answers} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >
          {answers.map((answer, i) => (
            <GenreQuestionItem
              answer={answer}
              id={i}
              key={`${i}-${answer.src}`}
              userAnswer={userAnswers[i]}
              renderPlayer={renderPlayer}
              onChange={onChange}
            />
          ))}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
