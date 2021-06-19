import { createAction, createReducer } from '@reduxjs/toolkit';

export const setOptionAnswer = createAction<{questionId:string, optionId: string, value:(string | boolean)}>('answer/setOption');
export const addAnswer = createAction<Answer>('answer/addAnswer');
export const initAnswers = createAction<Answer[]>('answer/init');
export const resetAnswers = createAction('answer/reset');

type Answer = {
  id: string,
  title: string,
  options: {
    id: string,
    value: string | boolean
  }[]
}

const initialState: Answer[] = [];

export const answerReducer = createReducer(initialState, (builder) => {
  builder.addCase(setOptionAnswer, (state, { payload: { questionId, optionId, value } }) => {
    const [questionIndex, optionIndex] = findOptionIndex(state, questionId, optionId);
    if (questionIndex !== undefined && optionIndex !== undefined) {
      state[questionIndex].options[optionIndex].value = value;
    }
  });

  builder.addCase(addAnswer, (state, { payload }) => {
    state.push(payload);
  });

  builder.addCase(initAnswers, (_, { payload }) => payload);
  builder.addCase(resetAnswers, () => undefined);
});

const findOptionIndex = (
  answers: Answer[],
  questionId: string,
  optionId: string,
) => {
  const questionIndex = answers.findIndex((question) => question.id === questionId);
  if (questionIndex !== -1) {
    const optionIndex = answers[questionIndex].options
      .findIndex((option) => option.id === optionId);
    return [questionIndex, optionIndex];
  }
  return [undefined, undefined];
};
