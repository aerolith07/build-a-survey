import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import {
  addQuestionToOrder, initOrder, orderEntry, removeQuestionFromOrder, reorderQuestion,
} from './orderAction';

const initialState: orderEntry[] = [
];

const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(addQuestionToOrder, (state, { payload }) => {
    const type = payload.type as keyof typeof Questions;
    const newQuestion = { type, id: payload.id };
    state.splice(payload.insertIndex, 0, newQuestion);
  });

  builder.addCase(removeQuestionFromOrder, (state, { payload }) => {
    const index = state.findIndex((question) => question.id === payload.id);
    if (index !== -1) { state.splice(index, 1); }
  });

  builder.addCase(reorderQuestion, (state, { payload }) => {
    const question = state.find((q) => q.id === payload.id);
    state.splice(payload.removeIndex, 1);
    state.splice(payload.insertIndex, 0, question);
  });

  builder.addCase(initOrder, (_, { payload }) => payload);
});

export default orderReducer;
