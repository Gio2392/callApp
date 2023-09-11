import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { callingSlice } from './calling/callingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calling: callingSlice.reducer,
  },
});
