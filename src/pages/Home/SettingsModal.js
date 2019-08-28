import React from 'react';
import { TRIVIA_DIFFICULTIES, TRIVIA_TYPES } from '../../lib/constants';
import { Capitalize } from '../../lib/helpers';
import { useInput } from '../../lib/hooks';
import { Button } from '../../components/atoms';
import { List } from '../../components/molecules';
import { Modal } from '../../components/organisms';

function SettingsModal({
  isModalOpen,
  onChangeTriviaSettings,
  onToggleModal,
  triviaSettings,
}) {
  // State
  const [difficulty, setDifficulty] = useInput(triviaSettings.difficulty);
  const [type, setType] = useInput(triviaSettings.type);
  const [count, setCount] = useInput(triviaSettings.count, true);
  console.log('settings:', {
    count,
    difficulty,
    type,
  });

  // Actions
  const onSubmit = event => {
    event.preventDefault();

    onChangeTriviaSettings({
      count,
      difficulty,
      type,
    });
  };

  return isModalOpen ? (
    <Modal onClose={onToggleModal}>
      <h1>Settings</h1>
      <form onSubmit={onSubmit}>
        <List>
          <li>
            <label htmlFor="difficulty">Difficulty: </label>
            <select id="difficulty" value={difficulty} onChange={setDifficulty}>
              {TRIVIA_DIFFICULTIES.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {Capitalize(difficulty)}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="type">Type: </label>
            <select id="type" value={type.value} onChange={setType}>
              {TRIVIA_TYPES.map(({ value, text }) => (
                <option key={value} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="count">Number of Questions: </label>
            <select id="count" value={count} onChange={setCount}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </li>
        </List>
        <Button size="small" type="submit">
          Save
        </Button>
      </form>
    </Modal>
  ) : null;
}

export default SettingsModal;
