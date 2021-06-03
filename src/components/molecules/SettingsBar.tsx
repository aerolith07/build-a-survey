import { ViewIcon } from '@chakra-ui/icons';
import { Button, HStack, Tooltip } from '@chakra-ui/react';
import React from 'react';

const SettingsBar = () => (
  <HStack spacing="8px" justify="flex-end">
    <Button size="sm" colorScheme="blue" leftIcon={<ViewIcon />}>Preview </Button>
    <Button size="sm" colorScheme="blue">Theme</Button>
    <Tooltip hasArrow label="Publish Survey" bg="green.600">
      <Button size="sm" colorScheme="green">Publish</Button>
    </Tooltip>
  </HStack>
);

export default SettingsBar;
