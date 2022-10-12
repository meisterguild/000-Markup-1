import styled from 'styled-components'

export const Top = () => {
  return (
    <StyledTop>
      <h1>Top</h1>
      <div className='hoge'>Hoge</div>
    </StyledTop>
  )
}

const StyledTop = styled.div`
  h1 {
    color: red;
  }
  .hoge {
    color: blue;
    border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }
  ${({ theme }) => theme.media.tb`
    h1 {
      color: green;
    }
  `}
  ${({ theme }) => theme.media.pc`
    h1 {
      color: black;
    }
  `}
`
