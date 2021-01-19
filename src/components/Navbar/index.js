import React from 'react'
import { Container, NavLinks, NavBLink } from './styles'

const Navbar = ({children}) => (
  <>
    <Container>
    <NavLinks>
    <NavBLink to="/">Home</NavBLink>
      <NavBLink to="/Calendar">Calendar</NavBLink>
      <NavBLink to="/Courses">Courses</NavBLink>
      <NavBLink to="/AllTodo">Todo</NavBLink>
    </NavLinks> 
    </Container>
    {children}
  </>
)

export default Navbar
