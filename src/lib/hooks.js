import { useState } from 'react';

/**
 * useInput gives an easy solution to work with controlled inputs while eliminating
 * much of the common boilerplate code for doing so.
 * @param {any} initialValue
 * @param {boolean} shouldParseInt
 */
export function useInput(initialValue, shouldParseInt = false) {
  const [setting, _setSetting] = useState(initialValue);
  const setSetting = event =>
    shouldParseInt
      ? _setSetting(parseInt(event.target.value))
      : _setSetting(event.target.value);
  return [setting, setSetting];
}

/**
 * useModal() provides an easy way to manage the open state of a modal.
 */
export function useModal() {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(state => !state);
  };

  return { isModalOpen, toggleModal };
}
