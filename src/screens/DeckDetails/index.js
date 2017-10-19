// External Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components/native'
import ActionButton from 'react-native-action-button';
import { View, Text, TouchableOpacity } from 'react-native'

// Our Components
import Home from '../Home'
import AddCard from '../AddCard'
import Header from '../../components/Header' 

// Our Actions
import { saveCard } from '../../models/Deck/actions'

class DeckDetails extends Component {

  navigateToAddCard(navigator, { title }, saveCard) {
    navigator.push({ 
      component: AddCard, 
      title: 'Add a Card', 
      passProps: { title, saveCard },
    })
  }

  render() {
    const { deck, navigator, saveCard } = this.props
    const isDeckEmpty = deck.questions.length === 0
    return (
      <MainContainer>
        <Header/>
        <Container>
          <HeaderText>{deck.title}</HeaderText>  
          <Badge>
            <BadgeText>
              { isDeckEmpty ? 'No' : deck.questions.length } Cards 
            </BadgeText>
          </Badge>

            { isDeckEmpty && (
              <AddCardButton onPress={() => this.navigateToAddCard(navigator, deck, saveCard )}>
                <AddCardText>Add Card</AddCardText>
              </AddCardButton>
          )}

          { !isDeckEmpty && (
            <View>
              <StartQuizBUtton onPress={() => console.log('Start Quiz Pressed')}>
                <StartQuizText>Start Quiz</StartQuizText>
              </StartQuizBUtton>
            </View>
          )}
        </Container>

        { !isDeckEmpty && (
          <ActionButton 
            buttonColor="#3B48EE" 
            shadowStyle={{ shadowOpacity: 0.3, shadowRadius: 9 }}
            onPress={() => this.navigateToAddCard(navigator, deck, saveCard)}
          />
        )}
      </MainContainer>
    )
  }
}

const mapStateToProps = ({ deck }, { title }) => ({
  deck: deck.decks[title],
})

const mapDispatchToProps = (dispatch => (
  bindActionCreators({
    saveCard,
  }, dispatch)
))

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckDetails)


// Styled Components
const MainContainer = styled.View`
  flex: 1
`
const Container = styled.View`
  margin-top: 100
  justify-content: center
  align-items: center
`
const HeaderText = styled.Text`
  font-size: 40
  color: #485465
  margin-top: 50
  font-family: Helvetica Neue  
`
const Badge = styled.View`
  width: 67
  height: 32
  border-radius: 4
  opacity: 0.6
  align-items: center
  justify-content: center
  background-color: #A8B4C4
`
const BadgeText = styled.Text`
  color: #FFF
  font-weight: 600
  font-size: 14
`
const StartQuizBUtton = styled.TouchableOpacity`
  margin-top: 30
  height: 50
  width: 190
  align-self: center
  justify-content: center
  align-items: center
  border-radius: 4
  shadow-radius: 3;
  shadow-opacity: 0.1
  shadow-color: #3B48EE
  background-color: #3B48EE
`
const StartQuizText = styled.Text`
  font-size: 16
  color: #FFF
  font-family: Helvetica Neue  
`
const AddCardButton = styled.TouchableOpacity`
height: 50
width: 190
margin-top: 30
align-self: center
justify-content: center
align-items: center
border-radius: 4
shadow-radius: 3;
shadow-opacity: 0.1
shadow-color: #3B48EE
background-color: #3B48EE
`
const AddCardText = styled.Text`
font-size: 17
color: #FFF
font-family: Helvetica Neue  
`