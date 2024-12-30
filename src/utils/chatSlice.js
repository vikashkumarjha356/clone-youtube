import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";
const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },

    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length > 20) {
                state.messages.shift()
            }

            state.messages.push(action.payload);
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;