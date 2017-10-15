// External Dependencies
import React from 'react'
import styled from 'styled-components/native'

export default ({ children }) => (
  <Header>{children}</Header>
)

const Header = styled.Text` 
  color: white
  font-size: 24px
  text-align: center
  background-color: transparent
`