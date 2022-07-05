import Link from 'next/link'
import HomeIcon from 'public/static/images/icon-home.svg'
import React from 'react'

const HomeButton = () => {
  return (
    <>
      <Link href='/'>
        <HomeIcon fill='white' />
      </Link>
      Home
    </>
  )
}

export default HomeButton
