import {createSlice} from '@reduxjs/toolkit';
const INITIAL_STATE = {
  playersData: [],
};

const playersSlice = createSlice({
  name: 'playersReducers',
  initialState: INITIAL_STATE,
  reducers: {
    addPlayers: (state, action) => {
      return {
        playersData: [...state.playersData, {name: action.payload, score: 0}],
      };
    },
    incrementScore: (state,action) => {
      return {
        playersData: state.playersData.map(item =>
          item.name === action.payload
            ? {...item, score: item.score + 1}
            : item,
        ),
      };
    },
    resetGame: (state,action) => {
        return {
            playersData: []
        }
    }
  },
});

const {actions, reducer} = playersSlice;

export const {addPlayers,incrementScore,resetGame} = actions;

export default reducer;
