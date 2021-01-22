import React from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../utils/GlobalContext'
import { Container, Title, Button, ButtonContent, ButtonLogo, ButtonLink } from './styles'

const Calendar = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  if (!globalState.isSignedIn) {
    history.push('/Login')
  }
  return (
    <Container>
      <Title>Your Google Calendar</Title>
      

      <Button>
      <ButtonContent>
        <ButtonLogo><span uk-icon="calendar" ratio=".7" /></ButtonLogo>
        <ButtonLink href="https://calendar.google.com/calendar/u/0/r" target="_">View your calendar</ButtonLink>
      </ButtonContent>
    </Button>
    </Container>

  )
}

export default Calendar
