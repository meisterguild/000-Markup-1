import { css } from 'styled-components'

const BREAK_POINTS = {
  pcMaxWidth: 1920, // PC最大幅
  pc: 960, // PC
  tab: 768, // タブレット
  sp: 767, // スマホ
  spMinimumWidth: 320, // スマホ最小幅
}

export const media = {
  pcMaxWidthOver: (...args) => css`
    @media (min-width: ${BREAK_POINTS.pcMaxWidth}px) {
      ${css(...args)}
    }
  `,

  pcOnly: (...args) => css`
  @media (min-width: ${BREAK_POINTS.pc}px) {
    ${css(...args)}
  }
`,

  pcAndTab: (...args) => css`
    @media (min-width: ${BREAK_POINTS.tab}px) {
      ${css(...args)}
    }
  `,

  spAndTab: (...args) => css`
    @media (max-width: ${BREAK_POINTS.pc - 1}px) {
      ${css(...args)}
    }
  `,

  tabOnly: (...args) => css`
    @media (min-width: ${BREAK_POINTS.tab}px and max-width: ${BREAK_POINTS.pc - 1}px) {
      ${css(...args)}
    }
  `,

  sp: (...args) => css`
    @media (max-width: ${BREAK_POINTS.sp}) {
      ${css(...args)}
    }
  `,

  spMinimumSize: (...args) => css`
    @media (max-width: ${BREAK_POINTS.spMinimumSize}) {
      ${css(...args)}
    }
  `,
}
