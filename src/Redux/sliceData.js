// src/features/menu/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItemId: null, // Initially no item selected
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedItemId: (state, action) => {
      state.selectedItemId = action.payload;
    },
    clearSelectedItemId: (state) => {
      state.selectedItemId = null;
    },
  },
});

export const { setSelectedItemId, clearSelectedItemId } = menuSlice.actions;
export default menuSlice.reducer;
