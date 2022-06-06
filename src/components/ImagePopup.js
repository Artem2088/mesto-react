function ImagePopup() {
  return (
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
  );
}
export default ImagePopup;
