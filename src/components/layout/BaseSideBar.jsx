import styled from 'styled-components'

export const BaseSideBar = ({ children, Sidebar, className }) => {
  return (
    <StyledBaseSideBar className={`${className ?? ''}`}>
      <div className='sidebar'>{Sidebar}</div>
      <div className='content'>{children}</div>
    </StyledBaseSideBar>
  )
}

const StyledBaseSideBar = styled.div`
  width: 100vw;
  height: 100%;
  .sidebar {
    display: none;
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: green;
  }
  ${({ theme }) => theme.media.pc`
    display: flex;
    justify-content: space-between;
    .sidebar {
      display: block;
      width: 300px;
      height: 100vh;
    }
    .content {
      width: calc(100% - 300px);
    }
  `}
`
