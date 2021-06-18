import { Spinner, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import { DragDropContext, resetServerContext } from 'react-beautiful-dnd';
import SurveyEditor from '../../components/organisms/SurveyEditor';
import ScreenWithNav from '../../components/templates/ScreenWithNav';
import useDrag from '../../lib/hooks/useDrag';
import useExitPrompt from '../../lib/hooks/useExitPrompts';
import useSurvey from '../../lib/hooks/useSurvey';

const edit = ({ surveyId }) => {
  useExitPrompt(true);
  const dragHandler = useDrag();
  const { loading, validID } = useSurvey(surveyId);

  const renderMainBody = () => {
    if (loading) { return <Spinner />; }
    if (!validID) { return <Text>Invalid ID</Text>; }
    return <SurveyEditor />;
  };

  return (
    <DragDropContext onDragEnd={dragHandler}>
      <ScreenWithNav>
        {renderMainBody()}
      </ScreenWithNav>
    </DragDropContext>
  );
};

export default edit;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('context', context);
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: { surveyId: context.query.id || null } };
};
