import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  LoginDiv, LoginInput, LoginLabel, SubmitButton,
} from './styles'
import { LOGIN } from './graphql'
import { useGlobalContext } from '../../utils/GlobalContext'

const Login = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [login, {
    loading: loginLoading, error: loginError, data: loginData, called: loginCalled,
  }] = useMutation(LOGIN, {
    variables: { email, password },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      globalState.login(true)
    },
    onError: () => { },
  })
  return (
    <LoginDiv>
      <LoginLabel htmlFor="email">Email: </LoginLabel>
      <LoginInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

      <LoginLabel htmlFor="password">Password: </LoginLabel>
      <LoginInput id="password" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />

      <SubmitButton
        onClick={login}
      >
        Log In
      </SubmitButton>
      <LoginLabel>New here? Click Below to create an account</LoginLabel>
      <SubmitButton onClick={() => history.push('/Register')}>Register</SubmitButton>
    </LoginDiv>
  )
}

export default Login
