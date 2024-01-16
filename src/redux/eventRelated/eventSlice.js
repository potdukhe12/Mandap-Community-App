import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventsList: [],
    loading: false,
    error: null,
    response: null,
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.eventsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError
} = eventSlice.actions;

export const eventReducer = eventSlice.reducer;