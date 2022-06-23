import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import TutorCard from 'src/components/TutorCard'
import { Tutor } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

type Props = {
  tutors: Tutor[]
}

const TutorList = (props: Props) => {
  const { tutors } = props

  const hasMore = true

  const [data, setData] = useState(tutors)

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(data.concat(tutors))
    }, 500)
  }

  return (
    <Wrapper>
      {data.map(tutor => (
        <TutorCard key={tutor._id} tutor={tutor} />
      ))}

      <InfiniteScroll
        dataLength={data.length}
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
