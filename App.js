// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'

// Our Components
import Router from './src/components/Router'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Router />
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #FEFEFE;
`