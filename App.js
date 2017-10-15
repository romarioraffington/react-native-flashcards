// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'

// Our Components
import Home from './src/screens/Home'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #FEFEFE;
`