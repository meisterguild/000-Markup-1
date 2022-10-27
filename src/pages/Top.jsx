import { BackgroundVideo } from 'components/model/BackgroundVideo'
import { Projects } from 'components/model/Projects'

import styled from 'styled-components'

export const Top = () => {
  return (
    <StyledTop>
      <BackgroundVideo />
      <Projects />
    </StyledTop>
  )
}

const StyledTop = styled.div``
