import React from 'react';
import avatar from '../images/Avatar.png';

function Main() {
  return (
    <main className='content'>
      <section className='profile'>
        <button
          className='profile__avatar-edit'
          type='button'
          title='Обновить аватар'
        >
          <img className='profile__avatar' src={avatar} alt='Жак Кусто' />
        </button>
        <div className='profile__info'>
          <h1 className='profile__name'>Жак-Ив Кусто</h1>
          <button
            className='profile__btn-edit'
            type='button'
            title='Редактировать профиль'
          ></button>
          <p className='profile__about'>Исследователь океана</p>
        </div>
        <button
          className='profile__btn-add'
          type='button'
          title='Обновить фотографию'
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'></ul>
      </section>
    </main>
  );
}

export default Main;
