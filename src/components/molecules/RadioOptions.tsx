import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import EditableRadioOption, { EditableRadioOptionProps } from '../atoms/RadioOption';
const MAX_OPTIONS = 10;
const MIN_OPTIONS = 1;

export const renderEditableRadioOptions = (
  radioOptions: EditableRadioOptionProps[],
) => radioOptions.map(({ value }) => (
  <EditableRadioOption key={value} value={value} />
));

type EditableRadioOptionsProps = {
  defaultRadioOptions: EditableRadioOptionProps[]
}

const EditableRadioOptions = ({ defaultRadioOptions }: EditableRadioOptionsProps) => {

  const [radioOptions, setRadioOptions] = useState(defaultRadioOptions);
  const canRemove = radioOptions.length > MIN_OPTIONS;
  const canAdd = radioOptions.length < MAX_OPTIONS;

  const addRadioOption = () => {
    const newOption = { value: `Option ${radioOptions.length + 1}` };
    setRadioOptions((r) => [...r, newOption]);
  };

  const removeRadioOption = () => {
    // TODO instead of disabling, replace text for last remaining option to "Option 1"
    // - then disable remove button on next click
    setRadioOptions((r) => r.slice(0, -1));
  };

  return (
    <>
      {renderEditableRadioOptions(radioOptions)}
      <IconButton size="xs" aria-label="Add Radio Option" isDisabled={!canAdd} variant="outline" mt="2" mr="2" colorScheme="green" icon={<AddIcon />} onClick={addRadioOption} />
      <IconButton size="xs" aria-label="Remove Radio Options" isDisabled={!canRemove} variant="outline" mt="2" colorScheme="red" icon={<MinusIcon />} onClick={removeRadioOption} />
    </>
  );
};

export default EditableRadioOptions;
