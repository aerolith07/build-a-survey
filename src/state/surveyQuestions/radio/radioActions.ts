import { createAction, nanoid } from '@reduxjs/toolkit';

export const setTitle = createAction<{id: string, value: string}>('radio/setTitle');
export const setSubheading = createAction<{id: string, value: string}>('radio/setSubheading');
export const addOption = createAction('radio/addOption', ({ id }) => (
  { payload: { questionId: id, optionId: nanoid() } }
));
export const setOption = createAction('radio/setOption', ({ questionId, optionId, value }) => (
  { payload: { questionId, optionId, value } }
));
export const removeOption = createAction<{id: string}>('radio/removeOption');
export const addQuestion = createAction<{id: string}>('radio/addRadioQuestion');
export const removeQuestion = createAction<{id: string}>('radio/removeRadioQuestion');
