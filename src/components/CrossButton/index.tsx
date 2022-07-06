import React from 'react'
import styled from 'styled-components'

const CrossButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Wrapper onClick={onClick} show={process.env.NODE_ENV === 'development'}>
      X
    </Wrapper>
  )
}

export default CrossButton

const Wrapper = styled(props => <button {...props} />)`
  &:hover {
    opacity: 1;
  }
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  color: #cc0000;
  font-size: 20px;
  opacity: 0.5;
  transition: 0.5s;
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`
