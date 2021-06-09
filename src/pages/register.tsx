import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormField from '../components/atoms/FormField';
import PasswordInput from '../components/atoms/PasswordInput';
import Form from '../components/molecules/Form';
import { registerUser } from '../lib/api/userApi';

const registerPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const secondaryActionHandler = () => {
    router.push('/login');
  };

  const onSubmit = async ({ username, name, password }) => {
    setLoading(true);
    setErrorMessage('');
    if (username && name && password) {
      const { success, ...responseData } = await registerUser({ username, name, password });
      if (success) {
        router.push('/main');
      } else {
        console.log(responseData);
        setErrorMessage(responseData.message ? responseData.message : 'Unable to create account');
      }
    }
    setLoading(false);
  };

  const formProps = {
    title: 'Register',
    secondaryActionText: 'Or go back to Login',
    onSubmit,
    errorMessage,
    loading,
    secondaryActionHandler,
  };

  return (
    <Screen>
      <Form {...formProps}>
        <FormField id="name" label="Name" />
        <FormField id="username" label="Username" />
        <PasswordInput id="password" label="Password" />
      </Form>
    </Screen>
  );
};

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  height: 100vh;

background: linear-gradient(90deg, rgba(36,149,103,1) 0%, rgba(62,240,23,1) 100%);
background: linear-gradient(40deg, #2f2495 0%, rgba(23,150,240,1) 100%);

`;

export default registerPage;
