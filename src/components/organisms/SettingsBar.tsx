import { ViewIcon } from '@chakra-ui/icons';
import {
  Button, HStack, Switch, Tag,
} from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { setPreview } from '../../state/appState/appReducers';
import { useAppDispatch, useAppSelector } from '../../state/store';
import SaveButton from '../atoms/SaveButton';

const SettingsBar = () => {
  const surveyId = useAppSelector((state) => state.app.surveyId);
  const preview = useAppSelector((state) => state.app.preview);
  const dispatch = useAppDispatch();

  const handlePreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if ((e.target as Element).id === 'preview-button') {
      dispatch(setPreview(!preview));
    }
  };

  return (
    <SettingsWrapper className="settings">
      <HStack spacing="8px" justify="flex-start">
        {!!surveyId && <Tag>{surveyId}</Tag>}
      </HStack>
      <HStack spacing="8px" justify="flex-end">
        <Button id="preview-button" onClick={handlePreview} size="sm" colorScheme="blue" leftIcon={<ViewIcon />}>
          Preview
          <Switch isFocusable={false} id="preview-button" ml="5px" colorScheme="green" isChecked={preview} />
        </Button>
        <Button size="sm" colorScheme="blue">Theme</Button>
        <SaveButton />
      </HStack>
    </SettingsWrapper>
  );
};

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background: #110d36;
  /* background: linear-gradient(90deg, rgba(37,28,117,1) 0%, rgba(19,122,195,1) 100%); */
  padding:0.5rem;
  border-bottom: 3px solid #ff7300
  
`;

export default SettingsBar;
