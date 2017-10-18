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
    const { deck, route, navigator } = this.props
    return (
      <View>
        <Header title={route.title}/>
        <Container >
          <HeaderText>{deck.name}</HeaderText>  
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
            <SaveButton 
              disabled={!question || !answer} 
              onPress={() => {
                navigator.pop({ 
                  component: Home , 
                  title: 'Your Decks', 
                  passProps: { card: { ...this.state }},
                })}
              }>
            <SaveButtonText>Save Card</SaveButtonText>
            </SaveButton>
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
  margin-bottom: 65
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
const SaveButton = styled.TouchableOpacity`
  margin-top: 40
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
const SaveButtonText = styled.Text`
  font-size: 16
  color: #FFF
  font-family: Helvetica Neue  
`