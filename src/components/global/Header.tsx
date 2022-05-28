import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PATHNAME from 'src/constants/pathname'
import styled from 'styled-components'

const Header = () => {
  const { t } = useTranslation()

  return (
    <OuterWrapper>
      <Wrapper>
        <LeftWrapper>
          <StyledLink href={PATHNAME.HOME_PAGE}>
            <LogoWrapper>{t('common.product_name')}</LogoWrapper>
          </StyledLink>
        </LeftWrapper>
        <RightWrapper>
          <></>
        </RightWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.palette.mainTheme};
  box-shadow: 0 0 4px #bbb;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  padding: 0 10px;
`

const Wrapper = styled.div`
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.width};
`

const LeftWrapper = styled.div``

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LogoWrapper = styled.span`
  &:hover {
    text-shadow: 0 0 20px #fff;
  }
  transition: 0.4s;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  padding: 0 20px 0 0px;
`

const StyledLink = styled(Link)``

export default Header
