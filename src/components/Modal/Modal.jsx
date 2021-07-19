import { IoCloseOutline } from 'react-icons/io5';
import { ModalDiv, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import IconButton from 'components/IconButton/IconButton';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, tags, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    console.log('privet');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('poka');
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalDiv>
        <IconButton onClick={onClose}>
          <IoCloseOutline />
        </IconButton>
        <img src={largeImageURL} alt={tags} />
      </ModalDiv>
    </Overlay>,
    modalRoot,
  );
}
