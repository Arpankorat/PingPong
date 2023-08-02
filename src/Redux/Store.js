import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './Reducers/PlayersReducers'

const store = configureStore({
    reducer: playerReducer
});

export default store;