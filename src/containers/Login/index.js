import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { LoginDiv, LoginInput, LoginLabel, SubmitButton } from './styles'
// import { AUTHENTICATE } from './graphql'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [auth, {
  //   loading: authLoading, error: authError, data: authData, called: authCalled,
  // }] = useLazyQuery(AUTHENTICATE, { variables: { email, password } })

  return (
    <LoginDiv>
      <form>
        <LoginLabel for="email">Email</LoginLabel>
        <LoginInput id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

        <LoginLabel for="password">Password</LoginLabel>
        <LoginInput id="password" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />

        <SubmitButton
          type="submit"
          onClick={() => {
            // auth()
            try {
              if (/* !authLoading && authData.auth */ true) {
                localStorage.setItem('token', 'LoggedIn') // TODO: make work with real token
                history.push('/home')
              }
            } catch (err) {
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
