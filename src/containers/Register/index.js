import React, { useState } from 'react'
import {
  RegisterDiv, RegisterInput, RegisterLabel, SubmitButton,
} from './styles'
// import {} from './graphql'

const Register = () => {
  const [email, setEmail] = useState()
  const [confirmEmail, setCEmail] = useState()
  const [password, setPassword] = useState()
  // Mutation Query here

  return (
    <RegisterDiv>
      <form>
        <RegisterLabel for="email">Email:</RegisterLabel>
        <RegisterInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

        <RegisterLabel for="confirmEmail">Confirm Email: </RegisterLabel>
        <RegisterInput id="confirmEmail" value={confirmEmail} onChange={e => setCEmail(e.target.email)} placeholder="Confirm Email" />

        <RegisterLabel for="password">Set Password:</RegisterLabel>
        <RegisterInput id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

        <SubmitButton onClick={() => {}}>MakeUser</SubmitButton>
      </form>
    </RegisterDiv>
  )
}

export default Register
