import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated',
        user: {},
        errorMessage: undefined
    },
    reducers: {
        checking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        handlerLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        handlerLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { checking, handlerLogin, handlerLogout, clearErrorMessage } = authSlice.actions;