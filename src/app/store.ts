import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {radioOptions} from '../features/radioOption/radioOptionReducer'
import { checkboxes } from '../features/checkbox/checkboxReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import orderReducer from './orderReducer'

const surveyReducer = combineReducers({radioOptions, checkboxes, order:orderReducer})


export const store = configureStore({
  reducer: {
    surveyQuestions: surveyReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
