import { createAction, createReducer } from '@reduxjs/toolkit';

export const login = createAction<string>('metadata/login');
export const logout = createAction('metadata/logout');
export const setSurvey = createAction<string | undefined>('metadata/survey');
export const setPreview = createAction<boolean>('metadata/previewMode');

const initialState = {
  username: undefined,
  surveyId: undefined,
  preview: false,
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(login, (state, { payload }) => {
    state.username = payload;
  });

  builder.addCase(logout, (state) => {
    state.username = undefined;
  });

  builder.addCase(setSurvey, (state, { payload }) => {
    state.surveyId = payload;
  });

  builder.addCase(setPreview, (state, { payload }) => {
    state.preview = payload;
  });
});

export default appReducer;
