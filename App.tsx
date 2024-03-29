import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { Provider } from './src/context/BlogContext'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'BLPC React Native',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
