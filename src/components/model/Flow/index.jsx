import { Title } from 'components/ui'

import { flows } from 'components/model/Flow/data'
import { FlowCard } from 'components/model/Flow/FlowCard'
import { Description } from 'components/model/Flow/Description'

import styled from 'styled-components'

export const Flow = ({ className }) => {
  return (
    <StyledFlows id='flow' className={`${className ?? ''}`}>
      <div className='wrapper'>
        <Title value='家ができるまでの流れ' color='black' />
        <p className='flow-desc'>お問い合わせいただいてから、家が完成するまでの流れです。</p>
        <div className='flow-list'>
          <FlowCard flows={flows} />
          <Description flows={flows} />
        </div>
      </div>
    </StyledFlows>
  )
}

const StyledFlows = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.BACKGROUND.WHITE};
  .flow {
    &-desc {
      margin-bottom: 30px;
      ${({ theme }) => theme.media.pc`
        margin-bottom: 60px;
      `}
    }
    &-list {
      ${({ theme }) => theme.media.pc`
        display: flex;
        justify-content: space-between;
      `}
    }
  }
`
