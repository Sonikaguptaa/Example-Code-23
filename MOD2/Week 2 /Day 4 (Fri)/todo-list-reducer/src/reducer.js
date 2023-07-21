 // OPTIONAL (more abstraction)

  // action types
  const ADD_TODO = 'ADD'
  const DELETE_TODO = 'DELETE'
  const COMPLETE_TODO = 'COMPLETE'
  const CHANGE_LIST_TYPE = 'TYPE'

export default function reducer(state, action) {
    switch(action.type) {
      case ADD_TODO: 
        let item = {
          text: action.payload,
          completed: false,
          id: crypto.randomUUID() 
        };
        return { ...state, list: [...state.list, item] }
      case DELETE_TODO:
        return { ...state, list: state.list.filter((item) => item.id !== action.payload) }
      case COMPLETE_TODO:
        return { ...state, list: state.list.map((item) =>
          item.id === action.payload ? { ...item, completed: !item.completed } : item )
        }
      case CHANGE_LIST_TYPE:
        return { ...state, listType: action.payload }
      default:
        return state
    }
  }

 

  // action creators 
  export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
  })

  export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
  })

  export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    payload: id
  })

  export const changeListType = (type) => ({
    type: CHANGE_LIST_TYPE,
    payload: type
  })