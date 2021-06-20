import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import SettingsBar from '../organisms/SettingsBar';

interface ScreenProps {
  showSettings?: boolean,
  children: ReactNode,
  surveyTitle?: string
}

const Screen: React.FC<ScreenProps> = ({ showSettings, children, surveyTitle }: ScreenProps) => (
  <ScreenWrapper>
    <Header />
    {showSettings && <SettingsBar surveyTitle={surveyTitle} />}
    {children}
  </ScreenWrapper>
);

Screen.defaultProps = {
  showSettings: true,
  surveyTitle: undefined,
};

const ScreenWrapper = styled.div`
  overflow-y: none
`;

export default Screen;
