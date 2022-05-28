import React, { useCallback } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  options: string[]
  value: string
  onSelect?: (selected: string) => void
}

const Select = (props: Props) => {
  const { label, options, value, onSelect } = props

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect && onSelect(e.target.value)
    },
    [onSelect]
  )

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect value={value} onChange={handleOnChange}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
    </div>
  )
}

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #fff;
  width: 100px;
  height: 46px;
  border: none;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
`

export default Select
