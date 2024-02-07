import { configureStore } from '@reduxjs/toolkit';
import cakeItemsSlice from './cakeItemsSlice';
import pastryItemsSlice from './pastryItemsSlice ';
import CupCakeItemsSlice from './cupCakeItemsSlice';
import weddingCakeItemsSlice from './weddingCakeItemsSlice';
import cartSlice from './cartSlice';
// import itemsSlice from './itemsSlice ';
// import buyCakeItemsSlice from './buyCakeItemsSlice';

const store = configureStore({
  reducer: {
    // items: itemsSlice.reducer,
    cakeItems: cakeItemsSlice.reducer,
    pastryItems: pastryItemsSlice.reducer,
    cupCakeItems: CupCakeItemsSlice.reducer,
    weddingCakeItems: weddingCakeItemsSlice.reducer,
    cart: cartSlice.reducer,
    // buyCakeItems: buyCakeItemsSlice.reducer
  }

});

export default store;