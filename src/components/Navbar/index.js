import React from 'react'
import {
  Container, NavLinks, NavBLink, LogoutButton, ButtonLogo, ButtonContent
} from './styles'
import { useGlobalContext } from '../../utils/GlobalContext'

const Navbar = ({ children }) => {
  const globalState = useGlobalContext()
  return (
    <>
      <Container>
        <NavLinks>
          <NavBLink to="/">Home</NavBLink>
          <NavBLink to="/Calendar">Calendar</NavBLink>
          <NavBLink to="/Courses">Courses</NavBLink>
          <NavBLink to="/AllTodo">Todo</NavBLink>
          <LogoutButton onClick={globalState.logout}>
            <ButtonContent>
              <ButtonLogo><span uk-icon="sign-out" ratio="1" /></ButtonLogo>
              Log Out
            </ButtonContent>
          </LogoutButton>
        </NavLinks>
      </Container>
      {children}
    </>
  )
}

export default Navbar
