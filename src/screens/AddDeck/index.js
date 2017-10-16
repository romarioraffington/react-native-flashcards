// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

// Our Components
import Home from '../Home'
import Header from '../../components/Header' 

export default class AddDeck extends Component {
  state = {
    name: '',
  }

  render() {
    const { name } = this.state
    const { route, navigator } = this.props
    return (
      <View>
        <Header title={route.title}/>
        <Container>
          <FormContainer>
            <SimpleLineIcons name='notebook' size={80} color='#3B48EE' />
            <StyledTextInput
              autoCapitalize='words'
              placeholder='Enter the name of the new deck'
              onChangeText={name => this.setState({ name })}
              value={name}
            />
            <SaveButton 
              disabled={!name} 
              onPress={() => navigator.pop({ 
                component: Home , 
                title: 'Your Decks', 
                passProps: { deck: name },
              })}>
            <SaveButtonText>Save Deck</SaveButtonText>
            </SaveButton>
          </FormContainer>
        </Container>
      </View>
    )
  }
}

// Styled Components
const Container = styled.View`
  margin-top: 100
  align-items: center
  justify-content: center
`
const StyledTextInput = styled.TextInput`
  height: 50
  width: 342
  font-size: 15
  font-family: Helvetica Neue  
  margin-top: 50
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
const FormContainer = styled.View`
  align-items: center
  justify-content: center
`