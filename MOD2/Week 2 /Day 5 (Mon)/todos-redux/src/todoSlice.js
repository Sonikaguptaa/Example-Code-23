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
            // state.list
            // state.listType
            // action.payload
            console.log(action)
        }
    }
})

export default todoSlice.reducer

export const { addTodo } = todoSlice.actions