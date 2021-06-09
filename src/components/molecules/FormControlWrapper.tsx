import {
  FormControl, FormLabel, FormHelperText,
} from '@chakra-ui/react';
import React from 'react';

interface FormFieldProps {
  id: string,
  label?: string,
  description?: string,
  children: React.ReactNode
}

const FormControlWrapper = ({
  id, label, description, children,
}: FormFieldProps) => (
  <FormControl id={id} mb={5}>
    {!!label && <FormLabel>{label}</FormLabel>}
    {children}
    {!!description && <FormHelperText>{description}</FormHelperText>}
  </FormControl>
);

FormControlWrapper.defaultProps = {
  label: undefined,
  description: undefined,
};

export default FormControlWrapper;
