import styled from 'styled-components'

export const ContactCard = ({ className, contact }) => {
  const { title, image, href } = contact
  return (
    <StyledContactCard href={href} className={`${className ?? ''}`}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </StyledContactCard>
  )
}

const StyledContactCard = styled.a`
  display: block;
  position: relative;
  width: 60%;
  height: 190px;
  padding: 50px 0;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.COLORS.BLACK90};
  text-align: center;
  ${({ theme }) => theme.media.tb`
    width: 100%;
    margin: 0;
  `}
  &:hover {
    outline: 3px solid ${({ theme }) => theme.COLORS.BLACK90};
  }
  &::before {
    content: '';
    border-right: 20px solid ${({ theme }) => theme.COLORS.BLACK90};
    border-top: 20px solid transparent;
    position: absolute;
    right: 4px;
    bottom: 4px;
  }
`
