import { createAction } from '@reduxjs/toolkit';

export type titleType = {
  [id: string]: {
    title: string,
  }
}

export const setTitle = createAction<{id: string, value: string}>('title/setTitle');
export const addComponent = createAction<{id: string}>('title/addRadioQuestion');
export const removeComponent = createAction<{id: string}>('title/removeRadioQuestion');
export const initComponent = createAction<titleType>('title/initComponent');
