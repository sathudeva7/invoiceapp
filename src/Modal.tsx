import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Modal as MuiModal, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const modalRoot =
  document.querySelector('#modal-root') || document.createElement('div');

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  backdropClass?: string;
  modalContentClass?: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  backdropClass,
  modalContentClass,
  children,
}: ModalProps) => {
  const theme = useTheme();
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <MuiModal
      open={isOpen}
      onClose={onClose}
      BackdropProps={{
        className: backdropClass,
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: theme.zIndex.modal,
      }}
    >
      <Box
        className={modalContentClass}
        ref={modalRef}
        sx={{
          backgroundColor: 'background.paper',
          boxShadow: theme.shadows[5],
          p: 2,
          borderRadius: 1,
        }}
      >
        {children}
      </Box>
    </MuiModal>,
    modalRoot
  );
};

export default Modal;
