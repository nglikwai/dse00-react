import IconGender from 'public/static/images/icon-gender.svg'
import React from 'react'
import styled from 'styled-components'

type Props = {
  selectedGenderIndex: number
  setSelectedGenderIndex: (value: number) => void
}

const GenderSelector = (props: Props) => {
  const { selectedGenderIndex, setSelectedGenderIndex } = props

  return (
    <Button
      onClick={() => setSelectedGenderIndex((selectedGenderIndex + 1) % 3)}
      color={
        selectedGenderIndex === 0
          ? '#75b87d'
          : selectedGenderIndex === 1
          ? '#84bcdd'
          : '#f48f8f'
      }
    >
      <IconGender fill='white' />
      <span style={{ padding: '0 0 0 10px' }}>
        {selectedGenderIndex === 0
          ? '所有性別'
          : selectedGenderIndex === 1
          ? '男性'
          : '女性'}
      </span>
    </Button>
  )
}

export default GenderSelector

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
