// External Dependencies
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import devToolsEnhancer from 'remote-redux-devtools';

// Our Dependencies
import Router from './src/components/Router'
import reducer from './src/reducer' 

// Boostrap store
const store = createStore(reducer, devToolsEnhancer());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router />
        </Container>
      </Provider>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #FEFEFE;
`