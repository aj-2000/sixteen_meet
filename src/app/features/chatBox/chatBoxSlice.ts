import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface chatBoxState {
  isChatBoxOpen: Boolean;
}

// Define the initial state using that type
const initialState: chatBoxState = {
  isChatBoxOpen: false,
};

export const chatBoxSlice = createSlice({
  name: "chatBox",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleChatBox: (state) => {
      state.isChatBoxOpen = !state.isChatBoxOpen;
    },

    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const { toggleChatBox } = chatBoxSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsChatBoxOpen = (state: RootState) =>
  state.chatBox.isChatBoxOpen;

export default chatBoxSlice.reducer;
