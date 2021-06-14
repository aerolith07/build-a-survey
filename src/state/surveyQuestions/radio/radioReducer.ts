import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import createBuilderCallback from '../anyInput/anyInputReducer';
import { radioOptionType } from './radioActions';

const initialState: radioOptionType = {};

const radioReducer = createReducer(initialState, createBuilderCallback(Questions.radio));
export default radioReducer;
