// External Dependencies
import React from 'react'
import styled from 'styled-components/native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { View, Text, FlatList, TouchableOpacity} from 'react-native'

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

    { decks.length === 0 && (
      <NoDecksContainer>
        <SimpleLineIcons name='layers' size={80} color='#A8B4C4' />
        <AddDeckButton onPress={() => {
          navigator.push({ 
            component: AddDeck , 
            title: 'Add a Deck ',
          })}
        }>
          <AddDeckText>Add Deck</AddDeckText>
        </AddDeckButton>
      </NoDecksContainer>
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
const AddDeckButton = styled.TouchableOpacity`
  height: 53
  width: 200
  margin-top: 20
  align-self: center
  justify-content: center
  align-items: center
  border-radius: 4
  shadow-radius: 3;
  shadow-opacity: 0.1
  shadow-color: #3B48EE
  background-color: #3B48EE
`
const AddDeckText = styled.Text`
  font-size: 17
  color: #FFF
  font-family: Helvetica Neue  
`
const NoDecksContainer = styled.View`
  flex: 1
  margin-top: -100
  align-items: center
  justify-content: center
`