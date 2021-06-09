import { Button } from '@chakra-ui/react';
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

  const logoutButtonText = {
    header: 'Logout',
    body: 'Are you sure you want to logout?',
    confirmText: 'Logout',
  };

  return (
    <HeaderWrapper>
      <LeftSide>
        Header
      </LeftSide>
      <RightSide>
        <ConfirmDialog {...logoutButtonText} onConfirm={logoutHandler}>
          <Button size="sm" colorScheme="white" variant="outline"> Logout</Button>
        </ConfirmDialog>
      </RightSide>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #0E79B2;
  color: white;
  padding: 1rem;
`;

const LeftSide = styled.div`
align-self: center;
`;

const RightSide = styled.div`

`;

export default Header;
