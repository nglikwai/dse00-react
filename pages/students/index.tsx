import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import CaseCard from 'src/components/CaseCard'
import PageWrapper from 'src/components/global/PageWrapper'
import BasicSearch from 'src/components/Search/BasicSearch'
import { CaseUnit } from 'src/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

type Props = {
  cases: CaseUnit[]
}

const Cases: NextPage<Props> = (props: Props) => {
  const router = useRouter()

  const { query } = router

  const { cases } = props

  const { t } = useTranslation()

  const hasMore = true

  const [data, setData] = useState(cases)

  const fetchMoreData = () => {
    setTimeout(() => {
      setData(data.concat(cases))
    }, 500)
  }

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper>
        <ContentWrapper>
          <SearchWrpper>
            <BasicSearch />
          </SearchWrpper>

          <div>
            <span>{t('components.search.basicSearch.place')}: </span>
            <span>{query.place ?? ''}</span>
            <span>{t('components.search.basicSearch.subject')}: </span>
            <span>{query.subject ?? ''}</span>
          </div>
          <CaseWrapper>
            {data.map((caseUnit, index) => (
              <CaseCard key={(caseUnit.name, index)} caseUnit={caseUnit} />
            ))}
          </CaseWrapper>
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <></>
          </InfiniteScroll>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
`

const CaseWrapper = styled.div`
  width: 100%;
  ${down('tablet')} {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px 16px;
  }
  ${down('mobile')} {
    grid-template-columns: auto;
  }
`

const SearchWrpper = styled.div`
  padding: 80px 0;
  position: sticky;
  top: -40px;
`

export async function getServerSideProps() {
  const res = await fetch(`https://www.dse00.com/tutor/case`)

  const cases = await res.json()

  return { props: { cases } }
}

export default Cases
