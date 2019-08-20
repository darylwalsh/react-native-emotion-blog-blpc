import React, { FC, useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {
  NavigationParams,
  NavigationScreenComponent,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import { Context } from '../context/BlogContext'

export interface PostsInterface {
  id: number
  title: string
  length: number
  onPress: (text: string) => void
}
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
  onPress: (text: string) => void
}

const CreateScreen: NavigationScreenComponent<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context)
  // const blogPost = state.find(
  //   (blogPost: PostsInterface) => blogPost.id === navigation.getParam('id')
  // )

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
})

export default CreateScreen
