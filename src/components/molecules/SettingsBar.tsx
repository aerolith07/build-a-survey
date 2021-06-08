import { ViewIcon } from '@chakra-ui/icons';
import { Button, HStack, Tooltip } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const SettingsBar = () => (
  <SettingsWrapper className="settings">
    <HStack spacing="8px" justify="flex-end">
      <Button size="sm" colorScheme="blue" leftIcon={<ViewIcon />}>Preview </Button>
      <Button size="sm" colorScheme="blue">Theme</Button>
      <Tooltip hasArrow label="Publish Survey" bg="green.600">
        <Button size="sm" colorScheme="green">Publish</Button>
      </Tooltip>
    </HStack>
  </SettingsWrapper>

);

const SettingsWrapper = styled.div`
  color: white;
  background: #0C6697;
  padding:0.5rem;
`;

export default SettingsBar;
