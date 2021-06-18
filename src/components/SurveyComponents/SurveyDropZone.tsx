import { Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Components from '../../lib/const/componentMap';
import { useAppSelector } from '../../state/store';
import Question from './templates/Question';

const renderQuizComponents = (order: any, questions: any, editable: boolean) => (
  <>
    {
      order.map(({
        type,
        id,
      }: any, index: number) => {
        const questionProps = questions[type][id];
        const QuestionComponent = Components[type];
        return (
          <Draggable key={id} draggableId={id} index={index} isDragDisabled={!editable}>
            {(dragProvided) => (
              <div
                className="question"
                ref={dragProvided.innerRef}
                {...dragProvided.draggableProps}
                {...dragProvided.dragHandleProps}
              >
                <Question editable={editable}>
                  <QuestionComponent
                    editable={editable}
                    id={id}
                    {...questionProps}
                  />
                </Question>
              </div>
            )}
          </Draggable>
        );
      })
    }
    <Draggable draggableId="submit-button" index={order.length} isDragDisabled>
      {(dragProvided) => (
        <div
          className="question"
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
        >
          <Button colorScheme="green" mt="30px">Submit</Button>
        </div>
      )}
    </Draggable>
  </>
);

const renderDropZone = () => (<DropZone><Heading p="50px" borderRadius="10" w="100%" h="70vh" color="gray.300" justifyContent="center">Drop Components Here</Heading></DropZone>);

const SurveyDropZone = () => {
  const { questions, order } = useAppSelector((state) => state.survey);
  const editable = useAppSelector((state) => !state.app.preview);

  return (
    <Droppable droppableId="surveyDropZone">
      {(dropProvided) => (
        <DroppableArea ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
          {order.length > 0 ? renderQuizComponents(order, questions, editable) : renderDropZone()}
          {dropProvided.placeholder}
        </DroppableArea>
      )}
    </Droppable>
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

export default SurveyDropZone;
