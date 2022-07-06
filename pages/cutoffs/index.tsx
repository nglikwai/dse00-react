import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CutoffCard from 'src/components/CutoffCard'
import CutoffSelector from 'src/components/CutoffSelector'
import Footer from 'src/components/global/Footer'
import { cutoffCategory } from 'src/constants'
import PATHNAME from 'src/constants/pathname'
import { Cutoff } from 'src/types'
type Props = {
  cutoffs: Cutoff[]
}

const MainPost: NextPage<Props> = ({ cutoffs = [] }: Props) => {
  const { t } = useTranslation()

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

      <CutoffSelector setCategory={setCategory} />
      {cutoffs
        .filter(subject => subject.category === category)
        .map(cutoff => (
          <CutoffCard key={cutoff.title} cutoff={cutoff} />
        ))}
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${PATHNAME.WEB_LINK}/cutoffs`)

  const cutoffs = await res.json()

  return { props: cutoffs }
}

export default MainPost
