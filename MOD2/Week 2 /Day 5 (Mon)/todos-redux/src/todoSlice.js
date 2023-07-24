import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    listType: 'all'
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                text: action.payload, // input (from App)
                completed: false,
                id: crypto.randomUUID() 
            };
            state.list.push(todo)
        },
        deleteTodo: (state, action) => {
            let index = state.list.findIndex((todo) => todo.id === action.payload)
            state.list.splice(index, 1)
        },
        completeTodo: (state, action) => {
            let index = state.list.findIndex((todo) => todo.id === action.payload)
            state.list[index].completed = !state.list[index].completed
        }
    }
})

export default todoSlice.reducer

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions