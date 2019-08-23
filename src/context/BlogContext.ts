import React, { FC } from 'react'

import createDataContext from './createDataContext'
import BlogPostForm from 'src/components/BlogPostForm'

export interface PostsInterface extends FC {
  id: number
  title: string
  content: string
  length: number
  callback: () => void
  getParam: (text: string) => void
}

export interface StateInterface {
  id?: number
  title?: string
  content?: string
  filter: Function
  map: Function
  length: number
  callback?: () => void
  data?: PostsInterface[]
  [Symbol.iterator]?: any
}

export const initialState: StateInterface = {
  // blogPosts: { title: 'Default Post', length: 1 },
  data: [],
  length: 1,
  filter: Function,
  map: Function,
  // [Symbol.iterator]: function*() {
  //   const properties = Object.keys(this)
  //   for (const i of properties) {
  //     yield [i, this[i]]
  //   }
  // },
}

interface ActionType {
  type: any
  payload: any
}
// export const blogState: StateInterface = {
//   activeEntity: { id: 1, name: 'John Doe' },
//   clickCount: 0,
// }

const blogReducer = (
  state: StateInterface,
  action: ActionType
): StateInterface => {
  switch (action.type) {
    case 'editBlogPost':
      return state.map((blogPost: PostsInterface) => {
        console.log('blog post')
        console.log(blogPost)
        console.log('blog post payload')
        console.log(action.payload)
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    case 'deleteBlogPost':
      return state.filter(
        (blogPost: PostsInterface) => blogPost.id !== action.payload
      )
    case 'addBlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    default:
      return state
  }
}
const addBlogPost = (dispatch: React.Dispatch<any>) => {
  return (title: string, content: string, callback: Function) => {
    dispatch({ type: 'addBlogPost', payload: { title, content } })
    if (callback) {
      callback()
    }
  }
}
const deleteBlogPost = (dispatch: React.Dispatch<any>) => {
  return (id: number) => {
    dispatch({ type: 'deleteBlogPost', payload: id })
  }
}

const editBlogPost = (dispatch: React.Dispatch<any>) => {
  return (id: number, title: string, content: string, callback: Function) => {
    console.log('dispatch')
    console.log(id, title, content)
    dispatch({
      type: 'editBlogPost',
      payload: { id, title, content },
    })
    if (callback) {
      callback()
    }
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
)

// example using create-react-context from npm registry

// import createReactContext from 'create-react-context'
// import React, { ReactChildren } from 'react'

// const BlogContext = createReactContext(null)
// interface ChildrenInterface {
//   children: ReactChildren
//   value?: any
// }
// export const BlogProvider = ({ children }: { children: ChildrenInterface }) => {
//   return <BlogContext.Provider value={null}>{children}</BlogContext.Provider>
// }
