import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { Context, initialState, PostsInterface } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context)
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost: PostsInterface) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
