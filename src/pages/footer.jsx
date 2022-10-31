import styled from 'styled-components'

export const Footer = () => {
  return (
    <>
      <SDiv>
        <SUl>
          <SLi>
            <SA href='###'>私たちについて</SA>
          </SLi>
          <SLi>
            <SA href='###'>サービス</SA>
          </SLi>
          <SLi>
            <SA href='###'>商品情報</SA>
          </SLi>
          <SLi>
            <SA href='###'>展示会</SA>
          </SLi>
          <SLi>
            <SA href='###'>暮らしの日記</SA>
          </SLi>
          <SLi>
            <SA href='###'>会社概要</SA>
          </SLi>
        </SUl>
        <SP>Copyright © 2021 Akarui HOUSE All Rights Reserved.</SP>
      </SDiv>
    </>
  )
}

const SDiv = styled.div`
  color: #fff;
`
const SUl = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SLi = styled.li`
  :not(:last-child) {
    border-right: 1px solid #fff;
  }
  padding-right: 20px;
  padding-left: 20px;
`
const SA = styled.a`
  font-size: 14px;
`
const SP = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 60px;
`
