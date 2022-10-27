import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FeatureCard = ({ className, feature }) => {
  const { title, titleEng, description } = feature
  // const { id, title, titleEng, description } = feature

  return (
    <StyledFeatureCard className={`${className ?? ''}`}>
      {/* <Link to={`/feature/${id}`}> */}
      <Link to={`/`} className='circle'>
        {titleEng}
      </Link>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
    </StyledFeatureCard>
  )
}

const StyledFeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE100};
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE100};
    border-radius: 50%;
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
    overflow: hidden;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      content: '';
      background-color: ${({ theme }) => theme.COLORS.WHITE100};
      transition: left 0.5s;
      opacity: 0.3;
    }
    &:hover::before {
      left: 0;
    }
    /* 円形にする */
    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
  .title {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    margin-bottom: 5px;
  }
`
