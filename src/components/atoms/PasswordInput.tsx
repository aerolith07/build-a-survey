import {
  Button, Input, InputGroup, InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import FormControlWrapper from '../molecules/FormControlWrapper';

interface PasswordInputProps {
  id: string,
  label?: string,
  description?: string,
  placeholder?: string,
  register?: (id: string) => void
}

const PasswordInput = ({
  id, label, description, placeholder, register,
}: PasswordInputProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControlWrapper id={id} label={label} description={description}>
      <InputGroup colorScheme="green" size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          {...register(id)}
        />
        <InputRightElement width="4.5rem">
          <Button colorScheme="blue" variant="link" h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControlWrapper>
  );
};

PasswordInput.defaultProps = {
  label: undefined,
  description: undefined,
  placeholder: undefined,
  register: () => { },
};

export default PasswordInput;
