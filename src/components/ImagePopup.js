import React from 'react';

function ImagePopup(props) {
    // console.log(props.card)
    return (
        <div className={`popup popup_image ${props.card && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close-button button button_opacity_page" type="button" onClick={props.onClose}></button>
                <figure className="popup__item">
                    <img src="" alt="Изображение попапа" className="popup__image" />
                    <figcaption className="popup__caption"></figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;