// External Dependencies
import React from 'react'
import { Font } from 'expo'
import styled from 'styled-components/native'
import { Text, View } from 'react-native'

// Our Dependencies
import Home from './src/screens/Home'

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'avenir-roman': require('./src/assets/fonts/AvenirLTStd-Roman.otf'),
      'avenir-heavy': require('./src/assets/fonts/Avenir-Heavy.ttf'),
    });

    this.setState({ isFontLoaded: true })
  }

  render() {
    return (
      <View>{this.state.isFontLoaded && <Home />}</View>
    );
  }
}