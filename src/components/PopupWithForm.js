import React from 'react';
import '../index.css';

function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  form,
  container,
  onClose,
  buttonText
}) {
  return (
    <div
      className={
        `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`
      }
      onClick={onClose}
    >
      <div className={container}>
        <form className={form} name={name} noValidate>
          <h2 className='popup__title'>{title}</h2>
          {children}
          <button className='popup__btn-save' type='submit' title='Сохранить'>
          {buttonText || 'Сохранить'}
          </button>
        </form>
        <button
          className='popup__btn-close'
          type='button'
          title='Закрыть'
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
