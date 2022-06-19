import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import type { NextPage } from 'next'
import Head from 'next/head'
import IconCalendar from 'public/static/images/icon-calendar.svg'
import IconClock from 'public/static/images/icon-clock.svg'
import IconGender from 'public/static/images/icon-gender.svg'
import IconLocation from 'public/static/images/icon-location.svg'
import * as R from 'ramda'
import React, { useState } from 'react'
import { DayPicker } from 'react-dates'
import { useTranslation } from 'react-i18next'
import ConfirmationForm from 'src/components/ConfirmationForm'
import PageWrapper from 'src/components/global/PageWrapper'
import GoogleMap from 'src/components/GoogleMap/index'
import { CaseUnit } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

const Cases: NextPage = () => {
  const { t } = useTranslation()

  const date = 'Fri May 20 2022 '

  const [name, setName] = useState('')

  const [location, setLocation] = useState('')

  const [subject, setSubject] = useState('')

  const [school, setSchool] = useState('')

  const [form, setForm] = useState(3)

  const [gender, setGender] = useState('')

  const [lesson, setLesson] = useState(1)

  const [hour, setHour] = useState(1.5)

  const [price, setPrice] = useState(160)

  const [building, setBuilding] = useState('')

  const caseUnit: CaseUnit = {
    _id: '123',
    name,
    subject,
    price,
    form,
    region: location,
    building,
    case: 123,
    hour,
    lession: lesson,
    createdAt: '22-05-2022',
    gender,
    isTutor: false,
  }

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Header>
            <ItemTitle>{t('nav.create_case')}</ItemTitle>
            <p>{location}</p>
          </Header>
          <LowerWrapper>
            <LeftBarWrapper>
              <Brief>
                <div>
                  <ItemTitle>
                    <span>
                      {name}
                      {t('newCase.your_case')}
                    </span>
                  </ItemTitle>
                  <p>
                    {[
                      `${form ? `中${form}` : '級別'}`,
                      `${subject || '科目'}`,
                      `${gender || '性別'}`,
                    ].join('，')}
                  </p>
                </div>
                <Avator />
              </Brief>
              <ItemsWrapper>
                <Item>
                  <IconCalendar fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.post_date')}</span>
                    <ItemText>{date}</ItemText>
                  </ItemInner>
                </Item>
                <Item>
                  <IconCalendar fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.name')}</span>
                    <Input
                      value={name}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setName(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconCalendar fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.school')}</span>
                    <Input
                      value={school}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setSchool(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconCalendar fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.form')}</span>
                    <Input
                      value={form}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setForm(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconCalendar fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.subject')}</span>
                    <Input
                      value={subject}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setSubject(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconGender fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.gender')}</span>
                    <Input
                      value={gender}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setGender(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconGender fill='#aaa' />
                  <ItemInner>
                    <span> {t('newCase.lesson')}</span>
                    <Input
                      value={lesson}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setLesson(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>

                <Item>
                  <IconClock fill='#aaa' />
                  <ItemInner>
                    <span> {t('newCase.hour')}</span>
                    <Input
                      value={hour}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setHour(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconGender fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.price')}</span>
                    <Input
                      value={price}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setPrice(e.target.value)
                      }
                      required
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconLocation fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.region')}</span>
                    <Input
                      value={location}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setLocation(e.target.value)
                      }
                    />
                  </ItemInner>
                </Item>
                <Item>
                  <IconLocation fill='#aaa' />
                  <ItemInner>
                    <span>{t('newCase.building')}</span>
                    <Input
                      value={building}
                      onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
                        setBuilding(e.target.value)
                      }
                    />
                  </ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>
                  {t('newCase.choose_date')}
                  <ItemText>2022年5月22日</ItemText>
                </ItemTitle>

                <DayPicker />
              </ItemsWrapper>
            </LeftBarWrapper>

            <RightBarWrapper>
              <ConfirmationForm caseUnit={caseUnit} />
            </RightBarWrapper>
          </LowerWrapper>
          <ItemsWrapper>
            <ItemTitle>{t('newCase.teach_location')}</ItemTitle>
            <p>
              {location}, {building}
            </p>
            <GoogleMap />
          </ItemsWrapper>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const Input = styled(props => <input {...R.omit(['withTopPadding'], props)} />)`
  &::placeholder {
    font-size: 20px;
  }
  padding: 12px 20px;
  width: 160px;
  height: ${props => (props.height ? props.height : '20px')};
  border-radius: 1rem;
  border: 1px solid #ccc;
  margin: 0 20px;
  color: #777;
`

const Header = styled.div`
  padding: 30px 0;
`

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
  padding: 0 10px;
`

const LowerWrapper = styled.div`
  display: flex;
  ${down('tablet')} {
    flex-direction: column-reverse;
  }
`

const LeftBarWrapper = styled.div`
  width: 800px;
  padding: 10px 60px 0 0;
  ${down('tablet')} {
    width: 100%;
  }
`

const RightBarWrapper = styled.div`
  ${down('tablet')} {
    display: flex;
    justify-content: center;
  }
`

const Avator = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/static/images/default_avatar.png');
  display: inline-block;
`

const Brief = styled.div`
  display: flex;
  padding: 0 0 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`

const ItemsWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

const ItemTitle = styled.h2`
  padding: 20px 0;
  font-weight: bold;
`

const ItemInner = styled.div`
  padding: 0 12px;
  font-size: 16px;
`

const ItemText = styled.span`
  display: block;
  color: #bbb;
  font-size: 14px;
`

export default Cases
