import React from 'react'
import { Cutoff } from 'src/types'
import { reverseArray } from 'src/utils/urlUtils'
import styled from 'styled-components'

const cutoffLevel = ['7', '6', '5', '4', '3', '2']

const CutoffCard = ({ cutoff }: { cutoff: Cutoff | any }) => {
  return (
    <Wrapper>
      <Title>{cutoff.title}</Title>
      <CutoffWrapper>
        <Years>
          <Year>Year</Year>
          {reverseArray(cutoff.years).map((year: number, index: number) => (
            <Year key={year + cutoff.title}>
              {year}
              <Fullscore>
                {reverseArray(cutoff.fullScore)[index]}
                <Percentage>(%)</Percentage>
              </Fullscore>
            </Year>
          ))}
        </Years>
        {cutoffLevel.map(level => (
          <LevelWrapper key={level}>
            <Level>{level}</Level>
            {reverseArray(cutoff[level]).map((score: number, index: number) => (
              <Level key={score * Math.random()}>
                {score}
                <Percentage>
                  (
                  {Math.floor(
                    (score / reverseArray(cutoff.fullScore)[index]) * 100
                  )}
                  )
                </Percentage>
              </Level>
            ))}
          </LevelWrapper>
        ))}
      </CutoffWrapper>
    </Wrapper>
  )
}

export default CutoffCard

const Wrapper = styled.div`
  margin: 50px 0;
`

const CutoffWrapper = styled.div`
  overflow: scroll;
`

const Years = styled.div`
  display: grid;
  grid-template-columns: repeat(11, minmax(80px, 1fr));
`

const Year = styled.div`
  padding: 10px;
  font-weight: bold;
  border-bottom: 0.5px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Percentage = styled.span`
  color: #bbb;
  padding-left: 4px;
  font-size: 12px;
`

const Fullscore = styled.div`
  font-weight: normal;
  font-size: 14px;
`

const Level = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #ddd;
  justify-content: center;
`

const LevelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, minmax(80px, 1fr));
`

const Title = styled.div`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.palette.mainTheme};
  padding: 8px 0;
  display: flex;
  justify-content: center;
`
