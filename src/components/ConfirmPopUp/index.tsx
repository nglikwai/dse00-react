import * as R from 'ramda'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { CaseUnit } from 'src/types'
import styled from 'styled-components'

type Props = {
  caseUnit: CaseUnit
  onConfirmClick: (value: React.SetStateAction<boolean>) => void
  setReserved: (value: React.SetStateAction<boolean>) => void
}

const ConfirmForm = (props: Props) => {
  const { t } = useTranslation()

  const { caseUnit, onConfirmClick, setReserved } = props

  const onClickhandler = () => {
    onConfirmClick(false)
    setReserved(true)
  }

  return (
    <Wrapper>
      <Title>{`${caseUnit.case} : ${caseUnit.name}同學${caseUnit.subject}的補習個案`}</Title>
      <Item>{t('newCase.start_day_lastest')} ： 30-06-2022</Item>
      <Item>{t('newCase.per_week')}</Item>
      <Input placeholder='留言' />
      <SubmitButton onClick={onClickhandler}>
        {t('newCase.confirm')}
      </SubmitButton>
    </Wrapper>
  )
}

const Input = styled.input`
  ::placeholder {
    color: #bbb;
    font-size: 18px;
  }
  padding: 10px 20px;
  margin: 0 0 10px 0;
  width: 80%;
  border-radius: 1rem;
  border: 1px solid #ddd;
`

const SubmitButton = styled(props => (
  <button {...R.omit(['withTopPadding'], props)} />
))`
  cursor: pointer;
  padding: 10px 20px;
  width: 90%;
  border-radius: 1rem;
  border: 1px solid #ddd;
  background: ${props => (props.color ? props.color : '#cc0000')};
  color: ${props => (props.primary ? 'black' : 'white')};
`

const Item = styled.div`
  padding: 10px 0;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`

const Wrapper = styled.div`
  background: rgba(256, 256, 256, 0.9);
  width: 400px;
  height: 280px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: absolute;
  top: 200px;
`

export default ConfirmForm
