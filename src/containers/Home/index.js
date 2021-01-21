import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery} from '@apollo/react-hooks'
import { GET_USER_INFO } from './graphql'
import {
  Hero, Title, Subtitle, CardContainer, RegiButton, CardsRight, CardsLeft, Card, CardLogo, RegiButtonContent, ButtonLogo,
} from './styles'

const Home = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/Login')
  }

  const {loading: viewerLoading, error: viewerError, data: viewerData} = useQuery(GET_USER_INFO)
    if (viewerError) {
        console.log(viewerError)
        throw new Error('books query failed')
    }

  const [weather, setWeather] = useState('')
  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=cambridge&units=imperial&appid=886705b4c1182eb1c69f28eb8c520e20')
        const data = await res.json()
        setWeather(data.main.temp)
      }
      fetchData()
  }, [])

  return (
    <Hero>

      <Title>Hello, {viewerLoading? ' ': viewerData.userViewer.firstName}!</Title>
      <Subtitle>Welcome to your Plan-i-tas.</Subtitle>
      <Subtitle>The current temperature in Cambridge is {weather} degrees Fahrenheit</Subtitle>
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
