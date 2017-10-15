// External Dependencies
import React from 'react'
import { View } from 'react-native'

// Our Components
import Header from '../../components/Header'
import DeckList from '../../components/DeckList'

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <DeckList />
      </View>
    )
  }
}