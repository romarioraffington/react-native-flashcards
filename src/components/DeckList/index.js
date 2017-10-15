// External Dependencies
import React from 'react'
import { View, FlatList} from 'react-native'
import styled from 'styled-components/native'

// Our Components
import Deck from './components/Deck'

export default () => (
  <Container>
    <FlatList 
      data={data}
      keyExtractor = {({ id }) => id }
      renderItem={({ item }) => <Deck deck={item} />}
    />
  </Container>
)

// Styled Components
const Container = styled.View`
  flex: 1
`
// Temporary Datastore
const data = [{
  id: 1,
  name: 'Jamaica',
  size: 9,
}, {
  id: 2,
  name: 'Greenland',
  size: 5,
}, {
  id: 3,
  name: 'London',
  size: 20,
},{
  id: 4,
  name: 'USA',
  size: 5,
},{
  id: 6,
  name: 'Italy',
  size: 0,
}]