import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProjectCard = ({ className, project }) => {
  const { name, src, alt } = project
  // const { id, name, src, alt } = project
  return (
    // <Link to={`/project/${id}`}>
    <Link to='/'>
      <StyledProjectCard className={`${className ?? ''}`}>
        <img src={src} alt={alt} />
        <div className='name'>{name}</div>
      </StyledProjectCard>
    </Link>
  )
}

const StyledProjectCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE100};
  position: relative;
  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    box-shadow: inset 0 -30px 10px ${({ theme }) => theme.COLORS.BLACK20};
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .name {
    position: absolute;
    left: 7px;
    bottom: 4px;
    z-index: 2;
    color: ${({ theme }) => theme.COLORS.WHITE100};
  }
`
