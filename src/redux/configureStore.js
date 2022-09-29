import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsReducer';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
