// External Dependencies
import React, { Component } from 'react'
import styled from 'styled-components/native'
import Swipeable from 'react-native-swipeable';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

// Our Components
import Header from '../../../Styled/components/Header'
import Text from '../../../Styled/components/Text'
import ImageContainer from '../../../Styled/components/ImageContainer'

// Our Dependencies
import { getRandomInt } from '../../../../utils'

// Grab all the backgrounds. 
// Workaround for https://github.com/facebook/react-native/issues/2481

const IMAGES = [
  require('./images/yellow-background.png'),
  require('./images/green-background.png'),
  require('./images/orange-background.png'),
  require('./images/blue-background.png'),
]
export default ({ deck }) => (
  <Swipeable leftButtons={leftButtons} rightButtons={rightButtons}>
    <TouchableWithoutFeedback onPress={console.log('Deck Pressed')}>
      <DeckImageContainer source={IMAGES[getRandomInt(0, 3)]}>
        <CardCount>
          <Text>{deck.cardCount}</Text>
          <SimpleLineIcons 
            size={15} 
            name='layers'
            color={'white'}
            style={{backgroundColor: 'transparent'}}  
            />
        </CardCount>
        <Header>{deck.name}</Header>
      </DeckImageContainer>
    </TouchableWithoutFeedback>
  </Swipeable>
)

// Styled Components
const DeckImageContainer = styled(ImageContainer)`
  flex: 1
  flex-direction: row
  align-items: center

`
const SwipeableButton = styled.TouchableOpacity`
  flex: 1
  padding-right: 30
  padding-left: 30
  justify-content: center
  background-color: ${props => props.delete ? '#D0021B' : '#3F81DC'};
`
const SwipeableButtonLeft = styled(SwipeableButton)`
  align-items: flex-end
`
const CardCount = styled.View`
  margin-left: 30
  flex-direction: row
  align-self: flex-start
`
// Swipeable Buttons
const leftButtons = [
  <SwipeableButtonLeft onPress={console.log('Quiz Pressed')}>
    <Ionicons
      size={40}
      color={'white'}
      name='ios-book-outline'
    />
    <Text>Quiz</Text>
  </SwipeableButtonLeft>,
];

const rightButtons = [
  <SwipeableButton onPress={console.log('Add Pressed')}>
    <Ionicons
      size={40}
      color={'white'}
      name='ios-add'
    />
    <Text>Card</Text>
  </SwipeableButton>,
  <SwipeableButton delete onPress={console.log('Delete Pressed')}>
    <Ionicons
      size={40}
      color={'white'}
      name='ios-trash-outline'
    />
    <Text>Deck</Text>
  </SwipeableButton>,
];

