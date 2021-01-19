import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ShadowContainer = styled.div`
    width: 100%;
    box-shadow: ${props => (props.hover ? '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.26)' : '0')};
`

export const Container = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing:2px;
    line-height: 1em;
    padding: 2vh 5vw 0 5vw;
    justify-content: space-between;
`
export const NavLinks = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    padding: 1vh 0 5vh 10vh;
`
export const NavBLink = styled(Link)`
    color: black;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    &:hover {
        color: #e36055;
    }
`
