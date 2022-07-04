import 'swiper/css'

import React from 'react'
import { cutoffCategory } from 'src/constants'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

const CutoffSelector = ({
  setCategory,
}: {
  setCategory: (category: string) => void
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={swiper =>
            setCategory(cutoffCategory[swiper.activeIndex])
          }
          onSwiper={swiper => console.log(swiper)}
        >
          {cutoffCategory.map(sub => (
            <SwiperSlide key={sub}>
              <Subject>{sub}</Subject>
            </SwiperSlide>
          ))}
        </Swiper>
      </InnerWrapper>
      <Description>slide to change</Description>
    </Wrapper>
  )
}

export default CutoffSelector

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  padding-top: 20px;
  z-index: 0;
`

const InnerWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`

const Subject = styled.div`
  padding: 20px 20px;
  border-radius: 2rem;
  background: linear-gradient(transparent, transparent, transparent, #ffe9e9);
  box-shadow: 0 10px 4px rgba(255, 200, 200, 0.5);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`

const Description = styled.div`
  color: #aaa;
  padding: 10px;
`
