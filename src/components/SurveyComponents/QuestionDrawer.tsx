import { VStack } from '@chakra-ui/layout';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Components from '../../lib/const/componentMap';
import defaultQuestions from '../../lib/const/defaultQuestions';
import { useAppSelector } from '../../state/store';
import Question from './templates/Question';

const QuestionDrawer = () => {
  const data = Object.entries(defaultQuestions);

  const preview = useAppSelector((state) => state.app.preview);

  if (preview) {
    return null;
  }

  return (
    <QuestionDrawerWrapper className="question-drawer">
      <Droppable droppableId="questionDrawer">
        {(dropProvided) => (
          <VStack spacing="0.5rem" ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
            {data.map(([id, comp], index) => {
              const { type, content } = comp;
              const QuestionComponent = Components[type];
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(dragProvider) => (
                    <div
                      ref={dragProvider.innerRef}
                      {...dragProvider.draggableProps}
                      {...dragProvider.dragHandleProps}
                    >
                      <Question inDrawer editable={false}>
                        <QuestionComponent editable={false} {...content} />
                      </Question>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {dropProvided.placeholder}
          </VStack>
        )}
      </Droppable>
    </QuestionDrawerWrapper>
  );
};

const QuestionDrawerWrapper = styled.div`
  background: #eee;
  padding: 1rem;
  flex-basis: 20%;
  flex-grow: 0;
  max-width: 20%;
  min-width: calc(200px + 1rem)
`;

export default QuestionDrawer;
