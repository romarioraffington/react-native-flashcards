// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import ActionButton from 'react-native-action-button';
import { View, Text, TouchableOpacity } from 'react-native'

// Our Components
import Home from '../Home'
import AddCard from '../AddCard'
import Header from '../../components/Header' 

export default class DeckDetails extends Component {
  render() {
    const { deck, route, navigator } = this.props
    return (
      <MainContainer>
        <Header title={route.title}/>
        <Container>
          <HeaderText>{deck.title}</HeaderText>  
          <Badge><BadgeText>{deck.questions.length} Cards </BadgeText></Badge>
          <View>
            <StartQuiz onPress={() => console.log('Start Quiz Pressed')}>
              <StartQuizText>Start Quiz</StartQuizText>
            </StartQuiz>
          </View>
        </Container>
        <ActionButton 
          buttonColor="#3B48EE" 
          shadowStyle={{ shadowOpacity: 0.3, shadowRadius: 9 }}
          onPress={() => navigator.push({ 
            component: AddCard, 
            title: 'Add a Card', 
            passProps: { deck }
          })}
        />
      </MainContainer>
    )
  }
}

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
const StartQuiz = styled.TouchableOpacity`
  margin-top: 50
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