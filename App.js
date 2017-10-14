// External Dependencies
import React from 'react';
import { Text, View } from 'react-native';

// Our Dependencies
import Deck from './src/components/Deck'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Deck/>
      </View>
    );
  }
}