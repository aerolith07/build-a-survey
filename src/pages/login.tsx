import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormField from '../components/atoms/FormField';
import PasswordInput from '../components/atoms/PasswordInput';
import Form from '../components/molecules/Form';
import { loginUser } from '../lib/api/userApi';

const loginPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const secondaryActionHandler = () => {
    router.push('/register');
  };

  const onSubmit = async ({ username, password }) => {
    setLoading(true);
    setErrorMessage('');
    if (username && password) {
      const { success, ...responseData } = await loginUser({ username, password });
      if (success) {
        router.push('/main');
      } else {
        setErrorMessage(responseData.message ? responseData.message : 'Unable to login');
      }
    }
    setLoading(false);
  };

  const formProps = {
    title: 'Login',
    secondaryActionText: 'Sign up',
    onSubmit,
    errorMessage,
    loading,
    secondaryActionHandler,
  };

  return (
    <Screen>
      <Form {...formProps}>
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

export default loginPage;
