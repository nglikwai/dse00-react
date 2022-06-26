import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import TutorCard from 'src/components/TutorCard'
import { Tutor } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

type Props = {
  tutors: Tutor[]
  hasMore: boolean
}

const TutorList = (props: Props) => {
  const { tutors, hasMore } = props

  const fetchMoreData = () => {
    setTimeout(() => {
      tutors.concat(tutors)
    }, 500)
  }

  return (
    <Wrapper>
      {tutors.map(tutor => (
        <TutorCard key={tutor._id} tutor={tutor} />
      ))}

      <InfiniteScroll
        dataLength={tutors.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <></>
      </InfiniteScroll>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
  ${down('laptop')} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${down('tablet')} {
    grid-template-columns: 1fr 1fr;
  }
  ${down('mobile')} {
    grid-template-columns: 1fr;
  }
`

export default TutorList
