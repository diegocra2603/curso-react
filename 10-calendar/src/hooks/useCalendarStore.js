import { useDispatch, useSelector } from "react-redux"
import { handlerAddNewEvent, handlerDeleteEvent, handlerLoadEvents, handlerSetActiveEvent, handlerUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { useAuthStore } from "./useAuthStore";
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents";
import Swal from "sweetalert2";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);

    const { user } = useAuthStore();

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(handlerSetActiveEvent({ ...calendarEvent }))
    }

    const startSavingEvent = async (calendarEvent) => {

        try {
            if (calendarEvent.id) {
    
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
    
                dispatch(handlerUpdateEvent({ ...calendarEvent, user }));
                return
            }
    
            const { data } = await calendarApi.post('/events', calendarEvent);
    
            dispatch(handlerAddNewEvent({ ...calendarEvent, id: data.evento.id, user }))
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response?.data?.msg, 'error')
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