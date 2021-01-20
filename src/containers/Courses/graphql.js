import gql from 'graphql-tag'

export const ADD_COURSE = gql`
    mutation($input: addCourseInput!) {
        addCourse(input: $input){
            professor
        }
    }
`
