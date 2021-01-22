import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Calendar from './containers/Calendar'
import Courses from './containers/Courses'
import Todo from './containers/Todos'
import Login from './containers/Login'
import Register from './containers/Register'
import GlobalContext from './utils/GlobalContext'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalContext>
          <div className="App">
            <Navbar>
              <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/Calendar" component={Calendar} />
                <Route path="/Courses" component={Courses} />
                <Route path="/Todos" component={Todo} />
                <Route path="/" component={Home} />
              </Switch>
            </Navbar>
          </div>
        </GlobalContext>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
