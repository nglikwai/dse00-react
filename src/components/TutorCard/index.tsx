import Link from 'next/link'
import HeartIconOutline from 'public/static/images/icon-heart-outline.svg'
import React from 'react'
import ToggleToDisplay from 'src/components/ToggleToDisplay'
import { Tutor } from 'src/types'
import styled from 'styled-components'
type Props = {
  tutor: Tutor
}

const TutorCard = (props: Props) => {
  const { tutor } = props

  return (
    <Wrapper>
      <PopularTag>
        <HeartIconOutline fill='#eebbbb' />
      </PopularTag>
      <Link href={`/tutor/${tutor._id}`}>
        <Avatar
          src='static/images/default_avatar.png'
          alt='Avatar of the tutor'
        />
      </Link>

      <Name>{tutor.name}</Name>

      <Description>{tutor.intro}</Description>
      <Detail>{tutor.teachingSubjects.join(' ')} </Detail>
      <ToggleToDisplay>
        <div>
          <SubTitle>價錢</SubTitle>
          <span>${tutor.teachingSubjectsPrice}/小時</span>
        </div>
        <div style={{ width: '110%' }}>
          <SubTitle>地點</SubTitle>
          <span>{tutor.location.join(' ')}</span>
        </div>
        <div>
          <SubTitle>性別</SubTitle>
          <span>{tutor.gender}</span>
        </div>
        <div>
          <SubTitle>畢業於</SubTitle>
          <span>{tutor.school.toUpperCase()}</span>
        </div>
      </ToggleToDisplay>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &:hover {
    box-shadow: 0 0 12px #eee;
  }
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0 22px 8px 22px;
  transition: 0.5s;
`

const PopularTag = styled.span`
  &:hover {
    text-shadow: 0 0 12px #cc0000;
  }
  transition: 0.4s;
  width: 105%;
  height: 20px;
  display: flex;
  flex-direction: row-reverse;
`

const Avatar = styled.img`
  width: 100%;
  cursor: pointer;
`

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`

const SubTitle = styled.span`
  font-weight: bold;
  margin-right: 8px;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #aaa;
`

const Detail = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0 0 0;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
`

export default TutorCard
