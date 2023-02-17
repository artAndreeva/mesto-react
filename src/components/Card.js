import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="gallery__item card" key={props.card._id}>
            <button className="card__delete button button_opacity_page" aria-label="Удалить" type="button"></button>
            <img src={props.card.link} alt="Изображение карточки" className="card__image button" onClick={handleClick} />
            <div className="card__caption">
                <h2 className="card__text">{props.card.name}</h2>
                <div className="card__likes">
                    <button className="card__button button button_opacity_heart" aria-label="Поставить лайк" type="button"></button>
                    <p className="card__likes-quantity">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;