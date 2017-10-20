// External Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components/native'
import { SimpleLineIcons } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button';
import { View, TouchableOpacity, Text, AlertIOS } from 'react-native'

// Our Components
import AddDeck from '../AddDeck'
import Header from '../../components/Header' 
import DeckList from '../../components/DeckList' 
import StatusCard from '../../components/StatusCard' 

// Actions 
import { getDecks, saveDeck } from '../../models/Deck/actions'

class Home extends Component {
  componentDidMount () {
    this.props.getDecks()
  }

  render() {
   const { decks, navigator, saveDeck } = this.props
    return (
      <Container>
        <Header />
        <StatusCard />
        <DeckList decks={decks} navigator={navigator} />

        { decks.length !== 0 && (
          <ActionButton 
            buttonColor="#3B48EE" 
            shadowStyle={{ shadowOpacity: 0.3, shadowRadius: 9 }}
            onPress={() => navigator.push({ 
              component: AddDeck, 
              title: 'Add a Deck',
              passProps: { saveDeck } 
            })}
          />
        )}

        { decks.length === 0 && (
          <NoDecksContainer>
            <SimpleLineIcons name='layers' size={80} color='#A8B4C4' />
            <AddDeckButton onPress={() => {
              navigator.push({ 
                component: AddDeck , 
                title: 'Add a Deck ',
                passProps: { saveDeck } 
              })}
            }>
              <AddDeckText>Add Deck</AddDeckText>
            </AddDeckButton>
          </NoDecksContainer>
        )}
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

const mapDispatchToProps = (dispatch => (
  bindActionCreators({
    getDecks,
    saveDeck,
  }, dispatch)
))

const mergeProps = ({ decks }, { getDecks, saveDeck }, ownProps) => ({
  ...ownProps,
  decks,
  getDecks,
  saveDeck: (title) =>  {
    const isPresent = !! decks.find(d => d.title === title)  

    // Do not save deck if it already 
    // exists in the state
    if (isPresent ) {
      AlertIOS.alert( 'Try Again', `${title} deck already exists.`)
    } else {
      saveDeck(title)
      ownProps.navigator.pop()
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home)

// Styled Components
const Container = styled.View`
  flex: 1
  background-color: #FEFEFE
`
const AddDeckButton = styled.TouchableOpacity`
  height: 53
  width: 200
  margin-top: 20
  align-self: center
  justify-content: center
  align-items: center
  border-radius: 4
  shadow-radius: 3;
  shadow-opacity: 0.1
  shadow-color: #3B48EE
  background-color: #3B48EE
`
const AddDeckText = styled.Text`
  font-size: 17
  color: #FFF
  font-family: Helvetica Neue  
`
const NoDecksContainer = styled.View`
  margin-bottom: 300
  align-items: center
  justify-content: center
`