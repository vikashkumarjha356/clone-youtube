import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        globalSearchQuery: ''
    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)
        },

        globalSearchQuery: (state, action) => {
            state.globalSearchQuery = action.payload
        }
    }
});

export const { cacheResults, globalSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;