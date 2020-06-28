import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {GameType} from '../../const.js';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: new Array(4).fill(false),
    };
  }

  render() {
    const {userAnswers} = this.state;
    const {question, onAnswer, renderPlayer} = this.props;
    const {answers} = question;

    return (
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
              {renderPlayer(answer.src, i)}
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
};

export default GenreQuestionScreen;
