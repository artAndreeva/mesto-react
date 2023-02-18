import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}  >
      <div className="popup__container">
        <form name={props.name} className="popup__form" noValidate>
          <button className="popup__close-button button button_opacity_page" type="button" onClick={props.onClose}></button>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button type="submit" className="popup__button button button_opacity_save">{props.buttonName}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
