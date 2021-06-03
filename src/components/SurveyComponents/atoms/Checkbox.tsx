import {
  Checkbox, SlideFade,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import EditableLabel from './EditableLabel';

export type EditableCheckboxProps = {
  value: string,
  id: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
}

const EditableCheckbox = ({
  value, id, editable, setOption,
}: EditableCheckboxProps) => (
  <SlideFade offsetY="-40px" in={!!value}>
    <CheckboxWrapper>
      <Checkbox id={id} value={value} />
      <EditableLabel
        editable={editable}
        initialValue={value}
        save={(currentValue) => { setOption(id, currentValue); }}
      />
    </CheckboxWrapper>
  </SlideFade>
);

EditableCheckbox.defaultProps = {
  editable: false,
};

const CheckboxWrapper = styled.div`
  display: flex;
  .chakra-checkbox {
    padding-right: 4px;
    padding-bottom: 1px;
  }
`;

export default EditableCheckbox;
