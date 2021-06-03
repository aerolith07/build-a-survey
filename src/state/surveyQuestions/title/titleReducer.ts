import { createReducer, nanoid } from '@reduxjs/toolkit';
import * as actions from './titleAction';
import defaults from '../../../lib/const/defaultQuestions';

type titleType = {
  [id: string]: {
    title: string,
  }
}

const initialState: titleType = {
  // [nanoid()]: {
  //   title: 'string',
  // },
};

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
});
export default titleReducer;
