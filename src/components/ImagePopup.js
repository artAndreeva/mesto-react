import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_image ${props.card.link && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close-button button button_opacity_page" type="button" onClick={props.onClose}></button>
        <figure className="popup__item">
          <img src={props.card.link} alt={props.card.name} className="popup__image" />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
