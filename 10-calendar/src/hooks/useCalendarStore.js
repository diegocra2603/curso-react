import { useDispatch, useSelector } from "react-redux"
import { handlerAddNewEvent, handlerSetActiveEvent } from "../store";

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

        } else {
            dispatch(handlerAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }

    return {
        //Properties
        events,
        activeEvent,
        //Methods
        setActiveEvent,
        startSavingEvent,
    }
}