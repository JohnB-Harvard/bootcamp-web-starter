import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {
  FormTitle, FormContainer, FormLabel, Input, SubmitButton, SubmitButtonContent, ButtonLogo,
} from './styles'
import { GET_USER_TODOS } from './graphql'

const TodoForm = () => (

  <>
    <FormTitle>Add Todo</FormTitle>

    <FormLabel for="name">Title</FormLabel>
    <br />
    <Input type="text" name="name" required />

    <br />
    <FormLabel for="start">Description</FormLabel>
    <br />
    <Input type="text" name="description" />

    <br />
    <SubmitButton className="bounce-button">
      <SubmitButtonContent>
        <ButtonLogo><span uk-icon="plus" ratio=".7" /></ButtonLogo>
            Submit
      </SubmitButtonContent>
    </SubmitButton>

  </>

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
  if (loading) return <p>Loading</p>
  if (error) return `Error: ${error}`
  return (
    <>
      <p>My Todo List</p>
      <li>{data.userTodos.map(item => item.name)}</li>
    </>
  )
}

const Todos = () => (

  <FormContainer>

    <TodoForm />
    <TodoList />

  </FormContainer>

)

export default Todos
