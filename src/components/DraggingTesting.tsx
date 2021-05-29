import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import React, { DragEvent, useState } from 'react';


const DraggingTesting = () => {

  const [DragOver, setDragOver] = useState(false);
  const [text, setText] = useState('')


  const dragStart = (event: DragEvent<HTMLDivElement>) => {
    console.warn('The drag has begun, setting drag data');
    event.dataTransfer.setData('text/plain', 'This is the data transfer data')
  }

  const dragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    console.info('Drag over')
    setDragOver(true)
  }

  const dragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    console.info('Drag over ended')
    setDragOver(false)
  }

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const drop = (event: DragEvent<HTMLDivElement>) => {
    console.warn('DROPPED!');

    const data = event.dataTransfer.getData('text/plain')
    console.log('Got this data', data);
    setText(text => text + '\n\n\n' + data)
    event.preventDefault();
  }

  const bg = DragOver ? "green.400" : "green.100"
  console.log(bg);

  return (
    <Flex width='90%'>
      <Box draggable p="10" bg="green.300" onDragStart={dragStart} >
        Drag Me
      </Box>
      <Spacer />
      <Box onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={onDragOver} onDrop={drop} p="10" bg={bg} >
        Drag here
        <Container onDragEnter={dragEnter} onDragOver={onDragOver} onDrop={drop}>
          {text}
        </Container>
      </Box>
    </Flex >
  )










}
export default DraggingTesting
