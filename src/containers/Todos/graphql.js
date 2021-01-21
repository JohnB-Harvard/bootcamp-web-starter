import gql from 'graphql-tag'

export const GET_USER_TODOS = gql`
query userTodos($RegisterInput: RegisterInput!){
  userTodos(user: $RegisterInput){
    name
    desc
  }
}
`