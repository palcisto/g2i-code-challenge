import React from 'react';
import { bool, func, object } from 'prop-types';
import { footerHeight } from '../../components/style-variables';
import { LinkButton } from '../../components/atoms';
import { ReactComponent as GearIcon } from '../../images/gear.svg';
import { StyledHomePage, SettingsButton } from './styles';
import SettingsModal from './SettingsModal';

ComposedPage.propTypes = {
  isModalOpen: bool.isRequired,
  onChangeTriviaSettings: func,
  onToggleModal: func,
  triviaSettings: object,
};

function ComposedPage({
  isModalOpen,
  onChangeTriviaSettings,
  onToggleModal,
  triviaSettings,
}) {
  const { count } = triviaSettings;
  const headerContent = (
    <SettingsButton onClick={onToggleModal}>
      <GearIcon title="settings" />
      <span className="visually-hidden">Settings</span>
    </SettingsButton>
  );
  const footerContent = (
    <LinkButton height={footerHeight} to="/quiz/0">
      Begin
    </LinkButton>
  );

  return (
    <StyledHomePage
      title="Welcome to the Trivia Challenge!"
      header={headerContent}
      footer={footerContent}
    >
      <p>You will be presented with {count} True or False questions.</p>
      <p>Can you score 100%?</p>
      <SettingsModal
        isModalOpen={isModalOpen}
        onChangeTriviaSettings={onChangeTriviaSettings}
        onToggleModal={onToggleModal}
        triviaSettings={triviaSettings}
      />
    </StyledHomePage>
  );
}

export default ComposedPage;
