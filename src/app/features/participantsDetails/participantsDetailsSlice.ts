import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface ParticipantsDetailsState {
  isParticipantDetailsBoxOpen: Boolean;
}

// Define the initial state using that type
const initialState: ParticipantsDetailsState = {
    isParticipantDetailsBoxOpen: false,
};

export const ParticipantsDetailsSlice = createSlice({
  name: "participantsDetails",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleParticipantDetailsBox: (state) => {
      state.isParticipantDetailsBoxOpen = !state.isParticipantDetailsBoxOpen;
    },
  },
});

export const { toggleParticipantDetailsBox } = ParticipantsDetailsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsParticipantDetailsBoxOpen = (state: RootState) =>
  state.participantsDetails.isParticipantDetailsBoxOpen;

export default ParticipantsDetailsSlice.reducer;
