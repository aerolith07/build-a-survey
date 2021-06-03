import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import createBuilderCallback from '../anyInput/anyInputReducer';

type inputOptionType = {
  [id: string]: {
    title: string,
    subheading:string,
    options: Array<{id: string, value: string}>
  }
}

const initialState: inputOptionType = {};

const inputReducer = createReducer(initialState, createBuilderCallback(Questions.input));

// const input = createReducer(initialState, (builder) => {
//   builder.addCase(actions.setTitle, (state, { payload }) => {
//     state[payload.id].title = payload.value;
//   });

//   builder.addCase(actions.setSubheading, (state, { payload }) => {
//     state[payload.id].subheading = payload.value;
//   });

//   builder.addCase(actions.addOption, (state, { payload }) => {
//     const value = defaults.input.optionPrefix;
//     state[payload.questionId].options.push({ id: payload.optionId, value });
//   });

//   builder.addCase(actions.setOption, (state, { payload }) => {
//     const index = state[payload.questionId].options.findIndex(
//       (option) => option.id === payload.optionId,
//     );
//     state[payload.questionId].options[index].value = payload.value;
//   });

//   builder.addCase(actions.removeOption, (state, { payload }) => {
//     state[payload.id].options.splice(state[payload.id].options.length - 1);
//   });

//   builder.addCase(actions.addQuestion, (state, { payload }) => {
//     const inputQuestion = defaults.input.content;
//     state[payload.id] = addOptionIds(inputQuestion);
//   });

//   builder.addCase(actions.removeQuestion, (state, { payload }) => {
//     delete state[payload.id];
//   });
// });

export default inputReducer;
