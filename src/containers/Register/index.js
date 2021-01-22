import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  RegisterDiv, RegisterInput, RegisterLabel, SubmitButton, RegiField, RegiSub, RegiTitle
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

      <RegiTitle>Register for access to Plan-i-tas!</RegiTitle>

      <RegiField>

        <RegiSub>

          <RegisterLabel htmlFor="firstName">First Name</RegisterLabel>
          <RegisterInput id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />

        </RegiSub>
        
        <RegiSub>

          <RegisterLabel htmlFor="lastName">Last Name</RegisterLabel>
          <RegisterInput id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />

        </RegiSub>
        
      </RegiField>


      <RegiField>

        <RegiSub>

          <RegisterLabel htmlFor="email">Email</RegisterLabel>
          <RegisterInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

        </RegiSub>
        
        <RegiSub>

          <RegisterLabel htmlFor="confirmEmail">Confirm Email</RegisterLabel>
          <RegisterInput id="confirmEmail" value={confirmEmail} onChange={e => setCEmail(e.target.value)} placeholder="Confirm Email" />

        </RegiSub>
        
      </RegiField>

      <RegisterLabel htmlFor="password">Password</RegisterLabel>
      <RegisterInput id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

      <SubmitButton onClick={confirmEmail === email ? register : () => { console.log(email, confirmEmail) }}>
        {confirmEmail === email ? 'Register' : 'Make sure emails match!'}
      </SubmitButton>
    </RegisterDiv>
  )
}

export default Register
