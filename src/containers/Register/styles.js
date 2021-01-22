import styled, { keyframes } from 'styled-components'
import theme from '../../theme'
import { tada } from 'react-animations'

const ani = keyframes`${tada}`;


export const RegiField = styled.div`

    width: 100%;
    /* background-color: green; */

    display: flex; 
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

`
export const RegiTitle = styled.h1`

    width: 100%; 
    font-size: xx-large; 
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    margin-bottom: 2em;

`

export const RegiSub = styled.div`

    display: flex; 
    width: 50%;
    flex-direction: column;

    &&:first-child {

        margin-right: 20px;

    }
`

export const RegisterDiv = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background.secondary};
    width: 70%;
    height: 100%;
    justify-content: center;
    margin-top: 1.5em;
`

export const RegisterInput = styled.input`

    font-family: 'Montserrat', sans-serif;
    font-size: 1.1em;
    height: 1.5em;
    border: none;
    border-bottom: none;
    width: 100%;
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

export const RegisterLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    font-weight: bold;
    padding: 0 0 0 0;
    margin-top: 10px;
    color: black;
    display: block;
`

export const SubmitButton = styled.button`

    font-family: 'Montserrat', sans-serif;
    margin: auto;
    margin: 0 0 0 0;
    border-radius: 5px;
    width: 25vw;
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
