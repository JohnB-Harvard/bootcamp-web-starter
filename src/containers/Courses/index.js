import React, { useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  FormTitle, FormContainer, FormLabel, Select, Input, SubmitButton, SubmitButtonContent, ButtonLogo, Section, Time, ButtonLink
} from './styles'
import { ADD_COURSE } from './graphql'
import { useGlobalContext } from '../../utils/GlobalContext'

const genURLs = (DOW) => {
  for (const day in DOW) {
    console.log(day)
  }
}

const CourseForm = () => {
  // Checked Logged in
  const globalState = useGlobalContext()
  const history = useHistory()
  if (!globalState.isSignedIn) {
    history.push('/Login')
  }

  // Local Variables to hold things
  const [course, setCourse] = useState('')
  const location = 'Zoom Link: LINK'
  const recurring = 'RRULE:FREQ=WEEKLY'
  const DOWReducer = (prevState, payload) => ({...prevState, ...payload})
  const [DOW, setDOW] = useReducer(DOWReducer, [false,false,false,false,false])
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  console.log(DOW)
  const url = `http://www.google.com/calendar/render?action=TEMPLATE&text=${course}&dates=${date}T${startTime}00/${date}T${endTime}00&location=${location}&recur=${recurring}&trp=true&sprop=name:`
  return (
    <FormContainer>
      <FormTitle>Add a New Course</FormTitle>

        <FormLabel htmlFor="name">Course Name</FormLabel>
        <Input value={course} onChange={e => setCourse(e.target.value)} type="text" name="name" required />

        <br />
        <FormLabel htmlFor="days">Course Days</FormLabel>
        <Select name="days" multiple required>
          <option onClick={e => setDOW({ [0]: e.target.selected })} value="mon">Monday</option>
          <option onClick={e => setDOW({ [1]: e.target.selected })} value="tues">Tuesday</option>
          <option onClick={e => setDOW({ [2]: e.target.selected })} value="wed">Wednesday</option>
          <option onClick={e => setDOW({ [3]: e.target.selected })} value="thurs">Thursday</option>
          <option onClick={e => setDOW({ [4]: e.target.selected })} value="fri">Friday</option>
        </Select>

        <br />
        <FormLabel htmlFor="start">Course Times</FormLabel>
        <Section>
          <Time value={startTime} onChange={e => setStartTime(e.target.value)} type="time" name="start" min="00:00" max="21:59" required placeholder="Start Time" />
          <Time value={endTime} onChange={e => setEndTime(e.target.value)} type="time" name="end" min="00:00" max="21:59" required placeholder="End Time" />
        </Section>
        <br />

        <FormLabel htmlFor="loc">Course Location</FormLabel>
        <Input type="text" name="loc"  />
        <br />


        <Section>
          {/* submit to list button  */}
          <SubmitButton onClick={() => console.log(startTime.replace(':',''), endTime.replace(':',''))}>
            <SubmitButtonContent>
              <ButtonLogo><span uk-icon="plus" ratio=".7" /></ButtonLogo>
                Submit
            </SubmitButtonContent>
          </SubmitButton>

          {/* add to cal button  */}
          <ButtonLink href={url} target="_" rel="noopenner norefferer nofollow">
            <SubmitButton>
              <SubmitButtonContent>
                <ButtonLogo><span uk-icon="calendar" ratio=".7" /></ButtonLogo>
                  Add to My Calendar
              </SubmitButtonContent>
            </SubmitButton>
          </ButtonLink>
          
        </Section>

    </FormContainer>

  )
}

const Courses = () => (

  <CourseForm />

)

export default Courses
