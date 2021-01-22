import styled from 'styled-components'

export const Hero = styled.div`

  height: 100%;
  width: 100%; 

  display: flex; 
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  background-color: #FFF3F0;
  margin-top: 1.5em;

`

export const Title = styled.h1`

  margin: 0 0 0 0;
  font-size: 4em;
  font-family: 'Montserrat', sans-serif;

`

export const Subtitle = styled.h3`

  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 50px;
  font-family: 'Montserrat', sans-serif;

`

export const CardContainer = styled.div`

  display: flex; 
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;

  margin-bottom: 50px;

`

export const RegiButton = styled.button`

  font-family: 'Montserrat', sans-serif;
  margin: auto;
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 15vw;
  height: 7vh;
  border: solid 1px black;
  background-color: white;

  transition-duration: 500ms;
  font-size: large;
  outline: none;

  &&:hover {

    cursor: pointer;

  }

`

export const RegiButtonContent = styled.div`

  margin: auto;
  background-color: white;

`

export const CardsRight = styled.div`

  margin: 0 0 0 0;
  font-size: 30px;

`
export const CardsLeft = styled.div`

  margin: 0 0 0 0;
  font-size: 30px;

`
export const Card = styled.li`

  list-style: none;
  background-color: white; 
  box-shadow: -5px 5px 0 0 #FFDFD7; 
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex; 
  width: 40vw;
  height: 7vh;

  align-items: center;
  transition-duration: 500ms;
  font-size: large;

  &&:hover {

    box-shadow: -2px 2px 0 0 #FFDFD7; 

  }

`

export const CardLogo = styled.span`

  margin-left: 10px;
  margin-right: 10px;

`

export const ButtonLogo = styled.span`

  margin-right: 10px;

`
