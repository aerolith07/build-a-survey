import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import addOptionIds from '../../../lib/utils/addOptionIds';
import getActions from './anyInputActions';
import defaults from '../../../lib/const/defaultQuestions';

function createBuilderCallback<T>(type: Questions) {
  const actions = getActions(type);

  return ((builder: ActionReducerMapBuilder<T>) => {
    builder.addCase(actions.setTitle, (state, { payload }) => {
      state[payload.id].title = payload.value;
    });

    builder.addCase(actions.setSubheading, (state, { payload }) => {
      state[payload.id].subheading = payload.value;
    });

    builder.addCase(actions.addOption, (state, { payload }) => {
      const prefix = `${defaults[type].optionPrefix}`;
      const value = prefix ? `${prefix} ${state[payload.questionId].options.length + 1}` : '';
      state[payload.questionId].options.push({ id: payload.optionId, value });
    });

    builder.addCase(actions.setOption, (state, { payload }) => {
      const index = state[payload.questionId].options.findIndex(
        (option: { id: any; }) => option.id === payload.optionId,
      );
      state[payload.questionId].options[index].value = payload.value;
    });

    builder.addCase(actions.removeOption, (state, { payload }) => {
      state[payload.id].options.splice(state[payload.id].options.length - 1);
    });

    builder.addCase(actions.addQuestion, (state, { payload }) => {
      const radioQuestion = defaults[type].content;
      const options = addOptionIds(radioQuestion.options);
      state[payload.id] = { ...radioQuestion, options };
    });

    builder.addCase(actions.removeQuestion, (state, { payload }) => {
      delete state[payload.id];
    });
  });
}

export default createBuilderCallback;
