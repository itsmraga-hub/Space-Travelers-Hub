import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // bookRocket
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = true;
      }
    },
    // cancelBooking
    cancelRocket(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = false;
      }
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.rockets = [...action.payload];
    },
    [fetchRockets.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default rocketsSlice.reducer;
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
