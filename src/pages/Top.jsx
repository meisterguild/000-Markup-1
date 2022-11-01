import { BackgroundVideo } from 'components/model/BackgroundVideo'
import { Projects } from 'components/model/Projects'
import { Features } from 'components/model/Features'
import { Flow } from 'components/model/Flow'

import styled from 'styled-components'

export const Top = () => {
  return (
    <StyledTop>
      <BackgroundVideo />
      <Projects />
      <Features />
      <Flow />
    </StyledTop>
  )
}

const StyledTop = styled.div``
