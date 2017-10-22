// External Dependencies
import React, { Component } from 'react'
import { Permissions } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'

// Our Dependencies
import store from './src/store'
import Router from './src/components/Router'
import { setLocalNotification, listenForNotifications } from './src/util/notifications'

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
    listenForNotifications()
  }

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