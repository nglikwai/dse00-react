import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import CutoffCard from 'src/components/CutoffCard'
import CutoffSelector from 'src/components/CutoffSelector'
import PageWrapper from 'src/components/global/PageWrapper'
import { cutoffCategory } from 'src/constants'
import PATHNAME from 'src/constants/pathname'
import { fetchCutoffsSucceed } from 'src/redux/cutoff'
import { Cutoff, State } from 'src/types'
type Props = {
  cutoffs: Cutoff[]
}

const MainPost: NextPage<Props> = ({ cutoffs }: Props) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const { result } = useSelector((state: State) => state.cutoff)

  useEffect(() => {
    dispatch(fetchCutoffsSucceed({ cutoffs }))
  }, [cutoffs, dispatch])

  const productName = `${t('common.product_name')}`

  const seoConfig = {
    title: productName,
    openGraph: {
      title: productName,
      url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
      images: [
        {
          url: `/apple-touch-icon.png`,
        },
      ],
      description: productName,
      type: 'website',
    },
  }

  const [category, setCategory] = useState(cutoffCategory[0])

  return (
    <>
      <NextSeo {...seoConfig} />

      <PageWrapper>
        <CutoffSelector setCategory={setCategory} />
        {result
          .filter(subject => subject.category === category)
          .map(cutoff => (
            <CutoffCard key={cutoff.title} cutoff={cutoff} />
          ))}
      </PageWrapper>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${PATHNAME.WEB_LINK}/cutoffs`)

  const cutoffs = await res.json()

  return { props: cutoffs }
}

export default MainPost
