// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../Redux/sliceData';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
