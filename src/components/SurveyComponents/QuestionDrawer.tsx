import { VStack } from '@chakra-ui/layout';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Components from '../../lib/const/componentMap';
import defaultQuestions from '../../lib/const/defaultQuestions';
import Question from './templates/Question';

const QuestionDrawer = () => {
  const data = Object.entries(defaultQuestions);

  return (
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
                    <Question inDrawer>
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
  );
};

export default QuestionDrawer;
