import React, { createContext, FC, ReactNode, useReducer } from 'react'

// type ActionTypeFunction = () => void
// interface ActionType {
// [key: string]: Function
// payload: any
// }
type ReducerType = any
type StateType = any
// interface CallBackFunc<T, U> {
//   (input: T): U
// }
type OptionalIndexed<T> = { [key: string]: T | undefined }
interface ChildrenInterface {
  children?: ReactNode
  //   value?: any
}
export const initialState: StateType = {
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
export default (
  reducer: ReducerType,
  actions: OptionalIndexed<any>,
  initialState: StateType
) => {
  const Context = createContext<StateType | any>(initialState)
  const Provider: FC<ChildrenInterface> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const boundActions = {}
    for (const key in actions) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore: unavailable type definition
      boundActions[key] = actions[key](dispatch)
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }
  return { Context, Provider }
}
