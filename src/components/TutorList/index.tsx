import React from 'react'
import TutorCard from 'src/components/TutorCard'
import { Tutor } from 'src/types'
import styled from 'styled-components'

type Props = {
  tutors: Tutor[]
}

const TutorList = (props: Props) => {
  const { tutors } = props

  return (
    <Wrapper>
      {tutors.map(tutor => (
        <TutorCard key={tutor._id} tutor={tutor} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`

export default TutorList
