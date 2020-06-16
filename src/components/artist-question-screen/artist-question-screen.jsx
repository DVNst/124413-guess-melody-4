import React from "react";
// import PropTypes from 'prop-types';

import Header from "../header/header.jsx";

const ArtistQuestionScreen = () => {
  return (
    <section className="game game--artist">
      <Header />
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio />
            </div>
          </div>
        </div>
        <form className="game__artist">
          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" defaultValue="artist-1" id="answer-1" />
            <label className="artist__name" htmlFor="answer-1">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
              Пелагея
            </label>
          </div>
          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" defaultValue="artist-2" id="answer-2" />
            <label className="artist__name" htmlFor="answer-2">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
              Краснознаменная дивизия имени моей бабушки
            </label>
          </div>
          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" defaultValue="artist-3" id="answer-3" />
            <label className="artist__name" htmlFor="answer-3">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
              Lorde
            </label>
          </div>
        </form>
      </section>
    </section>
  );
};

// ArtistQuestionScreen.propTypes = {
// };

export default ArtistQuestionScreen;
