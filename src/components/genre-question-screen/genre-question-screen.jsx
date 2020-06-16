import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import {GameType} from "../../const.js";

import Header from "../header/header.jsx";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: new Array(4).fill(false),
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {answers} = question;
    const {userAnswers} = this.state;

    return (
      <section className="game game--genre">
        <Header />
        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form
            className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer(question, this.state.userAnswers);
            }}
          >
            {answers.map((answer, i) => (
              <div className="track" key={i}>
                <button className="track__button track__button--play" type="button" />
                <div className="track__status">
                  <audio
                    src={answer.src}
                  />
                </div>
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    defaultValue={`answer-${i}`}
                    id={`answer-${i}`}
                    onChange={(evt) => {
                      userAnswers[i] = evt.target.checked;
                      this.setState({
                        userAnswers: [...userAnswers],
                      });
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            ))}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
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
};

export default GenreQuestionScreen;
