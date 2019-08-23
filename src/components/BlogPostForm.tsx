import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export interface PostsInterface {
  id: number
  title: string
  content: string
  length: number
  // onSubmit: (text: string) => Function
  // onPress: (text: string) => Function
}
interface Props {
  // navigation?: NavigationScreenProp<NavigationState, NavigationParams>
  // onPress: (text: string) => void
  initialValues: { id: number; title: string; content: string }
  onSubmit: (text: string, content: string) => void
}

const BlogPostForm = (props: Props) => {
  const [title, setTitle] = useState(props.initialValues.title)
  const [content, setContent] = useState(props.initialValues.content)
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
        title="Save Blog Post"
        onPress={() => props.onSubmit(title, content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    id: 0,
    title: '',
    content: '',
  } as Partial<Props>,
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

export default BlogPostForm
