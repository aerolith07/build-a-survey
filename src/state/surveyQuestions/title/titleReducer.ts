import { createReducer } from '@reduxjs/toolkit';
import * as actions from './titleAction';
import defaults from '../../../lib/const/defaultQuestions';
import { titleType } from './titleAction';

const initialState: titleType = {};

const titleReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.setTitle, (state, { payload }) => {
    state[payload.id].title = payload.value;
  });

  builder.addCase(actions.addComponent, (state, { payload }) => {
    const title = defaults.title.content;
    state[payload.id] = title;
  });

  builder.addCase(actions.removeComponent, (state, { payload }) => {
    delete state[payload.id];
  });

  builder.addCase(actions.initComponent, (_, { payload }) => payload);
});
export default titleReducer;
