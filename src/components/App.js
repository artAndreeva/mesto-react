import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  //const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="content">
      <div className="page">

        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={'edit'}
          title={'Редактировать профиль'}
          buttonName={'Сохранить'}
        >
          <div className="popup__field">
            <input className="popup__input" id="input-username" type="text" name="name" value="" placeholder="Имя"
              required minLength="2" maxLength="40" readOnly />
            <span className="input-username-error popup__error"></span>
          </div>
          <div className="popup__field">
            <input className="popup__input" id="input-about" type="text" name="about" value="" placeholder="О себе" required
              minLength="2" maxLength="200" readOnly />
            <span className="input-about-error popup__error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={'add'}
          title={'Новое место'}
          buttonName={'Создать'}
        >
          <div className="popup__field">
            <input className="popup__input" id="input-name" type="text" name="name" value="" placeholder="Название" required
              minLength="2" maxLength="30" readOnly />
            <span className="input-name-error popup__error"></span>
          </div>
          <div className="popup__field">
            <input className="popup__input" id="input-link" type="url" name="link" value="" placeholder="Ссылка на картинку"
              required readOnly />
            <span className="input-link-error popup__error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={'avatar'}
          title={'Обновить аватар'}
          buttonName={'Сохранить'}
        >
          <div className="popup__field">
            <input className="popup__input" id="input-avatar" type="url" name="avatar" value="" placeholder="Ссылка на картинку"
              required readOnly />
            <span className="input-avatar-error popup__error"></span>
          </div>
        </PopupWithForm>

        {/*         <PopupWithForm
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
          name={'confirm'}
          title={'Вы уверены?'}
          buttonName={'Да'}
        /> */}

      </div>

    </div>
  );
}

export default App;
