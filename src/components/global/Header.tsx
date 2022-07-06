import Darkmode from 'public/static/images/icon-darkmode.svg'
import React from 'react'
import { zIndex } from 'src/constants/zIndex'
import styled from 'styled-components'
type Props = {
  darkmode: boolean
  setDarkmode: (darkmode: boolean) => void
}

const Header = ({ darkmode, setDarkmode }: Props) => {
  return (
    <OuterWrapper>
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

const OuterWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.9;
  z-index: ${zIndex.header};
`

const Wrapper = styled.div`
  color: #fff;
  padding: 6px 10px;
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
