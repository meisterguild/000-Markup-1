import { Title } from 'components/ui'

import { ContactList } from 'components/model/Contact/Contacts'

import styled from 'styled-components'

export const Contact = ({ className }) => {
  return (
    <StyledContact className={`${className ?? ''}`}>
      <div className='wrapper'>
        <Title value='お問い合わせ' color='black' />
        <p className='contact-desc'>お問い合わせは下記からお願いいたします。</p>
        <ContactList />
      </div>
    </StyledContact>
  )
}

const StyledContact = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND.WHITE};
  padding-bottom: 60px;
  ${({ theme }) => theme.media.pc`
    padding-bottom: 80px;
  `}
  .contact {
    &-desc {
      margin-bottom: 30px;
      ${({ theme }) => theme.media.pc`
        margin-bottom: 60px;
      `}
    }
  }
`
