import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  FormTitle, FormContainer, FormLabel, Input, SubmitButton, SubmitButtonContent, ButtonLogo, Section, Sub, AddTodo, Todo
} from './styles'
import { GET_USER_TODOS } from './graphql'
import { useGlobalContext } from '../../utils/GlobalContext'

const TodoForm = () => (

  <AddTodo>
    <FormTitle>Add To-Do</FormTitle>

    <Section>

        <Sub>

          <FormLabel for="name">To-Do</FormLabel>
          <Input type="text" name="name" required />

        </Sub>
        
        <Sub>

          <FormLabel for="start">To-Do Details</FormLabel>
          <Input type="text" name="description" />

        </Sub>

    </Section>

    <br />
    <SubmitButton>
      <SubmitButtonContent>
        <ButtonLogo><span uk-icon="plus" ratio=".7" /></ButtonLogo>
            Submit
      </SubmitButtonContent>
    </SubmitButton>

  </AddTodo>

)


const TodoList = () => {
  const { loading, error, data } = useQuery(GET_USER_TODOS, {
    variables: {
      RegisterInput: {
        email: 'Hessel_Lenna@gmail.com',
        firstName: 'a',
        lastName: 'a',
        password: 'a',
      },
    },
  })
  if (loading) return <p>Loading...</p>
  if (error) return `Error: ${error}`
  return (
    <AddTodo>
      <FormTitle>My Todo List</FormTitle>
      <li>{data.userTodos.map(item => item.name)}</li>
    </AddTodo>
  )
}

const Todos = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  if (!globalState.isSignedIn) {
    history.push('/Login')
  }
  return (
    <FormContainer>

      <TodoForm />
      <TodoList />

    </FormContainer>

  )
}

export default Todos
