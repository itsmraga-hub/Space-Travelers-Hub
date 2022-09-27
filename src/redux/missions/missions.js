import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_BOOKS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

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

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

// Set reserved true || false and return new State
const setReserved = (state, id) => {
  state.map((mission) => {
    if (mission.mission_id === id) {
      if (mission.reserved) {
        mission.reserved = false;
      } else {
        mission.reserved = true;
      }
    }
    return mission;
  });
  return state;
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS: {
      return [...action.payload];
    }
    case JOIN_MISSION: {
      const arr = state.map((obj) => ({ ...obj }));
      const missions = setReserved(arr, action.id);
      return [...missions];
    }
    case LEAVE_MISSION: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default missionsReducer;
