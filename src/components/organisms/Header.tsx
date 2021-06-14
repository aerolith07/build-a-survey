import { Button, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import ConfirmDialog from '../atoms/ConfirmDialog';

const Header = () => {
  const router = useRouter();
  const logoutHandler = () => {
    // TODO add automatic saving here
    router.push('/login');
  };

  const goToMySurveys = () => {
    // TODO add automatic saving here
    router.push('/mySurveys');
  };

  const ALT_DESCRIPTION = 'Build a survey logo showing a builder with no face wearing an orange hard hat, and orange overalls, with a blue shirt underneath';

  const logoutButtonText = {
    header: 'Logout',
    body: 'Are you sure you want to logout?',
    confirmText: 'Logout',
  };

  return (
    <HeaderWrapper>
      <LeftSide>
        <img alt={ALT_DESCRIPTION} src="/builder.png" width="40px" />
        <p>Build a survey</p>
      </LeftSide>
      <HStack spacing={8}>
        <Button onClick={goToMySurveys} size="sm" colorScheme="white" variant="link"> My surveys</Button>
        <ConfirmDialog {...logoutButtonText} onConfirm={logoutHandler}>
          <Button size="sm" colorScheme="red" variant="solid"> Logout</Button>
        </ConfirmDialog>
      </HStack>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  /* background: linear-gradient(10deg, #2f2495 0%, #1796f0 100%); */
  background: linear-gradient(90deg, #171b38 0%, #1b2570 100%);
  /* background: #171b38; */
  color: white;
  padding: 1rem;
`;

const LeftSide = styled.div`
  display: flex;
  align-self: center;
  height:40px;
  align-items: center;

  p {
    align-self: center;
  }
`;

export default Header;
