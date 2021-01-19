import React from 'react'
import { FormTitle, FormContainer, FormLabel, Select, Input, SubmitButton, SubmitButtonContent, ButtonLogo } from './styles'

const CourseForm = () => {

  return (

    <>
        <FormTitle>New Course</FormTitle>
        <form>

            <FormLabel for="name">Course Name</FormLabel>
            <br/>
                <Input type="text" name="name" required/>

            <br/>
            <FormLabel for="days">Course Days</FormLabel>
            <br/>
                <Select name="days" multiple required>
                    <option value="mon">Monday</option>
                    <option value="tues">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thurs">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                </Select>

            <br/>
            <FormLabel for="start">Course Times</FormLabel>
            <br/>
                <Input type="time" name="start" min="00:00" max="21:59" required placeholder="Start Time"/>
                &nbsp;&nbsp;&nbsp; to &nbsp;&nbsp;&nbsp;
                <Input type="time" name="end" min="00:00" max="21:59" required placeholder="End Time"/>

            <br/>
            <SubmitButton className="bounce-button"><SubmitButtonContent><ButtonLogo><span uk-icon="plus" ratio=".7"></span></ButtonLogo>Submit</SubmitButtonContent></SubmitButton>

        </form>
        </>

  );

}

const CourseList = () => {

    return (
  
      <div>List</div>
  
    );
  
}

const Courses = () => (

    <FormContainer>

        <CourseForm></CourseForm>
        <CourseList></CourseList>

    </FormContainer>
        
)

export default Courses