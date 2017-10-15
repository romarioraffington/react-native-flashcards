// External Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { View, Image, StatusBar, StyleSheet } from 'react-native'

// Our Components
import Text from '../Styled/components/Text'
import Header from '../Styled/components/Header'
import ImageContainer from '../Styled/components/ImageContainer'

export default () => (
  <ImageContainer source={require('./images/background.png')}>
    <View>
      <StatusBar barStyle="light-content" />
      <Header> Country <BoldText>Quiz</BoldText></Header>
      <Text>Select a category or swipe left / right to get started</Text> 
    </View>
  </ImageContainer>
)

const BoldText = styled.Text`
  font-family: 'avenir-heavy'
`