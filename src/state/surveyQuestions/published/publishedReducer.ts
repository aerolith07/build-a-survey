import { createAction, createReducer } from '@reduxjs/toolkit';

export const setPublished = createAction<boolean>('setpubished');

const initialState: boolean = null;

export const publishReducer = createReducer(initialState, (builder) => {
  builder.addCase(setPublished, (_, { payload }) => payload);
});
