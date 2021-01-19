import React from 'react'
import { Input } from './styles'

const Todo = ({ todo, handleToggle }) => {
  const handleClick = e => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <Input id={todo.id} key={todo.id + todo.task} name="Todo" value={todo.id} onClick={handleClick}>
      {todo.task}
    </Input>
  )
}

export default Todo
