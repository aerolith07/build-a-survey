import { createAction, nanoid } from '@reduxjs/toolkit';

export type checkboxQuestionType = {
  [id: string]: {
    title: string,
    subheading:string,
    options: Array<{id: string, value: string}>
  }
}

export const setTitle = createAction<{id: string, value: string}>('checkbox/setTitle');
export const setSubheading = createAction<{id: string, value: string}>('checkbox/setSubheading');
export const addOption = createAction('checkbox/addOption', ({ id }) => (
  { payload: { questionId: id, optionId: nanoid() } }
));
export const setOption = createAction('checkbox/setOption', ({ questionId, optionId, value }) => (
  { payload: { questionId, optionId, value } }
));
export const removeOption = createAction<{id: string}>('checkbox/removeOption');
export const addQuestion = createAction<{id: string}>('checkbox/addQuestion');
export const removeQuestion = createAction<{id: string}>('checkbox/removeQuestion');
export const initQuestion = createAction<{[key: string]: checkboxQuestionType}>('checkbox/initQuestion');
