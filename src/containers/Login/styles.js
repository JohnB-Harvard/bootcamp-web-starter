import styled from 'styled-components'

export const LoginInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    border: none;
    border-bottom: none;
    margin: 10px 0px;
    transition: border-bottom .25s ease;
    &:hover{
        border-bottom: 2px solid #e36055;
    }
    &:focus{
        border: solid;
        border-width: 2px;
        border-color: #e36055;
    }
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #DDDDDD;
    width: 100%;
`

export const LoginLabel = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    display: block;
`

export const SubmitButton = styled.button`
    display: block;
    background-color: #e36055;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px 30px;
    font-size: 1.5em;
    margin: 10px;
`
