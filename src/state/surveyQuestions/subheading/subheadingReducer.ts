import { createReducer } from '@reduxjs/toolkit';
import * as actions from './subheadingAction';
import defaults from '../../../lib/const/defaultQuestions';

type titleType = {
  [id: string]: {
    title: string,
  }
}

const initialState: titleType = {};

const titleReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.setSubheading, (state, { payload }) => {
    state[payload.id].title = payload.value;
  });

  builder.addCase(actions.addComponent, (state, { payload }) => {
    const title = defaults.subheading.content;
    state[payload.id] = title;
  });

  builder.addCase(actions.removeComponent, (state, { payload }) => {
    delete state[payload.id];
  });
});
export default titleReducer;
