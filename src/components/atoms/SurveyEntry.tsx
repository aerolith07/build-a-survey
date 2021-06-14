import { HStack, Tag, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

interface SurveyParams {
  _id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
  published: string
}

interface SurveyEntryProps {
  surveyParams: SurveyParams
}

const SurveyEntry = ({ surveyParams }: SurveyEntryProps) => {
  const router = useRouter();
  const {
    _id: id,
    title,
    createdAt,
    updatedAt,
    published,
  } = surveyParams;

  const handleClick = (clickedId: string) => {
    router.push(`/survey/edit?id=${clickedId}`);
  };

  return (

    <SurveyEntryWrapper onClick={() => handleClick(id)}>
      <HStack spacing="10" justifyContent="space-evenly">
        <Text textAlign="left" fontWeight="700">{title}</Text>
        <Text>{id}</Text>
        <Text>{DateTime.fromISO(createdAt).toRelative()}</Text>
        <Text>{DateTime.fromISO(updatedAt).toRelative()}</Text>
        <Tag colorScheme={published ? 'green' : 'red'}>{published ? 'Published' : 'Unpublished'}</Tag>
      </HStack>
    </SurveyEntryWrapper>
  );
};

const SurveyEntryWrapper = styled.div`
  background: white;
  padding:1rem;
  border-bottom: 1px solid grey;
  cursor: pointer;
  
  :hover {
    background: whitesmoke;
  }
`;

export default SurveyEntry;
