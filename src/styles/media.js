import { css } from 'styled-components'

export const BREAK_POINTS = {
  tb: 768,
  pc: 960,
}

export const media = {
  sp: (...args) => css`
    @media (max-width: ${BREAK_POINTS.tb - 1}px) {
      ${css(...args)}
    }
  `,
  tb: (...args) => css`
    @media (min-width: ${BREAK_POINTS.tb}px) {
      ${css(...args)}
    }
  `,
  pc: (...args) => css`
    @media (min-width: ${BREAK_POINTS.pc}px) {
      ${css(...args)}
    }
  `,
}
