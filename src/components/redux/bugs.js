import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
   value: 0,
   bugs: {},
   bugService: {},
   selectedBug: "ThisIsEmpty",
};

export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment: (state) => {
         // Redux Toolkit allows us to write "mutating" logic in reducers. It
         // doesn't actually mutate the state because it uses the Immer library,
         // which detects changes to a "draft state" and produces a brand new
         // immutable state based off those changes
         state.value += 1;
      },
      decrement: (state) => {
         state.value -= 1;
      },
      incrementByAmount: (state, action) => {
         state.value += action.payload;
      },
      loadBugs: (state, action) => {
         state.bugs = action.payload;
      },
      changeBugToBeUpdated: (state, action) => {
         state.selectedBug = action.payload;
      },
      selectBug: (state, action) => {
         return state.bugService.filter(
            (bug) => state.bug.bug_id === action.payload
         );
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   increment,
   decrement,
   incrementByAmount,
   loadBugs,
   changeBugToBeUpdated,
   selectBug,
} = counterSlice.actions;

export default counterSlice.reducer;
