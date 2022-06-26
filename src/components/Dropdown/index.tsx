import { Switch } from '@mui/material'
import Link from 'next/link'
import IconAccount from 'public/static/images/icon-account.svg'
import IconMenu from 'public/static/images/icon-menu.svg'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import PATHNAME from 'src/constants/pathname'
import { StatusState } from 'src/redux/page/types'
import { changeIsTutor } from 'src/redux/user'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

const Dropdown = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const { isTutor } = useSelector((state: StatusState) => state.user)

  const ref = useRef<HTMLDivElement>(null)

  const onClickHandler = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handler = (event: any) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('click', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  return (
    <Wrapper>
      <ButtonWrapper onClick={onClickHandler}>
        <IconMenu fill='white' />
        <IconAccount fill='white' />
      </ButtonWrapper>
      {open && (
        <Menu ref={ref}>
          <TabletOnlyItem>
            <Link href={PATHNAME.STUDENTS}>
              <MenuItem>{t('nav.find_student')}</MenuItem>
            </Link>
            <Link href='/case/new'>
              <MenuItem>{t('nav.create_case')}</MenuItem>
            </Link>
          </TabletOnlyItem>
          <MenuItem>
            導師模式
            <Switch
              checked={isTutor}
              onChange={() => dispatch(changeIsTutor())}
            />
          </MenuItem>
        </Menu>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const ButtonWrapper = styled.div`
  &:hover {
    box-shadow: 0 0px 20px white;
  }
  cursor: pointer;
  border: 1.5px solid white;
  border-radius: 3rem;
  padding: 8px 12px;
  transition: 0.5s;
  width: 50px;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.div`
  position: absolute;
  padding: 0 12px;
  border-radius: 1rem;
  top: 60px;
  z-index: 10;
`

const MenuItem = styled.div`
  &:hover {
    background-color: #efefef;
  }
  background-color: white;
  color: #656565;
  padding: 8px 20px;
  margin: 8px 0;
  box-shadow: 0 4px 4px #eee;
  border-radius: 1.5rem;
  transition: 0.4s;
  cursor: pointer;
`

const TabletOnlyItem = styled.div`
  ${up('tablet')} {
    display: none;
  }
`

export default Dropdown
