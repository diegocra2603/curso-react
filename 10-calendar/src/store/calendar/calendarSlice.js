import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [],
        activeEvent: null,
        isLoadingEvents: null,
    },
    reducers: {
        handlerSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        handlerAddNewEvent: (state, { payload }) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        handlerUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event.id === payload.id) {
                    return payload;
                }
                return event;
            })
        },
        handlerDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(event => event.id !== state.activeEvent.id);
                state.activeEvent = null;
            }
        },
        handlerLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            payload.forEach(event => {
                const exist = state.events.some(dbEvent => dbEvent.id === event.id);

                if (!exist) {
                    state.events.push(event);
                }

            })
        },
        handlerLogoutCalendar: (state) => {
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
            state.isLoadingEvents = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { handlerSetActiveEvent, handlerAddNewEvent, handlerUpdateEvent, handlerDeleteEvent, handlerLoadEvents, handlerLogoutCalendar } = calendarSlice.actions; 