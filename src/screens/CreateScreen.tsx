import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import {
  NavigationParams,
  NavigationScreenComponent,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
// export interface PostsInterface {
//   id: number
//   title: string
//   length: number
//   onSubmit: any
// }
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
  // onPress: (text: string) => void
  //onSubmit: (text: string) => Function
}

// function handleOnSubmit(addBlogPost: (title:string) => void) {
//   addBlogPost()
// }
const CreateScreen: NavigationScreenComponent<Props> = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm
      onSubmit={(title: string, content: string): string => {
        return addBlogPost(title, content, () => navigation.navigate('Index'))
        // return title
      }}
    />
  )
  // const blogPost = state.find(
  //   (blogPost: PostsInterface) => blogPost.id === navigation.getParam('id')
  // )
}

const styles = StyleSheet.create({})

export default CreateScreen
