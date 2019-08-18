import createDataContext from './createDataContext'

export interface PostsInterface {
  id: number
  title: string
  length: number
}

interface StateInterface {
  title?: string
  filter: Function
  length: number
  data?: PostsInterface[]
  [Symbol.iterator]?: any
}

export const initialState: StateInterface = {
  // blogPosts: { title: 'Default Post', length: 1 },
  data: [],
  length: 1,
  filter: Function,
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
    case 'deleteBlogPost':
      return state.filter(
        (blogPost: PostsInterface) => blogPost.id !== action.payload
      )
    case 'addBlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ]
    default:
      return state
  }
}
const addBlogPost = (dispatch: React.Dispatch<any>) => {
  return () => {
    dispatch({ type: 'addBlogPost' })
  }
}
const deleteBlogPost = (dispatch: React.Dispatch<any>) => {
  return (id: number) => {
    dispatch({ type: 'deleteBlogPost', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
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
