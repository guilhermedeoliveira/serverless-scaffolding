import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: red;
`

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

type Props = {
  title?: string
  children: any
}

const Card = ({ title, children }: Props) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
)

export default Card
