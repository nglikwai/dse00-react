import Link from 'next/link'
import HeartIconOutline from 'public/static/images/icon-heart-outline.svg'
import React from 'react'
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
      <Link href='/tutor/1'>
        <Avatar
          src='static/images/default_avatar.png'
          alt='Avatar of the tutor'
        />
      </Link>

      <Name>{tutor.name}</Name>

      <Description>{tutor.intro}</Description>
      <Name>{tutor.teachingSubjects}</Name>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &:hover {
    box-shadow: 0 0 12px #eee;
  }
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0 22px;
  cursor: pointer;
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

export default TutorCard
