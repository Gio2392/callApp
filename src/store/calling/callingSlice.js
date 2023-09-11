import { createSlice } from '@reduxjs/toolkit';

export const callingSlice = createSlice({
  name: 'calling',
  initialState: {
    isSaving: true,
    messageSaved: '',
    registers: [],
    active: null,
  },
  reducers: {
    setRegisters: (state, action) => {
      state.registers = action.payload;
    },
  },
});

export const { setRegisters } = callingSlice.actions;
