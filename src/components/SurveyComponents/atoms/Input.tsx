import { Input } from '@chakra-ui/react';
import React from 'react';

export type EditableInputProps = {
  value: string,
  id: string,
  editable?: boolean
  setOption: (id: string, value: string) => void
}

const EditableInput = ({
  value, id, editable, setOption,
}: EditableInputProps) => {
  // const [placeholderValue, setPlaceholderValue] = useState('');

  const handleChange = (e) => setOption(id, e.target.value);
  return (
    <Input
      id={id}
      mb="10px"
      value={value}
      placeholder={editable ? 'Enter placeholder text - blank for no placeholder' : value}
      onChange={handleChange}
    />
  );
};

EditableInput.defaultProps = {
  editable: false,
};

export default EditableInput;
