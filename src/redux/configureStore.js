import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsReducer';

const rootReducer = combineReducers({
    rockets: rocketsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
