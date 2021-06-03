import { VStack } from '@chakra-ui/layout';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Components from '../../lib/const/componentMap';
import defaultQuestions from '../../lib/const/defaultQuestions';
import Question from './templates/Question';

const QuestionDrawer = () => {
  const data = Object.entries(defaultQuestions);

  return (
    <QuestionDrawerWrapper>
      <Droppable droppableId="questionDrawer">
        {(dropProvided) => (
          <VStack spacing={10} ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
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
                      <Question>
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
  background: #f6f6f6;
  display: flex;
  width: 50%;
  height: 100vh;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  justify-content: center;
`;

export default QuestionDrawer;
