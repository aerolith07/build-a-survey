import {
  Editable, EditableInput, EditablePreview, Radio, SlideFade,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export type EditableRadioOptionProps = {
  value: string
}

const EditableRadioOption = ({ value }: EditableRadioOptionProps) => (
  <SlideFade offsetY="-40px" in={!!value}>
    <RadioOptionWrapper>
      <Radio value={value} />
      <Editable defaultValue={value}>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </RadioOptionWrapper>
  </SlideFade>
);

const RadioOptionWrapper = styled.div`
  display: flex;
  div {
    padding-left: 10px
  }
`;
export default EditableRadioOption;
