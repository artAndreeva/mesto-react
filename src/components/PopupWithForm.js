import React from 'react';

function PopupWithForm({ name, isOpen, onClose, title, children, buttonName }) {
  return (
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}  >
      <div className="popup__container">
        <form name={name} className="popup__form" noValidate>
          <button className="popup__close-button button button_opacity_page" type="button" onClick={onClose}></button>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="submit" className="popup__button button button_opacity_save">{buttonName}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
