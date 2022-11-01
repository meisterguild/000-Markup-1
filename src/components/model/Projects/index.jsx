import { Fragment } from 'react'

import { Title } from 'components/ui'

import { projectsImageList } from 'components/model/Projects/data'
import { ProjectCard } from 'components/model/Projects//ProjectCard'

import styled from 'styled-components'

export const Projects = ({ className }) => {
  return (
    <StyledProjects id='project' className={`${className ?? ''}`}>
      <div className='wrapper'>
        <Title value='建築事例を紹介' />
        <div className='projects-list'>
          {projectsImageList.map((project, index) => {
            return (
              <Fragment key={index}>
                <ProjectCard project={project} />
              </Fragment>
            )
          })}
        </div>
      </div>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  background: ${({ theme }) =>
    `linear-gradient(${theme.BACKGROUND.BLACK_NONE}, ${theme.BACKGROUND.BLACK_OPACITY}) no-repeat`};
  .projects-list {
    display: grid;
    row-gap: 30px;
    ${({ theme }) => theme.media.tb`
      grid-template-columns: repeat(2, 1fr);
      gap: 50px 6%;
    `}
  }
`
