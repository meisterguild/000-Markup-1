import { Fragment } from 'react'
import { Title } from 'components/ui'

import { features } from 'components/model/Features/data'
import { FeatureCard } from 'components/model/Features/FeatureCard'

import styled from 'styled-components'

export const Features = ({ className }) => {
  return (
    <StyledFeatures id='feature' className={`${className ?? ''}`}>
      <div className='wrapper'>
        <Title value='明るいHOUSEの特徴' />
        <div className='features'>
          {features.map((feature, index) => (
            <Fragment key={index}>
              <FeatureCard feature={feature} />
            </Fragment>
          ))}
        </div>
      </div>
    </StyledFeatures>
  )
}

const StyledFeatures = styled.section`
  background-color: ${({ theme }) => theme.BACKGROUND.BLACK_OPACITY};
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 18px;
    ${({ theme }) => theme.media.pc`
      column-gap: 43px;
    `}
  }
`
