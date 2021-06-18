import React from 'react';
import styled from 'styled-components';
import SurveyDropZone from '../SurveyDropZone';

const FormBuilder = () => (
  <FormBuilderWrapper>
    <SurveyDropZoneWrapper>
      <SurveyDropZone />
    </SurveyDropZoneWrapper>
  </FormBuilderWrapper>
);

const SurveyDropZoneWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 6rem);
  padding: 20px;
`;

const FormBuilderWrapper = styled.div`
  background: white;
  flex-basis: 80%;
`;

export default FormBuilder;
