import React, { createContext, FC, ReactNode, useReducer } from 'react'

export interface PostsInterface {
  title: string
  length: number
}

interface StateInterface {
  blogPosts: any
  length: number
  data?: PostsInterface[]
}

export const initialState: StateInterface = {
  blogPosts: { title: 'Default Post', length: 1 },
  data: [],
  length: 1,
}

const BlogContext = createContext<StateInterface | any>(initialState)
interface ChildrenInterface {
  children?: ReactNode
  //   value?: any
}
interface ActionType {
  type: 'addBlogPost' | 'decrement'
  payload: number
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
      return {
        ...state,
        blogPosts: [
          {
            ...state.blogPosts,
            ...{ title: `Blog Post #${state.length + 1}` },
          },
        ],
      }
    default:
      return state
  }
}

export const BlogProvider: FC<ChildrenInterface> = ({ children }) => {
  const [blogPosts, dispatch] = useReducer<StateInterface | any>(
    blogReducer,
    []
  )

  const addBlogPost = (state: any) => {
    dispatch({ type: 'addBlogPost' })
  }
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
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
