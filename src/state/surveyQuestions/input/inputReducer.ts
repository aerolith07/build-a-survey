import { createReducer } from '@reduxjs/toolkit';
import Questions from '../../../lib/const/Questions';
import createBuilderCallback from '../anyInput/anyInputReducer';
import { inputOptionType } from './inputActions';

const initialState: inputOptionType = {};

const inputReducer = createReducer(initialState, createBuilderCallback(Questions.input));

export default inputReducer;
