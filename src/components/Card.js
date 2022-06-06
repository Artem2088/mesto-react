import React from 'react';
import '../index.css';

function Card(card) {
  return (
    <figure className='element'>
      <img
        className='element__image'
        style={{ backgroundImage: `url(${card.link})` }}
      />
      <button
        className='element__btn-delete'
        type='button'
        title='Удалить'
      ></button>
      <figcaption className='element__info'>
        <h2 className='element__caption'>{card.name}</h2>
        <div className='element__like-container'>
          <>
            <button
              className='element__btn-like'
              type='button'
              title='Нравится'
            ></button>
            <p className='element__like-count'>{card.likes}</p>
          </>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
