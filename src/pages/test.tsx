import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import React from 'react';
import { resetServerContext } from 'react-beautiful-dnd';
import RadioButton from '../components/SurveyComponents/RadioButton';
import { Button } from '@chakra-ui/react';
import { addRadioOption } from '../features/radioOption/radioOptionReducer';
import { useAppDispatch, useAppSelector } from '../app/store';


export default function Home() {

  const radioOptions = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  console.log(addRadioOption());


  return (
    <Wrapper>
      {/* <RadioButton
        defaultTitle="Are you able to edit this question as you like?"
        defaultSubheading="Click the text to find out"
        defaultRadioOptions={[{ value: 'True' }, { value: 'False' }]}
      /> */}
      <div><pre>{JSON.stringify(radioOptions, null, 2)}</pre></div>
      <Button onClick={() => dispatch(addRadioOption())}>Add radio buton</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding:50px;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: {} };
};
