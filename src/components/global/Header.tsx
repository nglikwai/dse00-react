import Link from 'next/link'
import Darkmode from 'public/static/images/icon-darkmode.svg'
import Home from 'public/static/images/icon-home.svg'
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
        <LeftWrapper>
          <Link href='/'>
            <Home fill='white' />
          </Link>
        </LeftWrapper>
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
  background: ${({ theme }) => theme.palette.mainTheme};
  box-shadow: 0 0 4px #bbb;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  position: sticky;
  top: 0;
  opacity: 0.95;
  z-index: ${zIndex.header};
`

const Wrapper = styled.div`
  color: #fff;
  padding: 12px 10px;
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
`

const DarkmodeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export default Header
