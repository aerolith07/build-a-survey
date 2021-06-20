import {
  Button, HStack, Tag, Text,
} from '@chakra-ui/react';
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

  const handleEdit = (clickedId: string) => {
    router.push(`/survey/edit?id=${clickedId}`);
  };

  const handleReview = (clickedId: string) => {
    router.push(`/survey/results?id=${clickedId}`);
  };

  return (

    <SurveyEntryWrapper>
      <HStack spacing="10" justifyContent="space-evenly">
        <Text textAlign="left" fontWeight="700">{title}</Text>
        <Text>{id}</Text>
        <Text>{DateTime.fromISO(createdAt).toRelative()}</Text>
        <Text>{DateTime.fromISO(updatedAt).toRelative()}</Text>
        <Tag colorScheme={published ? 'green' : 'red'}>{published ? 'Published' : 'Unpublished'}</Tag>
        <Button onClick={() => handleEdit(id)} size="sm" colorScheme="blue">Edit</Button>
        <Button onClick={() => handleReview(id)} size="sm" colorScheme="blue">Results</Button>
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
