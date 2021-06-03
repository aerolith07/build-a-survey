import { GetServerSideProps } from 'next';
import React from 'react';
import { DragDropContext, DropResult, resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import SettingsBar from '../components/molecules/SettingsBar';
import QuestionDrawer from '../components/SurveyComponents/QuestionDrawer';
import SurveyDropZone from '../components/SurveyComponents/SurveyDropZone';
import { addQuestion, removeQuestion } from '../lib/utils/addQuestion';
import { useAppDispatch, useAppSelector } from '../state/store';
import { reorderQuestion } from '../state/surveyQuestions/order/orderAction';

const main = () => {
  const { order } = useAppSelector((state) => state.survey);

  const dispatch = useAppDispatch();
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      console.warn('no destination');
      return;
      // no destination
    }

    if (source.droppableId === destination.droppableId && destination.droppableId === 'surveyDropZone') {
      // Already existed in surveyDropZone - dropping back into new place
      console.warn('in survey drop zone');
      if (destination.index === source.index) {
        console.warn('Has not moved - in survey drop zone');
        return; // has not moved place
      }
      dispatch(reorderQuestion({
        id: draggableId,
        removeIndex: source.index,
        insertIndex: destination.index,
      }));
    }

    if (source.droppableId === destination.droppableId && destination.droppableId === 'questionDrawer') {
      console.warn('In Question drawer');
      return;
    }

    if (source.droppableId === 'questionDrawer' && destination.droppableId === 'surveyDropZone') {
      console.warn('moving from question drawer to survey drop zone');
      addQuestion(draggableId, destination.index, dispatch);
    }

    if (source.droppableId === 'surveyDropZone' && destination.droppableId === 'questionDrawer') {
      console.warn('moving from surveyDropZone to questionDrawer');
      const question = order.filter((orderEntry) => (orderEntry.id === draggableId))[0];
      removeQuestion(question.type, question.id, dispatch);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Header>Header</Header>
        <MainBody className="main-body">
          <QuestionDrawerWrapper className="question-drawer">
            <QuestionDrawer />
          </QuestionDrawerWrapper>
          <FormBuilder className="form-builder">
            <SettingsHeader className="settings">
              <SettingsBar />
            </SettingsHeader>
            <SurveyDropZoneWrapper>
              <SurveyDropZone />
            </SurveyDropZoneWrapper>
          </FormBuilder>
        </MainBody>
      </div>
    </DragDropContext>
  );
};

const Header = styled.header`
  background: #0E79B2;
  color: white;
  padding: 1rem;
`;

const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 3rem);
`;

const QuestionDrawerWrapper = styled.div`
  background: #191923;
  padding: 1rem;
  flex-basis: 20%;
  flex-grow: 0;
  max-width: 20%;
  min-width: calc(200px + 1rem)
`;

const SurveyDropZoneWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 6rem);
  padding: 20px;
`;

const FormBuilder = styled.div`
  background: white;
  flex-basis: 80%;
`;

const SettingsHeader = styled.div`
  color: white;
  background: #0C6697;
  padding:0.5rem;
`;

export default main;

export const getServerSideProps: GetServerSideProps = async () => {
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: {} };
};
