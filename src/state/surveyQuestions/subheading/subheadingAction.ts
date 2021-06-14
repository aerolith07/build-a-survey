import { createAction } from '@reduxjs/toolkit';

export type titleType = {
  [id: string]: {
    title: string,
  }
}

export const setSubheading = createAction<{id: string, value: string}>('subheading/setSubheading');
export const addComponent = createAction<{id: string}>('subheading/addRadioQuestion');
export const removeComponent = createAction<{id: string}>('subheading/removeRadioQuestion');
export const initComponent = createAction<titleType>('subheading/initSubheading');
