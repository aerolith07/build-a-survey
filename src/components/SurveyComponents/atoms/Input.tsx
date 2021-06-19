import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export type EditableInputProps = {
  value: string,
  id: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
  setAnswer: (id: string, value: string) => void
}

const EditableInput = ({
  value, id, editable, setOption, setAnswer,
}: EditableInputProps) => {
  const [fieldValue, setFieldValue] = useState('');

  // TODO test this?
  const updateValue = (newValue: string) => {
    setFieldValue(newValue);
    setAnswer(id, newValue);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (editable) {
      setOption(id, e.target.value);
    } else {
      updateValue(e.target.value);
    }
  };

  useEffect(() => {
    updateValue('');
  }, [editable]);

  return (
    <Input
      id={id}
      mb="10px"
      value={editable ? value : fieldValue}
      placeholder={editable ? 'Enter placeholder text - blank for no placeholder' : value}
      onChange={handleChange}
    />
  );
};

EditableInput.defaultProps = {
  editable: false,
};

export default EditableInput;
