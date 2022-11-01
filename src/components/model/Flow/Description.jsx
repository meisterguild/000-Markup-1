import { Fragment } from 'react'
import styled from 'styled-components'

export const Description = ({ className, flows }) => {
  return (
    <StyledDescription className={`${className ?? ''}`}>
      {flows.map((flow) => {
        const { id, value, description } = flow
        return (
          <Fragment key={id}>
            <dt className='title'>
              <span className='step'>{id}</span>
              {value}
            </dt>
            <dd className='desc'>{description}</dd>
          </Fragment>
        )
      })}
    </StyledDescription>
  )
}

const StyledDescription = styled.dl`
  margin-left: 45px;
  ${({ theme }) => theme.media.pc`
    margin-left: 75px;
  `}
  .title {
    font-size: ${({ theme }) => theme.FONT_SIZE.L};
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK90};
    position: relative;
  }
  .step {
    position: absolute;
    top: 6px;
    left: -45px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE100};
    background-color: ${({ theme }) => theme.COLORS.BLACK40};
    border-radius: 50%;
  }
  .desc {
    margin-top: 10px;
    margin-bottom: 43px;
  }
`
