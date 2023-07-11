import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subRedditReducer from './subRedditSlice';

export default configureStore({
  reducer: combineReducers({
    subreddits: subRedditReducer,
  }),
});
