// External Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { View, FlatList } from 'react-native'

// Our Components
import Deck from './components/Deck'
import AddDeck from '../../screens/AddDeck'

export default ({ decks, navigator }) => (
  <Container>
    { decks.length !== 0 && (
      <FlatListContainer>
        <FlatList 
          data={decks}
          keyExtractor = {({ title }) => title }
          renderItem={({ item }) => <Deck navigator={navigator} deck={item} />}
        />
      </FlatListContainer>
    )}
  </Container>
)

// Styled Components
const Container = styled.View`
  flex: 1
`
const FlatListContainer = styled.View`
  margin-top: 50
`