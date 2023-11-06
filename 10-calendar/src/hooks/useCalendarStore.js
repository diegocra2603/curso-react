import { useDispatch, useSelector } from "react-redux"
import { handlerAddNewEvent, handlerDeleteEvent, handlerLoadEvents, handlerSetActiveEvent, handlerUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { useAuthStore } from "./useAuthStore";
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);

    const { user } = useAuthStore();

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(handlerSetActiveEvent({ ...calendarEvent }))
    }

    const startSavingEvent = async (calendarEvent) => {
        if (calendarEvent.id) {
            dispatch(handlerUpdateEvent({ ...calendarEvent }));
        } else {

            const { data } = await calendarApi.post('/events', calendarEvent);

            dispatch(handlerAddNewEvent({ ...calendarEvent, id: data.evento.id, user }))
        }
    }

    const startDeleteEvent = () => {
        dispatch(handlerDeleteEvent());
    }

    const startLoadingEvents = async () => {

        try {

            const { data } = await calendarApi.get('/events');

            const events = convertEventsToDateEvents(data.eventos)
            dispatch(handlerLoadEvents(events));

        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error)
        }

    }

    return {
        //Properties
        events,
        activeEvent,
        //Methods
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
        startLoadingEvents,
    }
}