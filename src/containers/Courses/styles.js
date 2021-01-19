import styled from 'styled-components'

export const FormContainer = styled.div`

  height: 100%;
  width: 100%; 

  display: flex; 
  align-items: center; 
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  background-color: #FFF3F0;

`

export const FormTitle = styled.div`

  font-size: xx-large;
  color: black;

`

export const FormLabel = styled.label`

  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;  
  color: black;
  font-size: large;

`


export const Select = styled.select`

  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  width: 100%;

`

export const Input = styled.input`

  font-family: 'Montserrat', sans-serif;

`

export const SubmitButton = styled.button`

  font-family: 'Montserrat', sans-serif;
  margin: auto;
  margin: 0 0 0 0;
  border-radius: 5px;
  width: 15vw;
  height: 2em;
  border: solid 1px black;
  background-color: white;

  transition-duration: 500ms;
  font-size: medium;
  outline: none;

  &&:hover {

    cursor: pointer;

  }

`

export const SubmitButtonContent = styled.div`

  margin: auto;
  background-color: white;

`
export const ButtonLogo = styled.span`

  margin-right: 10px;

`
