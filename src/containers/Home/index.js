import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Hero, Title, Subtitle, CardContainer, RegiButton, CardsRight, CardsLeft, Card, CardLogo, RegiButtonContent, ButtonLogo,
} from './styles'
import { useGlobalContext } from '../../utils/GlobalContext'

const Home = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  if (!globalState.isSignedIn) {
    history.push('/Login')
  }
  return (
    <Hero>

      <Title>Product Name</Title>
      <Subtitle>short, catchy slogan in a different, lighter font</Subtitle>

      <CardContainer>

        <CardsRight>

          <Card>
            <CardLogo><span uk-icon="calendar" ratio="1.3" /></CardLogo>
            <span>Schedule events and classes</span>
          </Card>
          <Card>
            <CardLogo><span uk-icon="grid" ratio="1.3" /></CardLogo>
            <span>Organized list of daily events</span>
          </Card>
          <Card>
            <CardLogo><span uk-icon="google" ratio="1.3" /></CardLogo>
            <span>Seamless integration into Google Calendars</span>
          </Card>

        </CardsRight>
        <CardsLeft>

          <Card>
            <CardLogo><span uk-icon="search" ratio="1.3" /></CardLogo>
            <span>Search tasks and events</span>
          </Card>
          <Card>
            <CardLogo><span uk-icon="code" ratio="1.3" /></CardLogo>
            <span>A web application by Harvard Students</span>
          </Card>
          <Card>
            <CardLogo><span uk-icon="github" ratio="1.3" /></CardLogo>
            <span>Find us on Github!</span>
          </Card>

        </CardsLeft>

      </CardContainer>

      <RegiButton className="bounce-button">
        <RegiButtonContent>
          <ButtonLogo><span uk-icon="sign-in" ratio="1.3" /></ButtonLogo>
Sign Up!
        </RegiButtonContent>
      </RegiButton>

    </Hero>

  )
}

export default Home
