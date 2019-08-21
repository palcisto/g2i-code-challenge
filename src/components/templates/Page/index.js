import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../../lib/style-functions';
import { footerHeight, headerHeight } from '../../../lib/style-variables';
import { Main } from '../../atoms';
import { Header } from '../../organisms';

const StyledPage = styled.div`
  background-color: ${getColor('grey', 'light')};
  display: grid;
  grid-template-rows: ${headerHeight} 1fr ${footerHeight};
  height: 100vh;
  text-align: center;
  width: 100vw;
`;

Page.propTypes = {
  footer: PropTypes.node,
  header: PropTypes.node,
  title: PropTypes.string,
};

function Page({
  children,
  footer: footerContent,
  header: headerContent,
  title,
  ...props
}) {
  return (
    <StyledPage {...props}>
      <Header title={title}>{headerContent}</Header>
      <Main>{children}</Main>
      <footer>{footerContent}</footer>
    </StyledPage>
  );
}

export default Page;
