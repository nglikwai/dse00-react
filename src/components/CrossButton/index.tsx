import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from 'src/redux/user'
import styled from 'styled-components'

const CrossButton = ({ onClick }: { onClick: () => void }) => {
  const { user } = useSelector(userSelector)

  return (
    <Wrapper onClick={onClick} show={user?.role === 'admin'}>
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
