import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  LoginDiv, LoginInput, LoginLabel, SubmitButton,
} from './styles'
import { LOGIN } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [login, {
    loading: loginLoading, error: loginError, data: loginData, called: loginCalled,
  }] = useMutation(LOGIN, {
    variables: { email, password },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/')
    },
    onError: err => { console.log(err) },
  })
  return (
    <LoginDiv>
      <LoginLabel htmlFor="email">Email: </LoginLabel>
      <LoginInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

      <LoginLabel htmlFor="password">Password: </LoginLabel>
      <LoginInput id="password" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />

      <SubmitButton
        type="submit"
        onClick={login}
      >
        Log In
      </SubmitButton>
    </LoginDiv>
  )
}

export default Login
