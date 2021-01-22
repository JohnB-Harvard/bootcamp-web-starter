import styled, {keyframes} from 'styled-components'
import { tada } from 'react-animations'
 
const ani = keyframes`${tada}`;

export const FormContainer = styled.div`

  height: 100%;
  width: 70%; 

  display: flex; 
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  background-color: #FFF3F0;

`

export const FormTitle = styled.div`

  width: 100%; 
  color: black;
  font-weight: bold;
  font-size: xx-large; 
  text-align: center;
  font-family: 'Montserrat', 'sans-serif';
`

export const FormLabel = styled.label`

  font-family: 'Montserrat', sans-serif;
  font-size: 1.3em;
  font-weight: bold;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  color: black;
  display: block;

`


export const Select = styled.select`

  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  width: 100%;
  box-shadow: -5px 5px 0 0 #FFDFD7;
  transition: box-shadow 500ms ease;
  
  &:hover{
      
      box-shadow: -2px 2px 0 0 #FFDFD7;

  }

  &:focus{

      outline-style: solid;
      outline-color: #FFDFD7;
      outline-width: 2px;

  }

`

export const Input = styled.input`

  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
  height: 1.5em;
  border: none;
  border-bottom: none;
  width: 100%;
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

export const Section = styled.div`

  display: flex; 
  flex-direction: row;
  justify-content: space-evenly;

`

export const Time = styled.input`

  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
  height: 1.5em;
  border: none;
  border-bottom: none;
  width: 100%;
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

  &&:first-child {

    margin-right: 20px;

  }

`

export const SubmitButton = styled.button`

  font-family: 'Montserrat', sans-serif;
  margin: auto;
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 30vw;
  height: 2em;
  border: solid 1px black;
  background-color: white;

  transition-duration: 500ms;
  font-size: medium;
  outline: none;

  &&:hover {

    cursor: pointer;
    animation: 1s ${ani};

  }

`

export const SubmitButtonContent = styled.div`

  margin: auto;
  background-color: white;

`
export const ButtonLogo = styled.span`

  margin-right: 10px;

`
