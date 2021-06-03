import { VStack } from '@chakra-ui/layout';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Components from '../../lib/const/componentMap';
import defaultQuestions from '../../lib/const/defaultQuestions';

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
                    <DraggableQuestion
                      ref={dragProvider.innerRef}
                      {...dragProvider.draggableProps}
                      {...dragProvider.dragHandleProps}
                    >
                      <QuestionComponent
                        key={id}
                        editable={false}
                        title={content.title}
                        subheading={content.subheading}
                        options={content.options}
                      />
                    </DraggableQuestion>
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

const DraggableQuestion = styled.div`
  padding:20px;
  background: white;
  width: 100%;
  border-radius: 10px;
  border:  2px dashed #b8b8dd;
`;

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
