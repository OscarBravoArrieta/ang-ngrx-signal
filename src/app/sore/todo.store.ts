 import { signalStore, withState } from "@ngrx/signals"
 import { Todo } from "../model/todo.model"

 export type TodosFilter = "all" | "active" | "completed"

 type TodosState = {
     todos: Todo[]
     loading: boolean
     filter: TodosFilter
 }

 const initialState: TodosState = {

     todos: [],
     loading: false,
     filter: "all"
 }

 export const TodosStore = signalStore(
     {providedIn: 'root'},
     withState(initialState)
 )
