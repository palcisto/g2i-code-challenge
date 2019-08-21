import { useState } from 'react';

export function useModal() {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(state => !state);
  };

  return { isModalOpen, toggleModal };
}
