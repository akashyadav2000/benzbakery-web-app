import { createSlice } from '@reduxjs/toolkit';
import { BUY_CAKE_ITEMS } from "../Data/buyCakeItems"


const buyCakeItemsSlice = createSlice({
  name: 'buyCakeItems',
  initialState: BUY_CAKE_ITEMS,

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    }
  }
});

export const buyCakeItemsActions = buyCakeItemsSlice.actions;

export default buyCakeItemsSlice;