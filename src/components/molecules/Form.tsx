import { Button, Heading, Spinner } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ErrorBox from '../atoms/ErrorBox';

interface FormProps {
  onSubmit: (data: any) => void
  children: React.ReactNode,
  errorMessage?: string,
  title: string,
  submitButton?: string
  loading?: boolean,
  secondaryActionHandler?: () => void,
  secondaryActionText?: string
}

const Form = ({
  onSubmit,
  children,
  errorMessage,
  title,
  submitButton,
  loading,
  secondaryActionHandler,
  secondaryActionText,
}: FormProps) => {
  const { handleSubmit, register } = useForm();

  const submitText = submitButton || title;

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Heading mb="2rem" textAlign="center">{title}</Heading>
      {
        React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child) && child.props.id) {
            return React.cloneElement(child, { register, key: child.props.id });
          }
          return child;
        })
      }
      { errorMessage && <ErrorBox message={errorMessage} />}
      <Button colorScheme="blue" mt="2rem" w="100%" type="submit">
        {loading ? <LoadingSpinner /> : submitText}
      </Button>
      {secondaryActionText && secondaryActionHandler
        && <Button onClick={secondaryActionHandler} variant="ghost" mt="1rem" w="100%">{secondaryActionText}</Button>}
    </FormWrapper>

  );
};

Form.defaultProps = {
  errorMessage: '',
  submitButton: undefined,
  loading: false,
  secondaryActionText: '',
  secondaryActionHandler: undefined,

};

const LoadingSpinner = () => (
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="blue.200"
    color="white.500"
    size="md"
  />
);

const FormWrapper = styled.form`
  align-self: center;
  background: white;
  width: 400px;
  padding: 3rem;
  border: 5px solid #97d4ff4e;
  border-radius: 10px;
`;

export default Form;
