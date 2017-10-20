// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, Button } from 'react-native'

// Our Components
import Header from '../../components/Header'

export default class Quiz extends Component {
  state = {
    correctAnswers: 0,
    showAnswer: false,
    currentQuestionIndex: 0,
  }

  render() {
    const { deck } = this.props
    const { currentQuestionIndex, showAnswer, correctAnswers } = this.state
    console.log(this.state)

    // Pull vars to display 
    const questionsLength = deck.questions.length
    const currentQuestion = deck.questions[currentQuestionIndex].question
    const currentAnswer = deck.questions[currentQuestionIndex].answer
    const currentQuestionNumber = currentQuestionIndex + 1

    return (
      <MainContainer>
        <Header/>
        <QuestionCountText>{currentQuestionNumber} / {questionsLength}</QuestionCountText>
        <QuestionContainer>
          <HeaderText>
            { showAnswer ? currentAnswer: currentQuestion}
          </HeaderText>
          <ViewAnswerButton
            onPress={() => this.setState({ showAnswer: !showAnswer })}
            title={ showAnswer ? "View the question" : "View the answer" }
            color="#3B48EE"
            accessibilityLabel="View the answer to the question"
          />
        <ButtonContainer>
          <AnswerButton onPress={() => {
              this.setState({ 
                currentQuestionIndex: currentQuestionIndex + 1,
              })
            }}>
            <ButtonText>Incorrect</ButtonText>
          </AnswerButton>
          <AnswerButton primary
            onPress={() => {
              this.setState({ 
                currentQuestionIndex: currentQuestionIndex + 1,
                correctAnswers: correctAnswers + 1 
              })
            }}>
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
  margin-top: 100
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
  margin-bottom: 10
  text-align: center
`
const ViewAnswerButton = styled.Button`
  font-size: 17
`
const ButtonContainer = styled.View`
  margin-top: 60
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