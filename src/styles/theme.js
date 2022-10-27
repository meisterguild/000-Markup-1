import { media } from './media'

export const theme = {
  COLORS: {
    BLACK20: '#2E2E2E',
    BLACK40: '#414141',
    BLACK60: '#333333',
    BLACK80: '#231815',
    BLACK90: '#121212',
    BLACK100: '#000000',
    WHITE20: '#DEDEDE',
    WHITE40: '#00000029',
    WHITE60: '#0D0D0D29',
    WHITE80: '#DEDEDE',
    WHITE100: '#FFFFFF',
    PRIMARY: '#FFDD00',
    SECONDARY: '#F3E729',
  },
  BACKGROUND: {
    BLACK_NONE: '#00000000',
    BLACK_OPACITY: '#000000cc',
  },
  Z_INDEX: {
    HEADER: 10,
    HAMBURGER: 20,
    BACKGROUND: -10,
    FOOTER: 10,
  },
  FONT_SIZE: {
    XS: '1.2rem',
    S: '1.4rem',
    M: '1.6rem',
    L: '2rem',
    XL: '2.4rem',
    XXL: '2.8rem',
  },
  FONT_WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    BOLD: 700,
  },
  FONT_FAMILY: "'Noto Sans JP', sans-serif",
  media,
}
