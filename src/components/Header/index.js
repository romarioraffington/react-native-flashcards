// External Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { View, Text, StatusBar } from 'react-native'

export default () => (
  <Container>
   <StatusBar barStyle="light-content"/>
  </Container>
)

// Styled Components
const Container = styled.View`
  height: 64
  margin-bottom: 20
  align-items: center
  justify-content: center
  background-color: #3B48EE
`