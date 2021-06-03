import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React from 'react';

const MAX_OPTIONS = 10;
const MIN_OPTIONS = 1;

type AllInputProps = {
  value: string,
  id: string
}

type EditableInputOptionsProps<InputTypeProps> = {
  Input: any
  options: (InputTypeProps & AllInputProps)[]
  addOption: () => void
  removeOption: (id: string) => void
  setOption: (id: string, value: string) => void
  editable: boolean
}

function EditableInputOptions<T>({
  options, Input, addOption, removeOption, setOption, editable,
}:
  EditableInputOptionsProps<T>) {
  const canRemove = options.length > MIN_OPTIONS;
  const canAdd = options.length < MAX_OPTIONS;

  // TODO instead of disabling, replace text for last remaining option to "Option 1"
  // - then disable remove button on next click
  const handleRemoveOption = () => {
    const lastOption = options[options.length - 1];
    removeOption(lastOption.id);
  };

  return (
    <>
      {options.map(({ value, id }) => (
        <Input
          key={id}
          id={id}
          value={value}
          editable={editable}
          setOption={setOption}
        />
      ))}
      {editable
        ? (
          <>
            <IconButton size="xs" aria-label="Add Radio Option" isDisabled={!canAdd} variant="outline" mt="2" mr="2" colorScheme="green" icon={<AddIcon />} onClick={addOption} />
            <IconButton size="xs" aria-label="Remove Radio Options" isDisabled={!canRemove} variant="outline" mt="2" colorScheme="red" icon={<MinusIcon />} onClick={handleRemoveOption} />
          </>
        )
        : null}

    </>
  );
}

export default EditableInputOptions;
