import Darkmode from 'public/static/images/icon-darkmode.svg'
import React from 'react'
import { useSelector } from 'react-redux'
import { zIndex } from 'src/constants/zIndex'
import { userSelector } from 'src/redux/user'
import styled from 'styled-components'
type Props = {
  darkmode: boolean
  setDarkmode: (darkmode: boolean) => void
}

const Header = ({ darkmode, setDarkmode }: Props) => {
  const { isdown } = useSelector(userSelector)

  return (
    <OuterWrapper isdown={isdown}>
      <Wrapper>
        <LeftWrapper />
        <RightWrapper>
          <DarkmodeButton onClick={() => setDarkmode(!darkmode)}>
            <Darkmode fill='#fff' />
          </DarkmodeButton>
        </RightWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled(props => <div {...props} />)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transition: 0.5s;
  position: sticky;
  top: 0;
  right: 0;
  opacity: 0.9;
  z-index: ${zIndex.header};
  opacity: ${props => (props.isdown ? '0.3' : '1')};
`

const Wrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width};
`

const LeftWrapper = styled.div``

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${({ theme }) => theme.palette.mainTheme};
  border-radius: 50%;
  padding: 5px;
`

const DarkmodeButton = styled.button`
  &:hover {
    box-shadow: 0 0px 40px #fff;
    opacity: 1;
  }
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: 0.3s;
  border-radius: 50%;
`

export default Header
