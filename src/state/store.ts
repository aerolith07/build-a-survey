import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appReducer from './appState/appReducers';
import { answerReducer } from './surveyAnswers/answersReducer';
import surveyReducer from './surveyQuestions/surveyReducer';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
    app: appReducer,
    answers: answerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
