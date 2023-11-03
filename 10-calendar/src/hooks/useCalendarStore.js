import { useDispatch, useSelector } from "react-redux"
import { handlerSetActiveEvent } from "../store";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(handlerSetActiveEvent({...calendarEvent}))
    }

    return {
        //Properties
        events,
        activeEvent,
        //Methods
        setActiveEvent,
    }
}