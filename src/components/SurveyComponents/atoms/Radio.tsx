import { Radio, SlideFade } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import EditableLabel from './EditableLabel';

export type EditableRadioProps = {
  id: string,
  value: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
  setAnswer: (id: string, value: boolean) => void
}

const EditableRadio = ({
  value, id, editable, setOption, setAnswer,
}: EditableRadioProps) => {
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
      <RadioWrapper>
        <Radio key={id} value={id} onChange={handleChange} isChecked={fieldValue} />
        <EditableLabel
          editable={editable}
          initialValue={value}
          save={(currentValue) => setOption(id, currentValue)}
        />
      </RadioWrapper>
    </SlideFade>
  );
};

EditableRadio.defaultProps = {
  editable: false,
};

const RadioWrapper = styled.div`
  display: flex;
  .chakra-radio {
    padding-right: 4px;
  }
`;

export default EditableRadio;
