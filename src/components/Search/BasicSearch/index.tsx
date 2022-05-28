import Link from 'next/link'
import SearchIcon from 'public/static/images/icon-magnify.svg'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'src/components/Select'
import PATHNAME from 'src/constants/pathname'
import styled from 'styled-components'

const BasicSearch = () => {
  const { t } = useTranslation()

  const [selectedPlace, setSelectedPlace] = useState('')

  const [selectedSubject, setSelectedSubject] = useState('')

  const handleOnPlaceSelect = useCallback((selected: string) => {
    setSelectedPlace(selected)
  }, [])

  const handleOnSubjectSelect = useCallback((selected: string) => {
    setSelectedSubject(selected)
  }, [])

  return (
    <Wrapper>
      <Row>
        <Select
          label={t('components.search.basicSearch.place')}
          options={[]}
          value={selectedPlace}
          onSelect={handleOnPlaceSelect}
        />

        <Select
          label={t('components.search.basicSearch.subject')}
          options={[]}
          value={selectedSubject}
          onSelect={handleOnSubjectSelect}
        />

        <Link href={PATHNAME.TUTORS}>
          <SearchButtonWrapper>
            <SearchIcon fill='white' />
          </SearchButtonWrapper>
        </Link>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 0;
  margin: 0 20px;
`

const Row = styled.div`
  display: flex;
  border: 1px solid #ccc;
  background: white;
  width: 440px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  padding: 4px 0;
  margin: 0 0 0 0;

  > *:not(:last-child) {
    margin-right: 24px;
  }
`

const SearchButtonWrapper = styled.span`
  background-color: #c00;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default BasicSearch
