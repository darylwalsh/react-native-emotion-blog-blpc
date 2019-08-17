import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import BlogContext, { PostsInterface } from '../context/BlogContext'

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext)
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={data}
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
