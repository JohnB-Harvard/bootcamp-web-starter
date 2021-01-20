import gql from 'graphql-tag'

export const REGISTER = gql`
    mutation register($RegisterInput: RegisterInput!){
        register(input: $RegisterInput){
            user {
                firstName
                lastName
                id
                email
            }
        }
    }
`
