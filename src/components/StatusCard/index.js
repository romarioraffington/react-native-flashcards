// External Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { View, Text, StatusBar } from 'react-native'

export default () => (
  <Container>
    <View>
      <StatusText> Last Quiz Taken</StatusText>
      <HighlightText blue> Jamaica </HighlightText>
    </View>
    <Separator/>
    <View>
      <StatusText> Best Score</StatusText>
      <HighlightText pink> 85% </HighlightText>
    </View>
  </Container>
)

// Styled Components
const Container = styled.View`
  margin-bottom: -30
  flex-direction: row
  align-items: center
  justify-content: center
`
const StatusText = styled.Text`
  color: #A8B4C4
  font-size: 12
  font-family: Helvetica Neue
`
const HighlightText = styled.Text`
  color: ${(props) => props.blue ? '#3B48EE' : '#FC6180'}
  font-size: 14
  font-weight: 600
  font-family: Helvetica Neue
`
const Separator = styled.Text`
  border: 0.5px solid #D1D5D8
  height: 32
  margin-left: 20
  margin-right: 20
`