import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='page__container'>
        <header className='header'>
          <img
            className='header__logo'
            src="<%=require('./images/logo.svg')%>"
            alt='Лого'
          />
        </header>

        <main className='content'>
          <section className='profile'>
            <button
              className='profile__avatar-edit'
              type='button'
              title='Обновить аватар'
            >
              <img
                className='profile__avatar'
                src="<%=require('./images/Avatar.png')%>"
                alt='Жак Кусто'
              />
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

        <footer className='footer'>
          <p className='footer__copyright'>&copy; 2021. Mesto Russia</p>
        </footer>
      </div>

      <div className='popup popup_edit'>
        <div className='popup__container'>
          <form className='popup__form' name='profileData' novalidate />
          <h2 className='popup__title'>Редактировать профиль</h2>
          <fieldset className='popup__fieldset' />
          <input
            className='popup__input'
            id='name'
            type='text'
            name='title'
            placeholder='О себе'
            minlength='2'
            maxlength='40'
            required
            autocomplete='off'
          />
          <span className='popup__input-error name-error'></span>
          <input
            className='popup__input'
            id='description'
            type='text'
            name='subtitle'
            placeholder='Хобби'
            minlength='2'
            maxlength='200'
            required
            autocomplete='off'
          />
          <span className='popup__input-error description-error'></span>
          <fieldset />
          <button className='popup__btn-save' type='submit' title='Сохранить'>
            Сохранить
          </button>
          <form />
          <button
            className='popup__btn-close'
            type='button'
            title='Закрыть'
          ></button>
        </div>
      </div>

      <div className='popup popup_add'>
        <div className='popup__container'>
          <form className='popup__form' name='placeData' novalidate />
          <h2 className='popup__title'>Новое место</h2>
          <fieldset className='popup__fieldset' />
          <input
            className='popup__input'
            id='place-name'
            type='text'
            name='name'
            placeholder='Название'
            minlength='2'
            maxlength='30'
            required
            autocomplete='off'
          />
          <span className='popup__input-error place-name-error'></span>
          <input
            className='popup__input'
            id='place-link'
            type='url'
            name='url'
            placeholder='Ссылка на картинку'
            required
            autocomplete='off'
          />
          <span className='popup__input-error place-link-error'></span>
          <fieldset />
          <button className='popup__btn-save' type='submit' title='Создать'>
            Создать
          </button>
          <form />
          <button
            className='popup__btn-close'
            type='button'
            title='Закрыть'
          ></button>
        </div>
      </div>

      <div className='popup popup_form_avatar'>
        <div className='popup__container'>
          <form className='popup__form' name='placeData' novalidate>
            <h2 className='popup__title'>Обновить аватар</h2>
            <input
              className='popup__input'
              id='avatar'
              type='url'
              name='url'
              placeholder='Ссылка на аватар'
              required
            />
            <span className='popup__input-error avatar-error'></span>
            <button className='popup__btn-save' type='submit' title='Сохранить'>
              Сохранить
            </button>
          </form>
          <button
            className='popup__btn-close'
            type='button'
            title='Закрыть'
          ></button>
        </div>
      </div>

      <div className='popup popup_form_confirm'>
        <div className='popup__container'>
          <form className='popup__form' name='profileData' novalidate>
            <h2 className='popup__title'>Вы уверены?</h2>
            <button
              className='popup__btn-save popup__btn-confirm'
              type='submit'
              title='Подтвердить'
            >
              Да
            </button>
          </form>
          <button
            className='popup__btn-close'
            type='button'
            title='Закрыть'
          ></button>
        </div>
      </div>

      <div className='popup popup_viewer'>
        <div className='popup__content'>
          <img className='popup__image' src='#' alt='#' />
          <h2 className='popup__description'></h2>
          <button
            className='popup__btn-close'
            type='button'
            title='Закрыть'
          ></button>
        </div>
      </div>

      <template id='elements-template'>
        <figure className='element'>
          <img
            className='element__image'
            src='.'
            alt=''
            title='Посмотреть в полном размере'
          />
          <button
            className='element__btn-delete'
            type='button'
            title='Удалить'
          ></button>
          <figcaption className='element__info'>
            <h2 className='element__caption'></h2>
            <div className='element__like-container'>
              <button
                className='element__btn-like'
                type='button'
                title='Нравится'
              ></button>
              <p className='element__like-count'></p>
            </div>
          </figcaption>
        </figure>
      </template>
    </div>
  );
}

export default App;
