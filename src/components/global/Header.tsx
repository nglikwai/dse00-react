import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Dropdown from 'src/components/Dropdown'
import PATHNAME from 'src/constants/pathname'
import { StatusState } from 'src/redux/page/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

const Header = () => {
  const { isTutor } = useSelector((state: StatusState) => state.user)

  const { t } = useTranslation()

  return (
    <OuterWrapper>
      <Wrapper>
        <LeftWrapper>
          <StyledLink href={PATHNAME.HOME_PAGE}>
            <LogoWrapper>{t('common.product_name')}</LogoWrapper>
          </StyledLink>
          {isTutor && (
            <StyledLink href={PATHNAME.TUTORS}>
              <LinkWrapper>{t('nav.find_student')}</LinkWrapper>
            </StyledLink>
          )}
          {!isTutor && (
            <>
              <StyledLink href={PATHNAME.STUDENTS}>
                <LinkWrapper>{t('nav.find_tutor')}</LinkWrapper>
              </StyledLink>
              <StyledLink href='/case/new'>
                <LinkWrapper>{t('nav.create_case')}</LinkWrapper>
              </StyledLink>
            </>
          )}
        </LeftWrapper>
        <RightWrapper>
          <Dropdown />
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
  padding: 0 10px;
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

const LinkWrapper = styled.span`
  &:hover {
    text-shadow: 0 0 20px #fff;
  }
  transition: 0.4s;
  font-size: 16px;
  cursor: pointer;
  padding: 0 20px;

  ${down('tablet')} {
    display: none;
  }
`

const StyledLink = styled(Link)``

export default Header
