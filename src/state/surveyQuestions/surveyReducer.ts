import { combineReducers } from '@reduxjs/toolkit';
import radioReducer from './radio/radioReducer';
import checkboxesReducer from './checkbox/checkboxReducer';
import orderReducer from './order/orderReducer';
import inputReducer from './input/inputReducer';
import titleReducer from './title/titleReducer';
import subheadingReducer from './subheading/subheadingReducer';
import { publishReducer } from './published/publishedReducer';

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
export default surveyReducer;
