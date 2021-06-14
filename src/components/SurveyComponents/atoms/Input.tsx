import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export type EditableInputProps = {
  value: string,
  id: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
}

const EditableInput = ({
  value, id, editable, setOption,
}: EditableInputProps) => {
  const [tempValue, setTempValue] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (editable) {
      setOption(id, e.target.value);
    } else {
      setTempValue(e.target.value);
    }
  };

  useEffect(() => {
    setTempValue('');
  }, [editable]);

  return (
    <Input
      id={id}
      mb="10px"
      value={editable ? value : tempValue}
      placeholder={editable ? 'Enter placeholder text - blank for no placeholder' : value}
      onChange={handleChange}
    />
  );
};

EditableInput.defaultProps = {
  editable: false,
};

export default EditableInput;
