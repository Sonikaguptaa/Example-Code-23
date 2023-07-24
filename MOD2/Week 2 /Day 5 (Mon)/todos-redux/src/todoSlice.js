import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    listType: 'all'
}

const todoSlice = createSlice({
    name: 'todos',
    initialState
})

export default todoSlice.reducer