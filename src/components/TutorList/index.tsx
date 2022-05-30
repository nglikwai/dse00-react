import React from 'react'
import TutorCard from 'src/components/TutorCard'
import { Tutor } from 'src/types'
import { down } from 'styled-breakpoints'
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
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 16px;
  ${down('laptop')} {
    grid-template-columns: auto auto auto auto;
  }
  ${down('tablet')} {
    grid-template-columns: auto auto;
  }
  ${down('mobile')} {
    grid-template-columns: auto;
  }
`

export default TutorList
