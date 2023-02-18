import { useEffect, useState } from 'react';
import Card from './Card.js';
import { api } from '../utils/api.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      }
      )
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <main className="main">

      <section className="profile">
        <div className="profile__overlay" onClick={onEditAvatar}><img src={userAvatar} alt="Аватар" className="profile__avatar" /></div>
        <div className="profile__info">
          <h1 className="profile__username">{userName}</h1>
          <button className="profile__edit-button button button_opacity_page" aria-label="Кнопка редактирования профиля"
            type="button" onClick={onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button button button_opacity_page" aria-label="Кнопка добавления информации"
          type="button" onClick={onAddPlace}></button>
      </section>

      <section className="gallery" aria-label="Галерея пользователя">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>

    </main>

  );
}

export default Main;
