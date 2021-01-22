import { useQuery } from '@apollo/react-hooks'
import React, {
  createContext, useContext, useState, useMemo,
} from 'react'
import { useHistory } from 'react-router-dom'
import { VIEWER_QUERY } from './graphql'

const Context = createContext()
export const useGlobalContext = () => useContext(Context)

const GlobalContext = ({ children }) => {
  const [isSignedIn, setSignedIn] = useState()
  const { loading, error, data } = useQuery(VIEWER_QUERY, {
    onError: () => {
      setSignedIn(false)
      localStorage.removeItem('token')
    },
    onCompleted: user => {
      if (user) {
        setSignedIn(true)
      }
    },
  })

  const history = useHistory()

  const globalState = useMemo(() => {
    const obj = { isSignedIn }
    obj.viewer = (data && data.userViewer) ? data.userViewer : null
    obj.login = input => {
      setSignedIn(input)
      history.push('/')
    }
    obj.logout = () => {
      setSignedIn(false)
      localStorage.removeItem('token')
      history.push('/Login')
    }
    return obj
  }, [isSignedIn, data])

  return (
    <Context.Provider value={globalState}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext
