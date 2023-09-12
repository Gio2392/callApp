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
    deleteRegisterById: (state, action) => {
      state.registers = state.registers.filter(
        (register) => register.id !== action.payload
      );
    },
  },
});

export const { setRegisters, deleteRegisterById } = callingSlice.actions;
