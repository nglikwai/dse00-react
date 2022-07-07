import Link from 'next/link'
import User from 'public/static/images/icon-account.svg'
import Jupas from 'public/static/images/icon-graduation.svg'
import Blogger from 'public/static/images/icon-post.svg'
import Cutoff from 'public/static/images/icon-school.svg'
import React from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from 'src/redux/user'
import styled from 'styled-components'

import HomeButton from '../HomeButton'

const Footer = ({ content }: { content?: JSX.Element | null }) => {
  const { isdown } = useSelector(userSelector)

  return (
    <Wrapper isdown={isdown}>
      <FooterWrapper>
        <StyledLink href='https://dse00.blogspot.com/'>
          <Item>
            <Blogger fill='white' />
            <span>Blog</span>
          </Item>
        </StyledLink>
        <StyledLink href='/cutoffs'>
          <Item>
            <Cutoff fill='white' />
            CutOff
          </Item>
        </StyledLink>

        <Item>{content || <HomeButton />}</Item>
        <StyledLink href='/jupas'>
          <Item>
            <Jupas fill='white' />
            JUPAS
          </Item>
        </StyledLink>
        <StyledLink href='/user/login'>
          <Item>
            <User fill='white' />
            登入
          </Item>
        </StyledLink>
      </FooterWrapper>
    </Wrapper>
  )
}

const StyledLink = styled(Link)`
  cursor: pointer;
`

const Wrapper = styled(props => <div {...props} />)`
  max-width: 100%;
  background-color: ${({ theme }) => theme.palette.mainTheme};
  height: 72px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.93;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  transition: 1s;
  transform: translateY(${props => (props.isdown ? '30px' : '0')});
`

const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 12px;
  height: 100%;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.3s;
  height: 70%;
`

export default Footer
