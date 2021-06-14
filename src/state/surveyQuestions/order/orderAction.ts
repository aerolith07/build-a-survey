import { createAction } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';

export type orderEntry = {
  id: string,
  type: keyof typeof Questions,
}

export const addQuestionToOrder = createAction<{id: string, type:string, insertIndex: number}>('order/addQuestion');
export const removeQuestionFromOrder = createAction<{id: string}>('order/removeQuestion');
export const reorderQuestion = createAction<{id: string, insertIndex: number, removeIndex:number}>('order/reorderQuestions');
export const initOrder = createAction<orderEntry[]>('order/initOrder');
