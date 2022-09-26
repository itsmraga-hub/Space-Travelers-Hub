import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRockets = createAsyncThunk(
    "rockets/fetchRockets",
    async () => {
        const response = await fetch("https://api.spacexdata.com/v3/rockets");
        const data = await response.json();
        return data;
    }
);

const rocketsSlice = createSlice({
    name: "rockets",
    initialState: {
        rockets: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchRockets.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchRockets.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.rockets = state.rockets.concat(action.payload);
        },
        [fetchRockets.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});

export default rocketsSlice.reducer;