import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  multiplier: 1,
  operations: [],
  totalOperations: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      const change = 1 * state.multiplier;
      state.value += change;
      state.totalOperations += 1;
      state.operations.push({
        action: 'increment',
        change: change,
        timestamp: new Date().toLocaleTimeString(),
        resultingValue: state.value,
      });
      if (state.operations.length > 10) {
        state.operations.shift();
      }
    },
    decrement: (state) => {
      const change = 1 * state.multiplier;
      state.value -= change;
      state.totalOperations += 1;
      state.operations.push({
        action: 'decrement',
        change: change,
        timestamp: new Date().toLocaleTimeString(),
        resultingValue: state.value,
      });
      if (state.operations.length > 10) {
        state.operations.shift();
      }
    },
    incrementByAmount: (state, action) => {
      const change = action.payload * state.multiplier;
      state.value += change;
      state.totalOperations += 1;
      state.operations.push({
        action: `incrementByAmount(${action.payload})`,
        change: change,
        timestamp: new Date().toLocaleTimeString(),
        resultingValue: state.value,
      });
      if (state.operations.length > 10) {
        state.operations.shift();
      }
    },
    decrementByAmount: (state, action) => {
      const change = action.payload * state.multiplier;
      state.value -= change;
      state.totalOperations += 1;
      state.operations.push({
        action: `decrementByAmount(${action.payload})`,
        change: change,
        timestamp: new Date().toLocaleTimeString(),
        resultingValue: state.value,
      });
      if (state.operations.length > 10) {
        state.operations.shift();
      }
    },
    setMultiplier: (state, action) => {
      state.multiplier = action.payload;
    },
    reset: (state) => {
      state.value = 0;
      state.multiplier = 1;
      state.totalOperations += 1;
      state.operations.push({
        action: 'reset',
        change: 0,
        timestamp: new Date().toLocaleTimeString(),
        resultingValue: 0,
      });
      if (state.operations.length > 10) {
        state.operations.shift();
      }
    },
    clearHistory: (state) => {
      state.operations = [];
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  setMultiplier,
  reset,
  clearHistory,
} = counterSlice.actions;

export default counterSlice.reducer;
