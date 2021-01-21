import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container, NavLinks, NavBLink, LogoutButton,
} from './styles'


const logOut = () => {

}

const Navbar = ({ children }) => {
  const history = useHistory()
  return (
    <>
      <Container>
        <NavLinks>
          <NavBLink to="/">Home</NavBLink>
          <NavBLink to="/Calendar">Calendar</NavBLink>
          <NavBLink to="/Courses">Courses</NavBLink>
          <NavBLink to="/AllTodo">Todo</NavBLink>
          <LogoutButton onClick={() => {
            localStorage.removeItem('token')
            history.push('/Login')
          }}
          >
            Log Out
          </LogoutButton>
        </NavLinks>
      </Container>
      {children}
    </>
  )
}

export default Navbar
