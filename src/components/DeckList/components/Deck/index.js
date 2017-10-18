// External Dependencies
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

// Our Components
import DeckDetails from '../../../../screens/DeckDetails'

export default ({ deck, navigator }) => (
  <Deck onPress={() => navigator.push({ 
      component: DeckDetails, 
      passProps: { deck },
    })}>
    <Country>{deck.title}</Country>
    <Badge>
      <BadgeText>
        { deck.questions.length === 0 
          ? 'No'
          : deck.questions.length 
        } Cards
      </BadgeText>
    </Badge>
  </Deck>
)

// Styled Components
const Deck = styled.TouchableOpacity`
  height: 139
  margin-left: 20
  margin-right: 20
  margin-bottom: 10
  border-radius: 6
  shadow-radius: 9
  shadow-opacity: 0.4
  shadow-color: #D9E2E9
  background-color: #FFF
  align-items: center
  justify-content: center
`
const Country = styled.Text`
  color: #485465
  font-size: 24
`
const Badge = styled.View`
  height: 22
  border-radius: 4
  padding-left: 3
  padding-right: 3
  opacity: 0.6
  align-items: center
  justify-content: center
  background-color: #A8B4C4
`
const BadgeText = styled.Text`
  color: #FFF
  font-weight: 600
  font-size: 12
`