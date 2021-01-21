import gql from 'graphql-tag'

export const ADD_COURSE = gql`
    mutation addNewCourse ($input: addCourseInput!) {
        addCourse(input: $input){
            name
        }
    }
`
