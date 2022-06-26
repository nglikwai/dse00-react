import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as R from 'ramda'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import PageWrapper from 'src/components/global/PageWrapper'
import SearchBar from 'src/components/SearchBar'
import TutorList from 'src/components/TutorList'
import { Tutor } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

type StatusState = {
  tutor: { result: Tutor[]; filteredResult: Tutor[] }
}

const Search: NextPage = () => {
  const router = useRouter()

  const { result, filteredResult } = useSelector(
    (state: StatusState) => state.tutor
  )

  const { query } = router

  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <Float>
            <SearchBar />
          </Float>

          <Section>
            <SectionTitle>
              {t('components.search.basicSearch.place')} : {query.place ?? ''}{' '}
              {t('components.search.basicSearch.subject')}:{query.subject ?? ''}
            </SectionTitle>
            {!R.isEmpty(result) && (
              <TutorList
                hasMore={false}
                tutors={R.isEmpty(filteredResult) ? result : filteredResult}
              />
            )}
          </Section>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const Float = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  margin: 0 0 10px 0;
`

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
`

const Section = styled.div`
  padding: 20px 0;
  width: ${({ theme }) => theme.width};
  ${down('tablet')} {
    width: 100%;
  }
`

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`

export default Search

// export async function getServerSideProps() {
//   const res = await fetch(`https://www.dse00.com/tutor`)

//   const result = await res.json()

//   return { props: { result } }
// }
