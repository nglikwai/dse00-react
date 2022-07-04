import DownArrow from 'public/static/images/icon-arrow-down.svg'
import React, { Children, useState } from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const ToggleToDisplay = (props: Props) => {
  const { children } = props

  const [visible, setVisible] = useState(false)

  return (
    <Wrapper>
      <ToggleButton onClick={() => setVisible(!visible)}>
        <ArrowWrapper visible={visible}>
          <DownArrow fill='#999' />
        </ArrowWrapper>
      </ToggleButton>
      <DetailToggle
        visible={visible}
        height={`${Children.toArray(children).length * 31}px`}
      >
        {children}
      </DetailToggle>
    </Wrapper>
  )
}

export default ToggleToDisplay

const DetailToggle = styled(props => <div {...props} />)`
  height: ${props =>
    props.visible ? (props.height ? props.height : '2rem') : '0'};
  transition: height 0.4s ease-in-out;
  overflow: hidden;
  > :not(:last-child) {
    margin-bottom: 12px;
  }
`

const ToggleButton = styled.button`
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;
  width: 100%;
`

const Wrapper = styled(props => <div {...props} />)`
  width: 100%;
`

const ArrowWrapper = styled(props => <div {...props} />)`
  transform: rotate(${props => (props.visible ? '180' : '0')}deg);
  transition: 0.4s;
`
