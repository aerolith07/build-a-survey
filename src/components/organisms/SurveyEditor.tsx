import React from 'react';
import styled from 'styled-components';
import QuestionDrawer from '../SurveyComponents/QuestionDrawer';
import FromBuilder from '../SurveyComponents/wrappers/FormBuilder';

const SurveyEditor = () => (
  <MainBody>
    <QuestionDrawer />
    <FromBuilder />
  </MainBody>
);

const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
`;

export default SurveyEditor;
