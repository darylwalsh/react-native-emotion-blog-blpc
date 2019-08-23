import React, { useContext, FC } from 'react'
import { StyleSheet } from 'react-native'
import {
  NavigationParams,
  NavigationScreenConfig,
  NavigationScreenProp,
  NavigationStackScreenOptions,
  NavigationState,
} from 'react-navigation'

import { Context, PostsInterface } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
import { number } from 'prop-types'

interface Props extends PostsInterface {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
  navigationOptions: NavigationScreenConfig<NavigationStackScreenOptions>
}
const EditScreen: FC<Props> = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find((blogPost: PostsInterface) => blogPost.id === id)

  return (
    <BlogPostForm
      initialValues={{
        id: id,
        title: blogPost.title,
        content: blogPost.content,
      }}
      onSubmit={(title: string, content: string): any => {
        console.log('Submit Form')
        console.log(id, title, content)
        // return id
        return editBlogPost(id, title, content, () => navigation.pop())
        //console.log(title, content)
        //return title
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
