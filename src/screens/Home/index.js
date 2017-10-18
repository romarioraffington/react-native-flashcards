// External Dependencies
import React, { Component } from 'react'
import _ from 'lodash'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import ActionButton from 'react-native-action-button';

// Our Components
import AddDeck from '../AddDeck'
import Header from '../../components/Header' 
import DeckList from '../../components/DeckList' 
import StatusCard from '../../components/StatusCard' 

// Actions 
import { getDecks } from '../../models/Deck/actions'

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(getDecks())
  }

  render() {
   const { decks, route, navigator } = this.props
    return (
      <Container>
        <Header title={route.title} />
        <StatusCard />
        <DeckList decks={decks} navigator={navigator} />
        <ActionButton 
          buttonColor="#3B48EE" 
          shadowStyle={{ shadowOpacity: 0.3, shadowRadius: 9 }}
          onPress={() => navigator.push({ 
            component: AddDeck , 
            title: 'Add a Deck',
          })}
        />
      </Container>
    )
  }
}


const mapStateToProps = ({ deck }) => {
  const decks = deck.decks

  return {
    // Convert decks object to an array
    // to be rendered by the FlatList in 
    // the DeckList component
    decks: Object.keys(decks).map(key => decks[key])
  }
}

export default connect(
  mapStateToProps,
)(Home)

// Styled Components
const Container = styled.View`
  flex: 1
`