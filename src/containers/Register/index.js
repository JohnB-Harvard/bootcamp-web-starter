import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  RegisterDiv, RegisterInput, RegisterLabel, SubmitButton,
} from './styles'
import { REGISTER } from './graphql'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [confirmEmail, setCEmail] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  const [register, {
    loading: registerLoading, error: registerError, data: registerData, called: registerCalled,
  }] = useMutation(REGISTER, {
    variables: {
      RegisterInput: {
        firstName, lastName, email, password,
      },
    },
    onCompleted: () => {
      history.push('/Login')
    },
    onError: err => { console.log(err) },
  })

  return (
    <RegisterDiv>
      <RegisterLabel htmlFor="firstName">First Name: </RegisterLabel>
      <RegisterInput id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />

      <RegisterLabel htmlFor="lastName">Last Name: </RegisterLabel>
      <RegisterInput id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />

      <RegisterLabel htmlFor="email">Email: </RegisterLabel>
      <RegisterInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

      <RegisterLabel htmlFor="confirmEmail">Confirm Email: </RegisterLabel>
      <RegisterInput id="confirmEmail" value={confirmEmail} onChange={e => setCEmail(e.target.email)} placeholder="Confirm Email" />

      <RegisterLabel htmlFor="password">Set Password: </RegisterLabel>
      <RegisterInput id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

      <SubmitButton onClick={register}>MakeUser</SubmitButton>
    </RegisterDiv>
  )
}

export default Register
