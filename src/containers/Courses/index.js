import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  FormTitle, FormContainer, FormLabel, Select, Input, SubmitButton, SubmitButtonContent, ButtonLogo, Section, Time
} from './styles'
import { ADD_COURSE } from './graphql'
import { useGlobalContext } from '../../utils/GlobalContext'

const CourseForm = () => {
  const globalState = useGlobalContext()
  const history = useHistory()
  // if (!globalState.isSignedIn) {
  //   history.push('/Login')
  // }
  const url = 'http://www.google.com/calendar/render?action=TEMPLATE&text=Custom Event&dates=20200121T224000Z/20200122T224000Z&details=An event that is customized&location=zoom link https://stackoverflow.com/questions/10488831/link-to-add-to-google-calendar&trp=true&sprop=name:'
  return (
    <FormContainer>
      <FormTitle>Add a New Course</FormTitle>

        <FormLabel htmlFor="name">Course Name</FormLabel>
        <Input type="text" name="name" required />

        <br />
        <FormLabel htmlFor="days">Course Days</FormLabel>
        <Select name="days" multiple required>
          <option value="mon">Monday</option>
          <option value="tues">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thurs">Thursday</option>
          <option value="fri">Friday</option>
          <option value="sat">Saturday</option>
          <option value="sun">Sunday</option>
        </Select>

        <br />
        <FormLabel htmlFor="start">Course Times</FormLabel>
        <Section>
          <Time type="time" name="start" min="00:00" max="21:59" required placeholder="Start Time" />
          <Time type="time" name="end" min="00:00" max="21:59" required placeholder="End Time" />
        </Section>
        <br />
        <br />
        <Section>

        <FormLabel htmlFor="loc">Course Location</FormLabel>
        <Input type="text" name="loc"  />

          {/* submit to list button  */}
          <SubmitButton>
            <SubmitButtonContent>
              <ButtonLogo><span uk-icon="plus" ratio=".7" /></ButtonLogo>
                Submit
            </SubmitButtonContent>
          </SubmitButton>

          {/* add to cal button  */}
          <SubmitButton>
            <SubmitButtonContent>
              <ButtonLogo><span uk-icon="calendar" ratio=".7" /></ButtonLogo>
              <a href={url} target="_" rel="noopenner norefferer nofollow">
                Add to My Calendar
              </a>
            </SubmitButtonContent>
          </SubmitButton>

        </Section>
    </FormContainer>

  )
}

const Courses = () => (

  <CourseForm />

)

export default Courses
