// External Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { View, Text, StatusBar } from 'react-native'

export default () => (
  <Container>
   <StatusBar barStyle="light-content"/>
    <Header> Your Decks </Header>
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
const Header = styled.Text`
  font-size: 18
  font-family: AvenirNext-Medium
  margin-top: 20
  color: #FFFFFF
  font-weight: 500
`