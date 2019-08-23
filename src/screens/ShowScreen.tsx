import React, { FC, PropsWithChildren, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  NavigationParams,
  NavigationScreenComponent,
  NavigationScreenConfig,
  NavigationScreenProp,
  NavigationScreenProps,
  NavigationStackScreenOptions,
  NavigationState,
} from 'react-navigation'

import { EvilIcons } from '@expo/vector-icons'

import { Context, PostsInterface } from '../context/BlogContext'

// interface Props {
//navigation: NavigationScreenProp<NavigationState, NavigationParams>
// navigation: PropsWithChildren
// }

// export interface PostsInterface {
//   id: number
//   title: string
//   length: number
// }

// export interface PropsInterface {
//   // navigation: NavigationScreenProp<NavigationState, NavigationParams>
//   navigation: NavigationScreenConfigPro
//   screenProps: NavigationScreenProp
// }
interface Props extends PostsInterface {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
  navigationOptions: NavigationScreenConfig<NavigationStackScreenOptions>
}
// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>
// navigation: NavigationScreenProp<
// NavigationParams,
// NavigationScreenConfigProps
// >
// navigationOptions: NavigationStackScreenOptions
// navigationOptions: Record<string, any>
// }
// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>
type NavigationScreenFC = NavigationScreenComponent & FC
const ShowScreen: NavigationScreenComponent<Props> = ({ navigation }) => {
  const { state } = useContext(Context)
  //const paramId = navigation.getParam('id')
  // console.log('paramId here:')
  // console.log(paramId)
  // console.log('breaking break')
  // console.log(navigation)
  // console.log('breaking break')
  // console.log(state)
  const blogPost = state.find(
    (blogPost: PostsInterface) => blogPost.id === navigation.getParam('id')
  )
  // console.log('BlogPost')
  // console.log({ blogPost })
  // console.log('breaking bllog break')
  //console.log({blogPost.id})
  // console.log('breaking bllog break')
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({
  navigation,
}: NavigationScreenProps<Props>) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  }
}
const styles = StyleSheet.create({})

export default ShowScreen
