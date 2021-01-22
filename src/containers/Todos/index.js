import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
    FormTitle, FormLabel, Input, SubmitButton, SubmitButtonContent, ButtonLogo, Container, Todo, SubContainer
} from './styles'
import { GET_USER, ADD_TODO } from './graphql'
import { useGlobalContext } from '../../utils/GlobalContext'

const TodoForm = () => {
    const [userId, setUserId] = useState('')
  const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER, {
      onCompleted: ({ userViewer: { id } }) => {
        setUserId(id)
      }
  })
  if (userError) {
      console.log(userError)
      throw new Error('query failed')
  }
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [addTodo, { error, loading }] = useMutation(ADD_TODO,
    {
      variables: {
        input: {
          name,
          description,
          userId,
        },
      },
      refetchQueries: () => ({ query: GET_USER })
    })
  const handleSubmit = async () => {
    try {
      await addTodo()
      setName("")
      setDescription("")
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
    <>
      <FormTitle>Add Todo</FormTitle>
      <br />


      <FormLabel>To-Do</FormLabel>
      <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter action item here..." required />

      <br />
      <FormLabel>Notes</FormLabel>
      <Input id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter details here..." />

      <br />
      <SubmitButton className="bounce-button" onClick={handleSubmit}>
        <SubmitButtonContent>
          <ButtonLogo><span uk-icon="plus" ratio=".7" /></ButtonLogo>
            Submit
        </SubmitButtonContent>
      </SubmitButton>
    </>
    </SubContainer>
  )
}


const TodoList = () => {
  const { loading, error, data } = useQuery(GET_USER)
  if (loading) return <p>Loading</p>
  if (error) return `Error: ${error}`
  console.log(data.userViewer.todos)
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
