import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterWrapper>
      <ItemWrapper>
        <Item>© 2022 {t('common.product_name')}</Item>
        <Item>{t('footer.privacy')}</Item>
        <Item>{t('footer.term')}</Item>
      </ItemWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.palette.backgroundColor};
  padding: 16px 0;
`

const ItemWrapper = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-arround;
  align-items: center;
`

const Item = styled.div`
  margin: 0 12px;
  color: #888;
`

export default Footer
