import React from 'react'
import { useHistory } from 'react-router-dom'

const Calendar = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/Login')
  }
  return (
    <>
      <p>Calendar</p>
      <a href="https://calendar.google.com/calendar/u/0/r" target="_">View your calendar</a>
    </>
  )
}

export default Calendar
