import styled from 'styled-components'

export const FlowCard = ({ className, flows }) => {
  return (
    <StyledFlowCard className={`${className ?? ''}`} listLength={flows.length}>
      {flows.map((flow) => {
        const { id, value } = flow
        return (
          <li key={id} className='card'>
            <div className='inner'>{`${id}.${value}`}</div>
          </li>
        )
      })}
    </StyledFlowCard>
  )
}

const StyledFlowCard = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  ${({ theme }) => theme.media.pc`
    padding: 0;
  `}

  .card {
    position: relative;
    height: ${({ listLength }) => `calc(100% / ${listLength})`};
    min-height: 140px;

    // 黄色の縦線
    &:not(:last-child)::before {
      content: '';
      width: 50px;
      height: 100%;
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .inner {
    width: calc(100vw - 80px);
    height: 80px;
    background-color: ${({ theme }) => theme.COLORS.BLACK40};
    position: relative;
    line-height: 80px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE100};
    font-size: ${({ theme }) => theme.FONT_SIZE.S};
    ${({ theme }) => theme.media.pc`
      width: 200px;
    `}
    &::before {
      content: '';
      width: 100%;
      height: 30px;
      margin: 0 auto;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      border-top: 30px solid ${({ theme }) => theme.COLORS.BLACK40};
      border-left: calc(50vw - 40px) solid transparent;
      border-right: calc(50vw - 40px) solid transparent;
      ${({ theme }) => theme.media.pc`
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
      `}
    }
  }
`
