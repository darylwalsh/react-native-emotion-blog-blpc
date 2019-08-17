import React, { createContext, FC, ReactNode, useState } from 'react'

export interface PostsInterface {
  title: string
}

interface StateInterface {
  blogPosts: PostsInterface[]
}

const initialState: StateInterface = {
  blogPosts: [],
}

const BlogContext = createContext<StateInterface | any>(initialState)
interface ChildrenInterface {
  children?: ReactNode
  //   value?: any
}

export const BlogProvider: FC<ChildrenInterface> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<StateInterface | any>([])

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {
        title: `Blog Post #${blogPosts.length + 1}`,
      },
    ])
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
