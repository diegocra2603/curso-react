import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        handlerOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        handlerCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { handlerOpenDateModal, handlerCloseDateModal } = uiSlice.actions;