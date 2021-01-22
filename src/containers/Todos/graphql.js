import gql from 'graphql-tag'

export const GET_USER = gql`
query userViewer {
  userViewer {
    id
    email
    firstName
    lastName
    todos {
        name
        description
    }
  }
}
`
export const ADD_TODO = gql`
mutation addTodo($input: addTodoInput!){
  addTodo(input: $input){
    name
    description
  }
`
