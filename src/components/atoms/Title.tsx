import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const renderEditableTitle = (title: string) => (
  <EditableTitle fontSize="xl" defaultValue={title}>
    <EditablePreview />
    <EditableInput />
  </EditableTitle>
);

const EditableTitle = styled(Editable)`
  font-weight:600;
`;

export default renderEditableTitle;
