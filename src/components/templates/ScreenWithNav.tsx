import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import SettingsBar from '../organisms/SettingsBar';

interface ScreenProps {
  showSettings?: boolean,
  children: ReactNode
}

const Screen: React.FC<ScreenProps> = ({ showSettings, children }: ScreenProps) => (
  <ScreenWrapper>
    <Header />
    {showSettings && <SettingsBar />}
    {children}
  </ScreenWrapper>
);

Screen.defaultProps = {
  showSettings: true,
};

const ScreenWrapper = styled.div`
  overflow-y: none
`;

export default Screen;
