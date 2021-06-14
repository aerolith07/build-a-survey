import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import createBuilderCallback from '../anyInput/anyInputReducer';
import { checkboxQuestionType } from './checkboxAction';

const initialState: checkboxQuestionType = {
};

const checkboxReducer = createReducer(initialState, createBuilderCallback(Questions.checkboxes));
export default checkboxReducer;
