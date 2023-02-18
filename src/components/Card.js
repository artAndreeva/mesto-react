import React from 'react';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="gallery__item card" >
      <button className="card__delete button button_opacity_page" aria-label="Удалить" type="button"></button>
      <img src={card.link} alt={card.name} className="card__image button" onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__likes">
          <button className="card__button button button_opacity_heart" aria-label="Поставить лайк" type="button"></button>
          <p className="card__likes-quantity">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
