import React from 'react'
import styled from 'styled-components'

type Props = {
  checked?: boolean
  onChange?: () => void
  size?: 's' | 'm' | 'l' | 'xl'
}

const Switch = ({ checked, onChange, size = 'm' }: Props) => {
  let switchRatio

  switch (size) {
    case 's':
      switchRatio = -6

      break
    case 'l':
      switchRatio = 6

      break
    case 'xl':
      switchRatio = 12

      break
    default:
      switchRatio = 1

      break
  }

  return (
    <SwitchWrapper switchRatio={switchRatio}>
      <SwitchInput checked={checked} onChange={onChange} type='checkbox' />
      <Slider switchRatio={switchRatio} />
    </SwitchWrapper>
  )
}

export default Switch

const SwitchWrapper = styled(props => <label {...props} />)`
  position: relative;
  display: inline-block;
  width: ${props => props.switchRatio + 54}px;
  height: ${props => props.switchRatio + 28}px;
  outline: none;
`

const SwitchInput = styled(props => <input {...props} />)`
  position: absolute;
  top: -99999px;
  left: -99999px;
  &:checked + div {
    background-color: #2196f3;
    &::before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
  &:focus + div {
    box-shadow: 0 0 1px #2196f3;
  }
`

const Slider = styled(props => <div {...props} />)`
  &::before {
    position: absolute;
    content: '';
    height: ${props => props.switchRatio + 20}px;
    width: ${props => props.switchRatio + 20}px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
`
