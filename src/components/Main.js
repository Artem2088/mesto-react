import React, { useEffect, useState } from 'react';
import '../index.css';
import Api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [elements, setElements] = useState([]);

  useEffect(() => {
    Api.getUserInfo().then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    }).catch((err) => {
      console.error(err);
    });
    Api.getInitialCards().then((data) => {
      setElements(data);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <button
          onClick={onEditAvatar}
          className='profile__avatar-edit'
          type='button'
          title='Обновить аватар'
        >
          <img
            className='profile__avatar'
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
        </button>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <button
            onClick={onEditProfile}
            className='profile__btn-edit'
            type='button'
            title='Редактировать профиль'
          ></button>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          className='profile__btn-add'
          type='button'
          title='Обновить фотографию'
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {elements.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
