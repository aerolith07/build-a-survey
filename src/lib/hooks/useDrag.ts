import { DropResult } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { reorderQuestion } from '../../state/surveyQuestions/order/orderAction';
import { addQuestion, removeQuestion } from '../utils/addQuestion';

const useDrag = () => {
  const { order } = useAppSelector((state) => state.survey);
  const dispatch = useAppDispatch();

  const dragHandler = (result: DropResult) => {
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

  return dragHandler;
};

export default useDrag;
