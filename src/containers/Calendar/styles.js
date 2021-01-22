import styled, { keyframes } from 'styled-components'
import theme from '../../theme'
import { tada } from 'react-animations'
 
const ani = keyframes`${tada}`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background.secondary};
    width: 70%;
    height: 100%;
    justify-content: center;
    margin-top: 1.5em;
    align-items: center;
`

export const Title = styled.h1`

    width: 100%; 
    font-size: xx-large; 
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    margin-bottom: 2em;

`

export const Button = styled.button`

  font-family: 'Montserrat', sans-serif;
  margin: auto;
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 15vw;
  height: 2em;
  border: solid 1px black;
  background-color: white;
  justify-self: center;
  align-self: center;

  transition-duration: 500ms;
  font-size: medium;
  outline: none;

  &&:hover {

    cursor: pointer;
    animation: 1s ${ani};

  }

`

export const ButtonContent = styled.div`

  margin: auto;
  background-color: white;

`
export const ButtonLogo = styled.span`

  margin-right: 10px;

`
export const ButtonLink = styled.a`

  text-decoration: none; 
  color: black; 
  
  &:hover {

    text-decoration: none; 
    color: black;

  }

`