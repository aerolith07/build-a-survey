import { Alert, AlertIcon, AlertStatus } from '@chakra-ui/react';
import React from 'react';

const ErrorBox = ({ message, type }: { message: string, type?: AlertStatus }) => (

  <Alert borderRadius="5px" width="100%" status={type} variant="left-accent">
    <AlertIcon />
    {message}
  </Alert>
);

ErrorBox.defaultProps = {
  type: 'error',
};

export default ErrorBox;
