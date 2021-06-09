import { Input } from '@chakra-ui/react';
import React from 'react';
import FormControlWrapper from '../molecules/FormControlWrapper';

interface FormFieldProps {
  id: string,
  inputType?: string
  label?: string,
  description?: string,
  placeholder?: string,
  register?: (id: string) => void
}

const FormField = ({
  id, label, description, inputType, placeholder, register,
}: FormFieldProps) => (
  <FormControlWrapper id={id} label={label} description={description}>
    <Input type={inputType} placeholder={placeholder} {...register(id)} />
  </FormControlWrapper>
);

FormField.defaultProps = {
  label: undefined,
  description: undefined,
  placeholder: undefined,
  register: () => { },
  inputType: 'text',
};

export default FormField;
