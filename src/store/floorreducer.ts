//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface floorState {
  floorAccess: [boolean, boolean, boolean, boolean, boolean];
}

const initialState: floorState = {
  floorAccess: [false, false, false, false, false],
};

export const floorSlice = createSlice({
  initialState,
  name: "floor",
  reducers: {

    changeAccess: (state, action: PayloadAction<number>) => {
      state.floorAccess[action.payload] = !state.floorAccess[action.payload];
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
