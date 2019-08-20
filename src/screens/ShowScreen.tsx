import React, { FC, PropsWithChildren, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import { Context } from '../context/BlogContext'

// interface Props {
//navigation: NavigationScreenProp<NavigationState, NavigationParams>
// navigation: PropsWithChildren
// }
export interface PostsInterface {
  id: number
  title: string
  length: number
}
// export interface PropsInterface {
//   // navigation: NavigationScreenProp<NavigationState, NavigationParams>
//   navigation: NavigationScreenConfigPro
//   screenProps: NavigationScreenProp
// }
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>

const ShowScreen: FC<Props> = ({ navigation }) => {
  const { state } = useContext(Context)
  const paramId = navigation.getParam('id')
  console.log('paramId here:')
  console.log(paramId)
  console.log('breaking break')
  console.log(navigation)
  console.log('breaking break')
  console.log(state)
  const blogPost = state.find(
    (blogPost: PostsInterface) => blogPost.id === navigation.getParam('id')
  )
  console.log('BlogPost')
  console.log({ blogPost })
  console.log('breaking bllog break')
  //console.log({blogPost.id})
  console.log('breaking bllog break')
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
