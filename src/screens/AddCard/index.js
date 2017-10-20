// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

// Our Components
import Home from '../Home'
import Header from '../../components/Header' 

export default class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }
  
  render() {
    const { question, answer } = this.state
    const { title } = this.props
    return (
      <View>
        <Header />
        <Container >
          <HeaderText>{title}</HeaderText>  
          <View>
            <StyledTextInput
              autoCapitalize='sentences'
              placeholder='Enter your question'
              onChangeText={question => this.setState({ question })}
              value={question}
            />
            <StyledTextInput
              autoCapitalize='sentences'
              placeholder='Enter the answer'
              onChangeText={answer => this.setState({ answer })}
              value={answer}
            />
            <CreateQuestion 
              disabled={!question || !answer} 
              onPress={() => {
                this.props.saveCard({
                  title,
                  ...this.state,
                })

                this.props.navigator.pop()
                }
              }>
            <CreateQuestionText>Create New Question</CreateQuestionText>
            </CreateQuestion>
          </View>
        </Container>
      </View>
    )
  }
}

// Styled Components
const Container = styled.View`
  margin-top: 50
  flex: 1
  justify-content: center
  align-items: center
`
const HeaderText = styled.Text`
  font-size: 35
  color: #485465
  font-weight: 400
  margin-top: 50
  margin-bottom: 50
  font-family: AvenirNext-Medium
`
const StyledTextInput = styled.TextInput`
  height: 50
  width: 342
  font-size: 15
  font-family: Helvetica Neue  
  margin-bottom: 20
  color: #B8C1CE
  borderWidth: 1
  border-radius: 4
  padding-left: 13.5
  border-color: #DCE2EE
`
const CreateQuestion = styled.TouchableOpacity`
  margin-top: 35
  height: 50
  width: 190
  align-self: center
  justify-content: center
  align-items: center
  border-radius: 4
  shadow-radius: 3;
  shadow-opacity: 0.1
  shadow-color: #3B48EE
  background-color: #3B48EE
`
const CreateQuestionText = styled.Text`
  font-size: 16
  color: #FFF
  font-family: Helvetica Neue  
`