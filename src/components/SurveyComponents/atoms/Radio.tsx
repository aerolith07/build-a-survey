import { Radio, SlideFade } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import EditableLabel from './EditableLabel';

export type EditableRadioProps = {
  id: string,
  value: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
}

const EditableRadio = ({
  value, id, editable, setOption,
}: EditableRadioProps) => (
  <SlideFade offsetY="-40px" in={!!value}>
    <RadioWrapper>
      <Radio value={id} />
      <EditableLabel
        editable={editable}
        initialValue={value}
        save={(currentValue) => setOption(id, currentValue)}
      />
    </RadioWrapper>
  </SlideFade>
);

EditableRadio.defaultProps = {
  editable: false,
};

const RadioWrapper = styled.div`
  display: flex;
  .chakra-radio {
    padding-right: 4px
  }
`;

export default EditableRadio;
