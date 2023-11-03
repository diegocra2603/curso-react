import { useDispatch, useSelector } from "react-redux"
import { handlerAddNewEvent, handlerDeleteEvent, handlerSetActiveEvent, handlerUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(handlerSetActiveEvent({ ...calendarEvent }))
    }

    const startSavingEvent = async (calendarEvent) => {
        //TODO: llegar al backend

        //Todo bien
        if (calendarEvent._id !== 0) {
            dispatch(handlerUpdateEvent({ ...calendarEvent }));
        } else {
            dispatch(handlerAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }

    const startDeleteEvent = () => {
        dispatch(handlerDeleteEvent());
    }



    return {
        //Properties
        events,
        activeEvent,
        //Methods
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
    }
}