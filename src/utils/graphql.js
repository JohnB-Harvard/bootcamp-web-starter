import gql from 'graphql-tag'

export const VIEWER_QUERY = gql`
    query userViewer{
        userViewer{
            id,
            firstName,
            lastName,
            email,
        }
    }
`
