// External Dependencies
import React from 'react'
import { NavigatorIOS, Text } from 'react-native'

// Our Components
import Home from '../../screens/Home'

export default () => (
  <NavigatorIOS
    initialRoute={{
      component: Home,
      title: 'Your Decks',
    }}
     style={{flex: 1}}
     barTintColor='#3B48EE'
     tintColor='#FFF'
     titleTextColor='#FFF'
     shadowHidden={false}
  />
)