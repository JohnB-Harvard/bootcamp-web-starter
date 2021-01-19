import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { LoginDiv, LoginInput, LoginLabel, SubmitButton } from './styles'
import { LOGIN } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [auth, {
    loading: loginLoading, error: loginError, data: loginData, called: loginCalled,
  }] = useMutation(LOGIN, { variables: { email, password } })

  return (
    <LoginDiv>
      <form>
        <LoginLabel htmlFor="email">Email: </LoginLabel>
        <LoginInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

        <LoginLabel htmlFor="password">Password: </LoginLabel>
        <LoginInput id="password" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />

        <SubmitButton
          type="submit"
          onClick={() => {
            auth()
            try {
              if (!loginLoading) {
                localStorage.setItem('token', loginData.login.token)
                history.push('/home')
              }
            } catch (err) {
            console.log(err)
            // pass. This is here b/c authData is undefined at first and this fix worked
            }
          }}
        >
        Log In
        </SubmitButton>
      </form>
    </LoginDiv>
  )
}

export default Login
