import React from 'react';
import PropTypes from 'prop-types';
import { footerHeight } from '../../lib/style-variables';
import { LinkButton } from '../../components/atoms';
import { ReactComponent as GearIcon } from '../../images/gear.svg';
import { StyledHomePage, SettingsButton } from './styles';
import SettingsModal from './SettingsModal';

Page.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func,
  triviaSettings: PropTypes.object,
};

function Page({ isModalOpen, toggleModal, triviaSettings }) {
  const { triviaCount } = triviaSettings;
  const headerContent = (
    <SettingsButton onClick={toggleModal}>
      <GearIcon title="settings" />
      <span className="visually-hidden">Settings</span>
    </SettingsButton>
  );
  const footerContent = (
    <LinkButton height={footerHeight} to="/quiz">
      Begin
    </LinkButton>
  );

  return (
    <StyledHomePage
      title="Welcome to the Trivia Challenge!"
      header={headerContent}
      footer={footerContent}
    >
      <p>You will be presented with {triviaCount} True or False questions.</p>
      <p>Can you score 100%?</p>
      <SettingsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        triviaSettings={triviaSettings}
      />
    </StyledHomePage>
  );
}

export default Page;
