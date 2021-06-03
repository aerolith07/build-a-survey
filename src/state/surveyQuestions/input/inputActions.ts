import { createAction, nanoid } from '@reduxjs/toolkit';

export const setTitle = createAction<{id: string, value: string}>('input/setTitle');
export const setSubheading = createAction<{id: string, value: string}>('input/setSubheading');
export const addOption = createAction('input/addOption', ({ id }) => (
  { payload: { questionId: id, optionId: nanoid() } }
));
export const setOption = createAction('input/setOption', ({ questionId, optionId, value }) => (
  { payload: { questionId, optionId, value } }
));
export const removeOption = createAction<{id: string}>('input/removeOption');
export const addQuestion = createAction<{id: string}>('input/addQuestion');
export const removeQuestion = createAction<{id: string}>('input/removeQuestion');
