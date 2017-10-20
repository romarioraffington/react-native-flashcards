// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, Button } from 'react-native'

// Our Components
import Header from '../../components/Header'

export default class Quiz extends Component {
  render() {
    return (
      <MainContainer>
        <Header/>
        <QuestionCountText>2/4</QuestionCountText>
        <QuestionContainer>
          <HeaderText>Does native work with Android?</HeaderText>
          <ViewAnswerButton
            onPress={() => console.log('Learn more button pressed')}
            title="View the answer"
            color="#3B48EE"
            accessibilityLabel="View the answer to the question"
          />
        <ButtonContainer>
          <AnswerButton onPress={() => console.log('Incorrect button pressed')}>
            <ButtonText>Incorrect</ButtonText>
          </AnswerButton>
          <AnswerButton primary onPress={() => console.log('Correct button pressed')}>
            <ButtonText>Correct</ButtonText>
          </AnswerButton>
        </ButtonContainer>
        </QuestionContainer>
      </MainContainer>
    )
  }
}


// Styled Components
const MainContainer = styled.View`
  flex: 1
`
const QuestionContainer = styled.View`
  flex: 1
  margin-top: 140
  align-items: center
`
const QuestionCountText = styled.Text`
  color: #485465
  font-size: 17
  margin-left: 25
  font-family: Helvetica Neue  
`
const HeaderText = styled.Text`
  width: 400
  font-size: 35
  color: #485465
  font-weight: 300
  margin-bottom: 20
  text-align: center
`
const ViewAnswerButton = styled.Button`
  font-size: 17
`
const ButtonContainer = styled.View`
  margin-top: 75
  flex-direction: row
`
const AnswerButton = styled.TouchableOpacity`
  height: 50
  width: 150
  margin-left: 10
  border-radius: 4
  shadow-radius: 3;
  shadow-opacity: 0.1
  align-self: center
  justify-content: center
  align-items: center
  background-color: ${props => props.primary ? '#3B48EE' : '#FC6180'}
  shadow-color: ${props => props.primary ? '#3B48EE' : '#FC6180'}
` 
const ButtonText = styled.Text`
  font-size: 16
  color: #FFF
`