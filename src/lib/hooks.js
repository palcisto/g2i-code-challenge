import { useState } from 'react';

export function useInput(initialValue, shouldParseInt = false) {
  const [setting, _setSetting] = useState(initialValue);
  const setSetting = event =>
    shouldParseInt
      ? _setSetting(parseInt(event.target.value))
      : _setSetting(event.target.value);
  return [setting, setSetting];
}

export function useModal() {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(state => !state);
  };

  return { isModalOpen, toggleModal };
}
