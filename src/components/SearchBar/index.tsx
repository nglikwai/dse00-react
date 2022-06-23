import IconMagnify from 'public/static/images/icon-magnify.svg'
import IconMenu from 'public/static/images/icon-menu.svg'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'src/components/Select'
import { places, subjects } from 'src/constants/commonList'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

import GenderSelector from '../GenderSelector'
import PriceSelector from '../PriceSelector'

const SearchBar = () => {
  const { t } = useTranslation()

  const [selectedPlace, setSelectedPlace] = useState(places[0])

  const [selectedSubject, setSelectedSubject] = useState(subjects[0])

  const [selectedGenderIndex, setSelectedGenderIndex] = useState(0)

  const [selectedPrice, setSelectedPrice] = useState(180)

  const [filterVisible, setFilterVisible] = useState(false)

  const handleOnPlaceSelect = useCallback((selected: string) => {
    setSelectedPlace(selected)
  }, [])

  const handleOnSubjectSelect = useCallback((selected: string) => {
    setSelectedSubject(selected)
  }, [])

  return (
    <Wrapper>
      <SearchWrapper>
        <Select
          label={t('components.search.basicSearch.place')}
          options={places}
          value={selectedPlace}
          onSelect={handleOnPlaceSelect}
        />

        <Select
          label={t('components.search.basicSearch.subject')}
          options={subjects}
          value={selectedSubject}
          onSelect={handleOnSubjectSelect}
        />
        <TabletOnly>
          <PriceSelector
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </TabletOnly>

        <TabletOnly>
          <GenderSelector
            selectedGenderIndex={selectedGenderIndex}
            setSelectedGenderIndex={setSelectedGenderIndex}
          />
        </TabletOnly>

        <FilterButton onClick={() => setFilterVisible(!filterVisible)}>
          <IconMenu fill='#bbb' />
        </FilterButton>

        <Button>
          <IconMagnify fill='white' />
        </Button>
      </SearchWrapper>
      {filterVisible && (
        <FilterWrapper>
          <PriceSelector
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
          <GenderSelector
            selectedGenderIndex={selectedGenderIndex}
            setSelectedGenderIndex={setSelectedGenderIndex}
          />
        </FilterWrapper>
      )}
    </Wrapper>
  )
}

const SearchWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Wrapper = styled.div`
  padding: 0 10px;
`

const TabletOnly = styled.div`
  ${down('tablet')} {
    display: none;
  }
`

const Button = styled.button`
  background-color: ${props => (props.color ? props.color : '#cc0000')};
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const FilterButton = styled.button`
  &:hover {
    box-shadow: 0 0 8px #ddd;
  }
  cursor: pointer;
  padding: 4px;
  background-color: transparent;
  color: #ccc;
  border: 1px #bbb solid;
  font-size: 14px;
  border-radius: 8px;
  transition: 0.7s;

  ${up('tablet')} {
    display: none;
  }
`

const FilterWrapper = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
  > * {
    padding: 20px 0;
  }
`

export default SearchBar
