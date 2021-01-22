import styled, { keyframes } from 'styled-components'
import theme from '../../theme'
import { tada } from 'react-animations'
 
const ani = keyframes`${tada}`;
 
export const LoginInput = styled.input`

    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    height: 2em;
    border: none;
    border-bottom: none;
    margin: 10px 0px;
    transition: box-shadow 500ms ease;
    box-shadow: -5px 5px 0 0 #FFDFD7;

    &:hover{
        
        box-shadow: -2px 2px 0 0 #FFDFD7;

    }

    &:focus{

        outline-style: solid;
        outline-color: #FFDFD7;
        outline-width: 2px;

    }

`


export const LoginTitle = styled.h1`

    width: 100%; 
    font-size: xx-large; 
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    margin-bottom: 2em;

`

export const LoginDiv = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background.secondary};
    width: 80%;
    height: 100%;
    justify-content: center;

`

export const LoginLabel = styled.label`

    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    color: black;
    display: block;

`


// export const  = styled.button`
//     background-color: #FFDFD7;
//     border: none;
//     color: white;
    
// `

export const SubmitButton = styled.button`

  font-family: 'Montserrat', sans-serif;
  margin: auto;
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 15vw;
  height: 7vh;
  border: solid 1px black;
  background-color: white;
  text-align: center;
    text-decoration: none;
    padding: 10px 30px;
    font-size: 1.5em;
    margin-right: auto;
    margin-left: auto; 
    margin-top: 10px;
    margin-bottom: 20px;

  transition-duration: 500ms;
  font-size: large;
  outline: none;

  &&:hover {

    cursor: pointer;
    animation: 1s ${ani};

  }

`

export const LinkButton = styled.span`

  background-color: transparent; 
  border: none; 
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: black;
  border-bottom: solid black 2px;

  &&:hover {

    cursor: pointer;

  }

`

export const RegisterLabel = styled.label`

  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: black;
  display: block;
  justify-self: flex-end;
  align-self: center;

`