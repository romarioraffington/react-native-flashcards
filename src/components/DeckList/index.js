// External Dependencies
import React from 'react'
import { FlatList  } from 'react-native'

// Our Components
import Deck from './components/Deck'

export default () => (
  <FlatList 
    data={data}
    keyExtractor = {({ id }) => id }
    renderItem={({ item }) => <Deck deck={item} />}
  />
)

// Temporary Datastore
const data = [{
  id: 1,
  name: 'Jamaica',
  cardCount: 9,
}, {
  id: 2,
  name: 'Greenland',
  cardCount: 5,
}, {
  id: 3,
  name: 'London',
  cardCount: 20,
},{
  id: 4,
  name: 'USA',
  cardCount: 5,
},{
  id: 6,
  name: 'Italy',
  cardCount: 0,
},{
  id: 7,
  name: 'Italy',
  cardCount: 1,
}
,{
  id: 8,
  name: 'Italy',
  cardCount: 11,
}
,{
  id: 9,
  name: 'Italy',
  cardCount: 15,
}]