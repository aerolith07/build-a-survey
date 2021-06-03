import { combineReducers } from '@reduxjs/toolkit';
import radioReducer from './radio/radioReducer';
import checkboxesReducer from './checkbox/checkboxReducer';
import orderReducer from './order/orderReducer';
import inputReducer from './input/inputReducer';

const surveyReducer = combineReducers({
  questions: combineReducers({
    radio: radioReducer,
    checkboxes: checkboxesReducer,
    input: inputReducer,
  }),
  order: orderReducer,
});
export default surveyReducer;
