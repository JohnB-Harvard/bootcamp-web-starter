import gql from 'graphql-tag'

export const ADD_COURSE = gql`
    mutation addNewCourse ($input: addCourseInput!) {
        addCourse(input: $input){
            name
        }
    }
`

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
