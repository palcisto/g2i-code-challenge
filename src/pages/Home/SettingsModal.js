import React from 'react';
import { TRIVIA_DIFFICULTIES, TRIVIA_TYPES } from '../../lib/constants';
import { List } from '../../components/molecules';
import { Modal } from '../../components/organisms';

function SettingsModal({ isModalOpen, toggleModal }) {
  return isModalOpen ? (
    <Modal onClose={toggleModal}>
      <h1>Settings</h1>
      <form>
        <List>
          <li>
            <label htmlFor="difficulty">Difficulty: </label>
            <select id="difficulty">
              {TRIVIA_DIFFICULTIES.map(difficulty => (
                <option key={difficulty} value={{ difficulty }}>
                  {difficulty}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="type">Type: </label>
            <select id="type">
              {TRIVIA_TYPES.map(({ value, type }) => (
                <option key={value} value={value}>
                  {type}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="count">Number of Questions: </label>
            <select id="count">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </li>
        </List>
      </form>
    </Modal>
  ) : null;
}

export default SettingsModal;
