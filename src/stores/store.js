import { configureStore } from "@reduxjs/toolkit";



const store = configureStore?({reducer: {ui: uiSlice.reducer, user: userSlice.reducer}})

: {
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
};

export default store;