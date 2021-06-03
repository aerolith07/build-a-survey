import { nanoid } from '@reduxjs/toolkit';
import { getAddActionFor, getRemoveActionFor } from '../const/actionMap';
import { addQuestionToOrder, removeQuestionFromOrder } from '../../state/surveyQuestions/order/orderAction';

export const addQuestion = (
  type: string,
  insertIndex: number,
  dispatch: any,
) => {
  const id = nanoid();
  const addQuestionAction = getAddActionFor(type);
  dispatch(addQuestionAction({ id }));
  dispatch(addQuestionToOrder({ id, type, insertIndex }));
};

export const removeQuestion = (
  type: string,
  id: string,
  dispatch: any,
) => {
  const removeQuestionAction = getRemoveActionFor(type);

  console.warn('removing question id:', id);

  dispatch(removeQuestionFromOrder({ id }));
  dispatch(removeQuestionAction({ id }));
};
