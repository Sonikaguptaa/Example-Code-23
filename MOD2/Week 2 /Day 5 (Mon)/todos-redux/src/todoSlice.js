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
            let item = {
                text: action.payload, // input (from App)
                completed: false,
                id: crypto.randomUUID() 
            };
            state.list.push(item)
        }
    }
})

export default todoSlice.reducer

export const { addTodo } = todoSlice.actions