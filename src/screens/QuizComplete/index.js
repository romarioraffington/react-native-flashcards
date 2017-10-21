// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, Button } from 'react-native'

// Our Components
import Quiz from '../Quiz'
import DeckDetails from '../DeckDetails'
import Header from '../../components/Header'

export default class QuizComplete extends Component {
  render() {
    const { score, navigator, deck } = this.props
    
    return (
      <MainContainer>
        <Header/>
        <QuestionContainer>
          <HeaderText>Your Score:</HeaderText>
          <ScoreText>{score}%</ScoreText>
        <ButtonContainer>
          <StyledButton onPress={() => 
            navigator.push({
              component: Quiz, 
              title: 'Quiz',
              passProps: { deck },
            })
          }>
            <ButtonText>Restart Quiz</ButtonText>
          </StyledButton>
          <StyledButton primary
            onPress={() => 
              navigator.push({
                component: DeckDetails, 
                passProps: { title: deck.title },
              })
            }>
            <ButtonText>Back to Deck</ButtonText>
          </StyledButton>
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
  margin-top: 100
  align-items: center
`
const HeaderText = styled.Text`
  width: 400
  font-size: 35
  color: #A8B4C4
  font-weight: 300
  margin-bottom: 10
  text-align: center
`
const ScoreText = styled.Text`
  width: 400
  font-size: 45
  color: #485465
  font-weight: 300
  margin-bottom: 10
  text-align: center
`
const ButtonContainer = styled.View`
  margin-top: 50
  flex-direction: row
`
const StyledButton = styled.TouchableOpacity`
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