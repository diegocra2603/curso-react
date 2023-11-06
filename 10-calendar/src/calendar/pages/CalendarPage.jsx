import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';

export const CalendarPage = () => {

  const { user } = useAuthStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const { openDateModal } = useUiStore();

  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const eventStyleGetter = (event, start, end, isSelected) => {

    const isMyEvent = (user.uid === event.user._id || user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }

  const handlerDoubleClick = (e) => {
    openDateModal();
  }

  const handlerSelect = (e) => {
    setActiveEvent(e)
  }

  const handlerViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={handlerDoubleClick}
        onSelectEvent={handlerSelect}
        onView={handlerViewChanged}
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
