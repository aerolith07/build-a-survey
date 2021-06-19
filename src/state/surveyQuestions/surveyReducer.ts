/* eslint-disable no-param-reassign */
import { combineReducers, createAction } from '@reduxjs/toolkit';
import checkboxesReducer from './checkbox/checkboxReducer';
import inputReducer from './input/inputReducer';
import orderReducer from './order/orderReducer';
import { publishReducer } from './published/publishedReducer';
import radioReducer from './radio/radioReducer';
import subheadingReducer from './subheading/subheadingReducer';
import titleReducer from './title/titleReducer';

const surveyReducer = combineReducers({
  questions: combineReducers({
    radio: radioReducer,
    checkboxes: checkboxesReducer,
    input: inputReducer,
    title: titleReducer,
    subheading: subheadingReducer,
  }),
  order: orderReducer,
  published: publishReducer,
});

export const resetSurvey = createAction('survey/reset');

const rootReducer = (state, action) => {
  if (action.type === resetSurvey.type) {
    state = undefined;
  }

  return surveyReducer(state, action);
};
export default rootReducer;
