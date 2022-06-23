import React, { useCallback } from 'react'
import { down } from 'styled-breakpoints'
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
  margin-right: 12px;
  font-weight: bold;
  ${down('mobile')} {
    margin: 0 0 0 10px;
  }
`

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #fff;
  width: 100px;
  height: 46px;
  border: 1px solid #dedede;
  border-radius: 2rem;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  ${down('mobile')} {
    width: 30%;
  }
`

export default Select
