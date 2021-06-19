import {
  Checkbox, SlideFade,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import EditableLabel from './EditableLabel';

export type EditableCheckboxProps = {
  value: string,
  id: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
  setAnswer: (id: string, value: boolean) => void
}

const EditableCheckbox = ({
  value, id, editable, setOption, setAnswer,
}: EditableCheckboxProps) => {
  const [fieldValue, setFieldValue] = useState(false);

  const updateValue = (newValue: boolean) => {
    setFieldValue(newValue);
    setAnswer(id, newValue);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    updateValue(Boolean(e.target.value));
  };

  return (
    <SlideFade offsetY="-40px" in={!!value}>
      <CheckboxWrapper>
        <Checkbox id={id} value={value} onChange={handleChange} isChecked={fieldValue} />
        <EditableLabel
          editable={editable}
          initialValue={value}
          save={(currentValue) => { setOption(id, currentValue); }}
        />
      </CheckboxWrapper>
    </SlideFade>
  );
};

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
