import { BackgroundVideo } from 'components/model/BackgroundVideo'
import { Projects } from 'components/model/Projects'
import { Features } from 'components/model/Features'

import styled from 'styled-components'

export const Top = () => {
  return (
    <StyledTop>
      <BackgroundVideo />
      <Projects />
      <Features />
    </StyledTop>
  )
}

const StyledTop = styled.div``
