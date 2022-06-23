import React from 'react'
import styled from 'styled-components'

type Props = {
  selectedPrice: number
  setSelectedPrice: (value: number) => void
}

const PriceSelector = (props: Props) => {
  const { selectedPrice, setSelectedPrice } = props

  return (
    <Wrapper>
      <label style={{ fontWeight: 'bold' }}>學費</label>

      <Range
        type='range'
        className='range'
        min={50}
        max={300}
        value={selectedPrice}
        onChange={e => setSelectedPrice(parseInt(e.target.value))}
      />
      <span className='price'>(${selectedPrice}以內)</span>
    </Wrapper>
  )
}

export default PriceSelector

const Range = styled.input`
  height: 10px;
  width: 100px;
  -webkit-appearance: none;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
`

const Wrapper = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
