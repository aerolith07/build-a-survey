import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import createBuilderCallback from '../anyInput/anyInputReducer';

type radioOptionType = {
  [id: string]: {
    title: string,
    subheading:string,
    options: Array<{id: string, value: string}>
  }
}

const initialState: radioOptionType = {};

const radioReducer = createReducer(initialState, createBuilderCallback(Questions.radio));
export default radioReducer;

// const radioReducer = createReducer(initialState, (builder) => {
//   builder.addCase(actions.setTitle, (state, { payload }) => {
//     state[payload.id].title = payload.value;
//   });

//   builder.addCase(actions.setSubheading, (state, { payload }) => {
//     state[payload.id].subheading = payload.value;
//   });

//   builder.addCase(actions.addOption, (state, { payload }) => {
//     const value = `
// ${defaults.radio.optionPrefix} ${state[payload.questionId].options.length + 1}`;
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
//     const radioQuestion = defaults.radio.content;
//     state[payload.id] = addOptionIds(radioQuestion);
//   });

//   builder.addCase(actions.removeQuestion, (state, { payload }) => {
//     delete state[payload.id];
//   });
// });
