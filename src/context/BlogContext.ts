import createDataContext from './createDataContext'

export interface PostsInterface {
  title: string
  length: number
}

interface StateInterface {
  title?: string
  length: number
  data?: PostsInterface[]
  [Symbol.iterator]?: any
}

export const initialState: StateInterface = {
  // blogPosts: { title: 'Default Post', length: 1 },
  data: [],
  length: 1,
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
    case 'addBlogPost':
      return [...state, { title: `Blog Post #${state.length + 1}` }]
    default:
      return state
  }
}
const addBlogPost = (dispatch: React.Dispatch<any>) => {
  return () => {
    dispatch({ type: 'addBlogPost' })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
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
