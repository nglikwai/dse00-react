import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import IconBook from 'public/static/images/icon-book.svg'
import IconCert from 'public/static/images/icon-cert.svg'
import IconCheck from 'public/static/images/icon-check.svg'
import IconLocation from 'public/static/images/icon-location.svg'
import IconShield from 'public/static/images/icon-shield.svg'
import * as R from 'ramda'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Comment from 'src/components/Comment'
import CommentBox from 'src/components/CommentBox'
import PageWrapper from 'src/components/global/PageWrapper'
import { StatusState } from 'src/redux/page/types'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

const Cases: NextPage = () => {
  const { t } = useTranslation()

  const [isCommented, setCommented] = useState(false)

  const { isLogin } = useSelector((state: StatusState) => state.user)

  const onCommented = () => {
    setCommented(true)
  }

  return (
    <div>
      <Head>
        <title>{t('common.product_name')}</title>
        <meta name='description' content='find you DSE tutor' />
      </Head>
      <PageWrapper>
        <ContentWrapper>
          <Wrapper>
            <LeftBarWrapper>
              <Avator />
              <ItemTitle>
                <IconShield fill='#444' />
                <ItemInner>{t('profile.verified')}</ItemInner>
              </ItemTitle>
              <Item>
                <IconCheck fill='#444' />
                <ItemInner>{t('profile.phone')}</ItemInner>
              </Item>
              <Item>
                <IconCheck fill='#444' />
                <ItemInner>{t('profile.cert')}</ItemInner>
              </Item>
            </LeftBarWrapper>
            <RightBarWrapper>
              <Header>
                <ItemTitle>
                  {t('profile.hi')}，{t('profile.i_am')}陳加文
                  {t('profile.teacher')}
                  <ItemText>
                    {t('profile.from')} 05-05-2022 {t('profile.join')}
                  </ItemText>
                </ItemTitle>
                {isLogin && (
                  <Link href='/tutor/edit'>
                    <MoreButton>{t('profile.edit')}</MoreButton>
                  </Link>
                )}
              </Header>

              <Brief>
                <div>
                  <ItemTitle>{t('profile.about')}陳老師</ItemTitle>
                  <p>
                    I Søren Sarup (born 1975) lives in Aarhus, Fanø and Agger. I
                    am an independent Danish architect that works professionally
                    with planning and design of all building types, with a
                    passionated focus on vacation-homes, nature hotels and
                    Boutique hotels.
                  </p>
                </div>
              </Brief>
              <ItemsWrapper>
                <Item>
                  <IconLocation fill='#555' />
                  <ItemInner>{t('profile.live_in')}大埔</ItemInner>
                </Item>
                <Item>
                  <IconBook fill='#555' />
                  <ItemInner>{t('profile.teach')}化學、生物</ItemInner>
                </Item>
                <Item>
                  <IconCert fill='#555' />

                  <ItemInner>{t('profile.study_at')}香港中文大學</ItemInner>
                </Item>
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>{t('profile.note')}</ItemTitle>
                <Notes src='https://1.bp.blogspot.com/-sP6euyqs1pc/XUMAy04i4gI/AAAAAAAGpAM/MThDM11XjO8B3WoScwLaGsvnz_uVhaN-QCLcBGAs/s1600/StockSnap_TBJ9OPDGMK%2B%255B2%255D.jpg' />
                <Notes src='https://1.bp.blogspot.com/-sP6euyqs1pc/XUMAy04i4gI/AAAAAAAGpAM/MThDM11XjO8B3WoScwLaGsvnz_uVhaN-QCLcBGAs/s1600/StockSnap_TBJ9OPDGMK%2B%255B2%255D.jpg' />
              </ItemsWrapper>
              <ItemsWrapper>
                <ItemTitle>{t('profile.comment')}</ItemTitle>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                {isLogin && !isCommented && (
                  <CommentBox onCommented={onCommented} />
                )}

                <MoreButton>{t('profile.more_comment')}</MoreButton>
              </ItemsWrapper>
            </RightBarWrapper>
          </Wrapper>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}

const Header = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${down('tablet')} {
    flex-direction: column;
    width: 100%;
  }
`

const LeftBarWrapper = styled.div`
  width: 300px;
  height: 400px;
  padding: 30px;
  margin: 60px;
  border: 1px #ddd solid;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${down('tablet')} {
    justify-content: center;
    width: 80%;
  }
`

const RightBarWrapper = styled.div`
  padding: 0 20px;
  margin: 20px 0;
  width: 70%;
  ${down('tablet')} {
    width: 100%;
  }
`

const Avator = styled(props => <div {...R.omit(['withTopPadding'], props)} />)`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.width ? props.height : '160px')};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/user.png');
  display: inline-block;
`

const Brief = styled.div`
  display: flex;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #ccc;
`

const ItemsWrapper = styled.div`
  padding: 36px 0;
  border-bottom: 1px solid #ccc;
`

const Notes = styled.img`
  width: 300px;
  border-radius: 1rem;
  margin: 0 20px 20px 0;
  ${down('tablet')} {
    width: 90%;
  }
`

const Item = styled.div`
  display: flex;
  padding: 10px 0;
`

const ItemTitle = styled.h4`
  padding: 20px 0;
  font-weight: bold;
`

const ItemInner = styled.span`
  padding: 0 12px;
`

const ItemText = styled.span`
  display: block;
  color: #bbb;
  font-size: 14px;
`

const MoreButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 50px;
  margin: 0 0 50px 0;
  color: #444;
  border: 1px solid #444;
`

export default Cases
