import React from 'react'
import { Hero, Title, Subtitle, CardContainer, RegiButton, CardsRight, CardsLeft, Card, CardLogo, RegiButtonContent, ButtonLogo } from './styles.js'

const Home = () => {

    return (

        <Hero>

            <Title>Product Name</Title>
            <Subtitle>short, catchy slogan in a different, lighter font</Subtitle>
            
            <CardContainer>

                <CardsRight>

                    <Card><CardLogo><span uk-icon="calendar" ratio="1.3"></span></CardLogo><span>Schedule events and classes</span></Card>
                    <Card><CardLogo><span uk-icon="grid" ratio="1.3"></span></CardLogo><span>Organized list of daily events</span></Card>
                    <Card><CardLogo><span uk-icon="google" ratio="1.3"></span></CardLogo><span>Seamless integration into Google Calendars</span></Card>

                </CardsRight>
                <CardsLeft>

                    <Card><CardLogo><span uk-icon="search" ratio="1.3"></span></CardLogo><span>Search tasks and events</span></Card>
                    <Card><CardLogo><span uk-icon="code" ratio="1.3"></span></CardLogo><span>A web application by Harvard Students</span></Card>
                    <Card><CardLogo><span uk-icon="github" ratio="1.3"></span></CardLogo><span>Find us on Github!</span></Card>

                </CardsLeft>

            </CardContainer>

            <RegiButton className="bounce-button"><RegiButtonContent><ButtonLogo><span uk-icon="sign-in" ratio="1.3"></span></ButtonLogo>Sign Up!</RegiButtonContent></RegiButton>

        </Hero>

    );

}

export default Home
