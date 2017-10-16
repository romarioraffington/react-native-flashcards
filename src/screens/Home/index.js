// External Dependencies
import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import ActionButton from 'react-native-action-button';

// Our Components
import AddDeck from '../AddDeck'
import Header from '../../components/Header' 
import DeckList from '../../components/DeckList' 
import StatusCard from '../../components/StatusCard' 

export default class Home extends Component {
  render() {
   const { route, navigator } = this.props
    return (
      <Container>
        <Header title={route.title} />
        <StatusCard />
        <DeckList navigator={navigator} />
        <ActionButton 
          buttonColor="#3B48EE" 
          shadowStyle={{ shadowOpacity: 0.3, shadowRadius: 9 }}
          onPress={() => navigator.push({ 
            component: AddDeck , 
            title: 'Add a Deck', 
            backButtonIcon: require('../images/back-button.png'),
          })}
        />
      </Container>
    )
  }
}

// Styled Components
const Container = styled.View`
  flex: 1
`