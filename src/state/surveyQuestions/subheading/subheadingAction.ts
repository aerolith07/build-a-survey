import { createAction } from '@reduxjs/toolkit';

export const setSubheading = createAction<{id: string, value: string}>('subheading/setSubheading');
export const addComponent = createAction<{id: string}>('subheading/addRadioQuestion');
export const removeComponent = createAction<{id: string}>('subheading/removeRadioQuestion');
