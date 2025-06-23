import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:1,text:"hello world"}]
}
 export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{// (state,action) is syntax remeber it
            const todo = {
                id: nanoid(),//this function call give us new id
                text: action.payload// we can also write payload.text but variable name is same we are ignoring it and  action and payload is object
            }
            state.todos.push(todo);// here todos is from initail state beacause  this is our state
        },
        removeTodo:(state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id!==action.payload)
        },
    }
 })

 export const {addTodo,removeTodo} = todoSlice.actions

 export default todoSlice.reducer