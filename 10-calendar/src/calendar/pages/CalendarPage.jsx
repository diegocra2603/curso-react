import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns'
import { CalendarEvent, Navbar } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

const events = [
  {
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: 1234,
      name: 'Diego'
    }
  }
]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }

  const handlerDoubleClick = (e) => {
    console.log({ doubleClick: e })
  }

  const handlerSelect = (e) => {
    console.log({ click: e })
  }

  const handlerViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

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
    </>
  )
}
