import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConfirmPopUp from 'src/components/ConfirmPopUp'
import { CaseUnit } from 'src/types'
import styled from 'styled-components'

type Props = {
  caseUnit: CaseUnit
  confirmButtonText?: string
  confirmedButtonText?: string
}

const ConfirmationForm = (props: Props) => {
  const { t } = useTranslation()

  const [confirmPopUpVisible, setConfirmPopUpVisible] = useState(false)

  const [reserved, setReserved] = useState(false)

  const { caseUnit, confirmButtonText, confirmedButtonText } = props

  return (
    <Wrapper>
      <h4>
        ${caseUnit.price} / {t('newCase.hours')}
      </h4>
      <Input placeholder={t('newCase.contact')} />
      <ReserveButton
        color={reserved ? 'green' : '#cc0000'}
        onClick={() => setConfirmPopUpVisible(!confirmPopUpVisible)}
        disabled={reserved}
      >
        {reserved ? confirmedButtonText : confirmButtonText}
      </ReserveButton>
      <ItemsWrapper>
        <Item>
          <span>{t('newCase.hour_per_lesson')}</span>
          <span>{caseUnit.hour}</span>
        </Item>
        <Item>
          <span>{t('newCase.lesson_per_month')}</span>
          <span>{caseUnit.lession * 4} </span>
        </Item>
        <Item>
          <span>{t('newCase.expected_monthly_income')}</span>
          <span>$ {caseUnit.price * caseUnit.lession * caseUnit.hour * 4}</span>
        </Item>
      </ItemsWrapper>
      <Item>
        <span>{t('newCase.start_day')}</span>
        <span>2022年5月22日</span>
      </Item>
      <Item>
        <span>{t('newCase.location')}</span>
        <span>{t('newCase.location_povided')}</span>
      </Item>
      {confirmPopUpVisible && (
        <ModalWrapper>
          <ConfirmPopUp
            caseUnit={caseUnit}
            onConfirmClick={setConfirmPopUpVisible}
            setReserved={setReserved}
          />
        </ModalWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 360px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 8px #ccc;
`

const Input = styled.input`
  ::-webkit-input-placeholder {
    color: #bbb;
  }
  border-radius: 10px;
  border: 1px solid #bbb;
  padding: 10px 10px;
  margin: 10px 0;
`

const ReserveButton = styled.button`
  cursor: pointer;
  background-color: ${props => (props.color ? props.color : '#cc0000')};
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  margin: 10px 0;
  color: white;
  transition: 1s;
`

const ItemsWrapper = styled.div`
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default ConfirmationForm
