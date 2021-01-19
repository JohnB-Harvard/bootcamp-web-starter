import React from 'react'

const TodoSearch = ({ userInput, setUserInput }) => {
  const handleChange = e => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setUserInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Search task..." />
    </form>
  )
}

export default TodoSearch
