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
    line-height: 4em;
    padding: 0 0 0 0;
    justify-content: space-between;
    position: absolute;
    top: 0;
    width: 100%;
    /* background-color: white; */
`

export const NavLinks = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 0 0 0;
    text-align: center;
`

export const NavBLink = styled(Link)`
    color: black;
    cursor: pointer;
    outline: none;
    width: 100%;
    text-decoration: none;
    &:hover {
        color: #e36055;
    }
    padding: 0 0 0 0 !important;
`