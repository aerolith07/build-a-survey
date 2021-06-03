import { Button } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import CheckboxQuestion from '../components/SurveyComponents/questions/CheckboxQuestion';
import InputQuestion from '../components/SurveyComponents/questions/InputQuestion';
import RadioQuestion from '../components/SurveyComponents/questions/RadioQuestion';
import { useAppDispatch, useAppSelector } from '../state/store';
import { addRadioQuestion } from '../state/surveyQuestions/radio/radioActions';

export default function Home() {
  const radioOptions = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <RadioQuestion
        defaultTitle="Are you able to edit this question as you like?"
        defaultSubheading="Click the text to find out"
        defaultRadioOptions={[{ value: 'True' }, { value: 'False' }]}
      />
      <CheckboxQuestion
        defaultTitle="Are you able to edit this question as you like?"
        defaultSubheading="Click the text to find out"
        defaultCheckboxOptions={[{ value: 'True' }, { value: 'False' }]}
      />
      <InputQuestion
        defaultTitle="Are you able to edit this question as you like? and enter text??"
        defaultSubheading="Click this text to find out"
        defaultInputOptions={[{ value: 'True' }, { value: 'False' }]}
      />
      <div><pre>{JSON.stringify(radioOptions, null, 2)}</pre></div>
      <Button onClick={() => dispatch(addRadioQuestion({ result: '123' }))}>Add radio buton</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:50px;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: {} };
};
