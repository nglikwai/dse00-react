import Link from 'next/link'
import IconBook from 'public/static/images/icon-book.svg'
import IconCoin from 'public/static/images/icon-coin.svg'
import IconGender from 'public/static/images/icon-gender.svg'
import IconLocation from 'public/static/images/icon-location.svg'
import React from 'react'
import { CaseUnit } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

type Props = {
  caseUnit: CaseUnit
}

const ResultCard = (props: Props) => {
  const { caseUnit } = props

  return (
    <Link href={`/students/${caseUnit._id}`}>
      <CaseWrapper>
        <Item>
          <Avator />
        </Item>
        <Item>
          <IconBook fill='#d4d4d4' /> {caseUnit.subject}
        </Item>
        <Item>
          <IconBook fill='#d4d4d4' />
          中五{' '}
        </Item>
        <Item>
          <IconGender fill='#d4d4d4' />
          {caseUnit.gender}
        </Item>
        <Item>
          <IconLocation fill='#d4d4d4' />
          {caseUnit.region}
        </Item>

        <Item>
          <IconCoin fill='#d4d4d4' />
          <b> ${caseUnit.price}</b>
        </Item>
      </CaseWrapper>
    </Link>
  )
}

const Avator = styled.div`
  border-radius: 50%;
  margin: 0 20px;
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/static/images/default_avatar.png');
  display: inline-block;
`

const Item = styled.div`
  font-size: 20px;
  width: 160px;

  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  align-items: center;
  ${down('tablet')} {
    margin: 5px;
    width: 70%;
    font-size: 16px;
  }
`

const CaseWrapper = styled.div`
  &:hover {
    box-shadow: 0 10px 10px #eee;
  }
  background-color: #fffbf1;
  box-shadow: 1px 2px 4px #ffecb2;
  display: flex;
  align-items: center;
  border-radius: 3rem;
  padding: 10px 0;
  margin: 28px 0;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: 0.4s;
  ${down('tablet')} {
    flex-direction: column;
    margin: 0;
  }
`

export default ResultCard
