import {
  Center, HStack, Spacer, VStack,
} from '@chakra-ui/layout';
import {
  Box, Editable, EditableInput, EditablePreview,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  DragDropContext, Draggable, Droppable, DropResult,
} from 'react-beautiful-dnd';
import { surveyComponents, SurveyComponent, getComponentById } from './initialData';

const renderEditableBox = (comp: SurveyComponent, index: number) => (
  <Draggable key={comp.id} draggableId={comp.id} index={index}>
    {(provided) => (
      <Box key={comp.id} alignItems="center" h="100px" w="100px" border="1px solid" bg="green.200" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <Center>
          <Editable defaultValue={comp.name}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Center>
      </Box>
    )}
  </Draggable>
);

const ReactBeautifulDND = () => {
  const [editorComps, setEditorComps] = useState<SurveyComponent[]>([]);
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) { return; }

    if (destination.droppableId === 'editor') {
      const copyComponentIds = Array.from(editorComps);
      copyComponentIds.splice(source.index, 1);
      copyComponentIds.splice(destination.index, 0,
        getComponentById(surveyComponents, draggableId));
      setEditorComps(copyComponentIds);
    }
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <HStack w="100%">
        <Droppable droppableId="components">
          {(provided) => (
            <VStack spacing={10} bg="green.100" ref={provided.innerRef} {...provided.droppableProps}>
              {surveyComponents.map((comp, index) => renderEditableBox(comp, index))}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
        <Spacer />
        <Droppable droppableId="editor">
          {(provided) => (
            <VStack spacing={10} bg="blue.100" w="100px" h="100px" ref={provided.innerRef} {...provided.droppableProps}>
              {editorComps.map((comp, index) => renderEditableBox(comp, index))}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
      </HStack>
    </DragDropContext>
  );
};

export default ReactBeautifulDND;
