import gql from 'graphql-tag'

export const GET_USER_INFO = gql`
query userViewer {
  userViewer {
    firstName
  }
}
`
