import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  FormTitle, FormLabel, Input, SubmitButton, SubmitButtonContent, ButtonLogo, Container, Todo, SubContainer
} from './styles'
import { GET_USER, ADD_TODO } from './graphql'
import { useGlobalContext } from '../../utils/GlobalContext'

const TodoForm = () => {
//   const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER)
//   console.log(userData.userViewer)
  const userId = 'd8960cd1-d34e-4766-9bf1-108a010b03d6'

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [addTodo, { error, loading }] = useMutation(ADD_TODO,
    {
    //   update: (client, { data }) => {
    //     try {
    //       const temp = client.readQuery({ query: GET_USER })
    //       temp.userViewer.todos = [...temp.userViewer.todos, data.addTodo]

    //       client.writeQuery({ query: GET_USER, temp })
    //     } catch (error) {
    //       throw new Error('update failed')
    //     }
    //   },
      variables: {
        input: {
          name,
          description,
          userId,
        },
      },
    })
  const handleSubmit = async () => {
    try {
      await addTodo()
    } catch (err) {
      console.log('submit error', err)
    }
  }
  if (loading) return <p>Loading</p>
  if (error) {
    console.log('look at this ', error)
    throw new Error('add todo failed')
  }
  return (
    <SubContainer>
      <FormTitle>Add Todo</FormTitle>

      <FormLabel>To-Do</FormLabel>
      <br />
      <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter action item here..." required />

      <br />
      <FormLabel>Notes</FormLabel>
      <br />
      <Input id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter details here..." />

      <br />
      <SubmitButton className="bounce-button" onClick={handleSubmit}>
        <SubmitButtonContent>
          <ButtonLogo><span uk-icon="plus" ratio=".7" /></ButtonLogo>
            Submit
        </SubmitButtonContent>
      </SubmitButton>
    </SubContainer>
  )
}


const TodoList = () => {
  const { loading, error, data } = useQuery(GET_USER)
  if (loading) return <p>Loading</p>
  if (error) return `Error: ${error}`
  return (
    <SubContainer>
      <FormTitle>Your To-Dos</FormTitle>
      {data.userViewer.todos.map(item => <Todo>{item.name}</Todo>)}
    </SubContainer>
  )
}

const Todos = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  if (!globalState.isSignedIn) {
    history.push('/Login')
  }
  return (
    <Container>
        
      <TodoForm />
      <TodoList />

    </Container>

  )
}

export default Todos
