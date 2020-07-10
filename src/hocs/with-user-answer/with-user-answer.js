import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {GameType} from '../../const.js';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.handleAnswer = this.handleAnswer.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        userAnswers: new Array(props.question.answers.length).fill(false),
      };
    }

    handleAnswer() {
      const {question, onAnswer} = this.props;
      const {userAnswers} = this.state;

      onAnswer(question, userAnswers);
    }

    handleChange(i, value) {
      const {userAnswers} = this.state;

      const userAnswersNew = userAnswers.slice(0);
      userAnswersNew[i] = value;

      this.setState({
        userAnswers: userAnswersNew,
      });
    }

    render() {
      const {userAnswers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={userAnswers}
          onAnswer={this.handleAnswer}
          onChange={this.handleChange}
        />
      );
    }
  }

  WithUserAnswer.propTypes = {
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

  return WithUserAnswer;
};

export default withUserAnswer;
