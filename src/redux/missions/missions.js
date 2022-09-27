import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_BOOKS';

export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (args, { dispatch }) => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    dispatch({
      type: FETCH_MISSIONS,
      payload: data,
    });
  },
);

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default missionsReducer;
