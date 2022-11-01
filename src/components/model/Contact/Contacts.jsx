import { contacts } from 'components/model/Contact/data'

import { ContactCard } from 'components/model/Contact/ContactCard'

import styled from 'styled-components'

export const ContactList = ({ className }) => {
  return (
    <StyledContactList className={`${className ?? ''}`}>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </StyledContactList>
  )
}

const StyledContactList = styled.div`
  display: grid;
  gap: 20px;
  ${({ theme }) => theme.media.tb`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${({ theme }) => theme.media.pc`
    gap: 43px;
  `}
`
