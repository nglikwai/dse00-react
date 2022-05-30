import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'src/components/global/PageWrapper'
import BasicSearch from 'src/components/Search/BasicSearch'
import TutorList from 'src/components/TutorList'
import { Tutor } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

const TUTOR_MAX = 10

type Props = {
  recommendations: Tutor[]
}

const Home: NextPage<Props> = (props: Props) => {
  const { recommendations = [] } = props

  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Title>{t('components.search.basicSearch.find_tutor')}</Title>

          <UpperWrapper>
            <Header>
              <BasicSearch />
            </Header>
          </UpperWrapper>

          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.popular')}
            </SectionTitle>
            <TutorList tutors={recommendations.slice(0, TUTOR_MAX)} />
          </Section>

          <Section>
            <SectionTitle>
              {t('components.tutorRecommendation.economy')}
            </SectionTitle>
            <TutorList tutors={recommendations.slice(0, TUTOR_MAX)} />
          </Section>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const Title = styled.h2`
  font-size: 20px;
  margin: 20px;
  text-align: center;
`

const UpperWrapper = styled.div`
  &:hover {
    opacity: 1;
  }
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  display: flex;
  justify-content: center;
  opacity: 0.9;
  transition: 0.4s;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${down('tablet')} {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
`

const Section = styled.div`
  padding: 20px 0;
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`

export async function getServerSideProps() {
  const res = await fetch(`https://www.dse00.com/tutor`)

  const recommendations = await res.json()

  return { props: { recommendations } }
}

export default Home
