// External Dependencies
import React from 'react'
import styled from 'styled-components/native'

export default ({ children }) => (
  <StyledText>{ children } </StyledText>
)

const StyledText = styled.Text`
  color: white
  font: 14px 'avenir-roman'
  background-color: transparent
`