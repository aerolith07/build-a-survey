import { createAction } from '@reduxjs/toolkit';

export const addQuestionToOrder = createAction<{id: string, type:string, insertIndex: number}>('order/addQuestion');
export const removeQuestionFromOrder = createAction<{id: string}>('order/removeQuestion');
export const reorderQuestion = createAction<{id: string, insertIndex: number, removeIndex:number}>('order/reorderQuestions');
