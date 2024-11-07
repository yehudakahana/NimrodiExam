//FILL HERE 3.2

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


   const roles = [ "Unknown Personnel" , "Guest" , "Student" , "Developer" , "Executive Personnel"]


   const initialState: string =  roles[0]


export const roleSlice = createSlice({
    initialState,
    name: "role",
    reducers: {
        setRole( _, action: PayloadAction< number> )
        {
            return roles[action.payload];
        }
    }
});

export const {setRole  } = roleSlice.actions;
export default roleSlice.reducer;
