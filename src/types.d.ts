import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'> // cambiar una propiedad
export type TodoTitle = Pick<Todo, 'title'> // cambiar una propiedad
export type TodoCompleted = Pick<Todo, 'completed'> // cambiar una propiedad

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
