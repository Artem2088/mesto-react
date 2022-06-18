import { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  //функции открытия попапов
  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  //функции закрытия попапов
  const closeAllPopups = () => {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name='edit'
        title='Редактировать профиль'
        container='popup__container'
        form='popoup__form'
        onClose={closeAllPopups}
      >
        <fieldset className='popup__fieldset'>
          <input
            className='popup__input'
            id='name'
            type='text'
            name='title'
            placeholder='О себе'
            minLength='2'
            maxLength='40'
            required
            autoComplete='off'
          />
          <span className='popup__input-error name-error'></span>
          <input
            className='popup__input'
            id='description'
            type='text'
            name='subtitle'
            placeholder='Хобби'
            minLength='2'
            maxLength='200'
            required
            autoComplete='off'
          />
          <span className='popup__input-error description-error'></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name='add'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        container='popup__container'
        form='popoup__form'
      >
        <fieldset className='popup__fieldset'>
          <input
            className='popup__input'
            id='place-name'
            type='text'
            name='name'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            required
            autoComplete='off'
          />
          <span className='popup__input-error place-name-error'></span>
          <input
            className='popup__input'
            id='place-link'
            type='url'
            name='url'
            placeholder='Ссылка на картинку'
            required
            autoComplete='off'
          />
          <span className='popup__input-error place-link-error'></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        container='popup__container'
        form='popoup__form'
      >
        <input
          className='popup__input'
          id='avatar'
          type='url'
          name='url'
          placeholder='Ссылка на аватар'
          required
        />
        <span className='popup__input-error avatar-error'></span>
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name='confirm'
        title='Вы уверены?'
        container='popup__container'
        form='popoup__form'
      ></PopupWithForm>
      <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
