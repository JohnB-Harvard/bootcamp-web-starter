import React from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../utils/GlobalContext'

const Calendar = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  if (!globalState.isSignedIn) {
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
