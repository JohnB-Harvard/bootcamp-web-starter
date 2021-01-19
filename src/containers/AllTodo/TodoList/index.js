import React from 'react'
import { TodosList, Button } from './styles'
import Todo from '../Todo'


const TodoList = ({
  toDoList, handleToggle, handleFilter, userInput,
}) => (
  <TodosList>
    {toDoList.filter(task => task.task.indexOf(userInput) === 0).map(todo => (
      <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
    ))}
    <Button style={{ margin: '20px' }} onClick={handleFilter}>Clear All</Button>
  </TodosList>
)

export default TodoList
