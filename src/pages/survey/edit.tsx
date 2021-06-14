import { Spinner } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import { DragDropContext, resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import QuestionDrawer from '../../components/SurveyComponents/QuestionDrawer';
import FromBuilder from '../../components/SurveyComponents/wrappers/FormBuilderWrapper';
import ScreenWithNav from '../../components/templates/ScreenWithNav';
import useDrag from '../../lib/hooks/useDrag';
import useExitPrompt from '../../lib/hooks/useExitPrompts';
import useSurvey from '../../lib/hooks/useSurvey';

const edit = ({ surveyId }) => {
  useExitPrompt(true);
  const dragHandler = useDrag();
  const { loading, validID } = useSurvey(surveyId);

  console.log(loading);
  return (
    <DragDropContext onDragEnd={dragHandler}>
      <ScreenWithNav>
        {loading ? <Spinner /> : (
          <MainBody>
            <QuestionDrawer />
            <FromBuilder />
          </MainBody>
        )}
      </ScreenWithNav>
    </DragDropContext>
  );
};

const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
`;

export default edit;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('context', context);
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: { surveyId: context.query.id || null } };
};
