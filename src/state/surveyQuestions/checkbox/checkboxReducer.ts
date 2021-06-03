import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import createBuilderCallback from '../anyInput/anyInputReducer';

type checkboxQuestionType = {
  [id: string]: {
    title: string,
    subheading:string,
    options: Array<{id: string, value: string}>
  }
}

const initialState: checkboxQuestionType = {
};

const checkboxReducer = createReducer(initialState, createBuilderCallback(Questions.checkboxes));

// const checkboxesReducer = createReducer(initialState, (builder) => {
//   builder.addCase(actions.setTitle, (state, { payload }) => {
//     state[payload.id].title = payload.value;
//   });

//   builder.addCase(actions.setSubheading, (state, { payload }) => {
//     state[payload.id].subheading = payload.value;
//   });

//   builder.addCase(actions.addOption, (state, { payload }) => {
//     const value =
// `${defaults.checkboxes.optionPrefix} ${state[payload.questionId].options.length + 1}`;
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
//     const checkboxQuestion = defaults.checkboxes.content;
//     state[payload.id] = addOptionIds(checkboxQuestion);
//   });

//   builder.addCase(actions.removeQuestion, (state, { payload }) => {
//     delete state[payload.id];
//   });
// });

export default checkboxReducer;
