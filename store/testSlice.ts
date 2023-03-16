/* 
  Testing slice to check if server components receives data from the store
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TestState {
  test: string;
}

const initialState: TestState = {
  test: 'initial test state',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    }
  }
});

export const { setTest } = testSlice.actions;
export default testSlice.reducer;
