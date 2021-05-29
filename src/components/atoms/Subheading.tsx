import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const renderEditableSubheading = (title: string) => (
  <EditableSubheading defaultValue={title}>
    <EditablePreview />
    <EditableInput />
  </EditableSubheading>
);

const EditableSubheading = styled(Editable)`
  font-weight:300;
  color: '#50'
`;

export default renderEditableSubheading;
