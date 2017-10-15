// External Dependencies
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import ActionButton from 'react-native-action-button';

// Our Components
import Header from '../../components/Header' 
import DeckList from '../../components/DeckList' 
import StatusCard from '../../components/StatusCard' 

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <StatusCard />
        <DeckList />
        <ActionButton 
          buttonColor="#3B48EE" 
          shadowStyle={{ shadowOpacity: 0.3, shadowRadius: 9 }}
          onPress={() => { console.log("Add Button")}} 
        />
      </Container>
    )
  }
}

// Styled Components
const Container = styled.View`
  flex: 1
`