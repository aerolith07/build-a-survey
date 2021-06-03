import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Components from '../../lib/const/componentMap';
import { useAppSelector } from '../../state/store';
import Question from './templates/Question';

const renderQuizComponents = (order: any, questions: any) => order.map(({
  type,
  id,
}: any, index: number) => {
  const question = questions[type][id];
  const QuestionComponent = Components[type];
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(dragProvided) => (
        <div
          className="question"
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
        >
          <Question>
            <QuestionComponent
              editable
              id={id}
              {...question}
            />
          </Question>
        </div>
      )}
    </Draggable>
  );
});

const renderDropZone = () => (<DropZone><Heading p="50px" borderRadius="10" color="gray.300" justifyContent="center">Drop Components Here</Heading></DropZone>);

const SurveyDropZone = () => {
  const { questions, order } = useAppSelector((state) => state.survey);

  return (
    <SurveyDropZoneWrapper>
      <Droppable droppableId="surveyDropZone">
        {(dropProvided) => (
          <DroppableArea ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
            {order.length > 0 ? renderQuizComponents(order, questions) : renderDropZone()}
            {dropProvided.placeholder}
          </DroppableArea>
        )}
      </Droppable>

    </SurveyDropZoneWrapper>
  );
};

const DropZone = styled.div`
display: flex;
  width:100%;
  height: 100%;
`;

const DroppableArea = styled.div`
  .question {
    margin-bottom: 10px;
  }
`;

const DraggableQuestion = styled.div`
  padding:20px;
  background: white;
  width: 100%;
  border-radius: 10px;
  border:  2px dashed #b8b8dd;
`;

const SurveyDropZoneWrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin-top: 30px;
  margin: 20px;
  border-style: dashed;
  border-radius: 10px;
`;

export default SurveyDropZone;
