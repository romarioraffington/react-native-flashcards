// External Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

// Our Components
import Header from '../../components/Header'

export default class AddDeck extends Component {
  state = {
    title: '',
  }

  render() {
    const { title } = this.state
    return (
      <View>
        <Header/>
        <Container>
          <FormContainer>
            <SimpleLineIcons name='notebook' size={80} color='#3B48EE' />
            <StyledTextInput
              autoCapitalize='sentences'
              placeholder='Enter the name of the new deck'
              onChangeText={title => this.setState({ title })}
              value={title}
            />
            <CreateDeck 
              disabled={!title} 
              onPress={() => this.props.saveDeck(title)}>
            <CreateDeckText>Create Deck</CreateDeckText>
            </CreateDeck>
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
const CreateDeck = styled.TouchableOpacity`
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
const CreateDeckText = styled.Text`
  font-size: 16
  color: #FFF
  font-family: Helvetica Neue  
`
const FormContainer = styled.View`
  align-items: center
  justify-content: center
`